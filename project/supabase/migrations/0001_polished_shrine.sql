/*
  # Create presale system tables

  1. New Tables
    - `presale_stats`
      - Single row table to track global presale statistics
      - `total_tokens` (bigint) - Total tokens available for presale
      - `tokens_sold` (bigint) - Number of tokens sold
      - `participants` (bigint) - Number of participants
    
    - `presale_purchases`
      - Tracks individual token purchases
      - `id` (uuid, primary key)
      - `user_id` (uuid) - References auth.users
      - `amount` (bigint) - Number of tokens purchased
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Allow authenticated users to view presale stats
    - Allow authenticated users to insert into presale_purchases
    - Allow users to view their own purchases
*/

-- Create presale stats table
CREATE TABLE IF NOT EXISTS presale_stats (
  id SERIAL PRIMARY KEY,
  total_tokens BIGINT NOT NULL DEFAULT 200000000, -- 200M tokens for presale
  tokens_sold BIGINT NOT NULL DEFAULT 0,
  participants BIGINT NOT NULL DEFAULT 0,
  CONSTRAINT tokens_sold_check CHECK (tokens_sold <= total_tokens)
);

-- Insert initial stats
INSERT INTO presale_stats (id, total_tokens, tokens_sold, participants)
VALUES (1, 200000000, 0, 0)
ON CONFLICT (id) DO NOTHING;

-- Create presale purchases table
CREATE TABLE IF NOT EXISTS presale_purchases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id),
  amount BIGINT NOT NULL CHECK (amount > 0),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE presale_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE presale_purchases ENABLE ROW LEVEL SECURITY;

-- Policies for presale_stats
CREATE POLICY "Anyone can view presale stats"
  ON presale_stats
  FOR SELECT
  TO authenticated
  USING (true);

-- Policies for presale_purchases
CREATE POLICY "Users can insert their purchases"
  ON presale_purchases
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own purchases"
  ON presale_purchases
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Function to update stats after purchase
CREATE OR REPLACE FUNCTION update_presale_stats()
RETURNS TRIGGER AS $$
BEGIN
  -- Update tokens sold
  UPDATE presale_stats
  SET tokens_sold = tokens_sold + NEW.amount;
  
  -- Update participants count if this is user's first purchase
  UPDATE presale_stats
  SET participants = participants + 1
  WHERE NOT EXISTS (
    SELECT 1 FROM presale_purchases
    WHERE user_id = NEW.user_id
    AND id != NEW.id
  );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update stats after purchase
CREATE TRIGGER after_purchase_trigger
AFTER INSERT ON presale_purchases
FOR EACH ROW
EXECUTE FUNCTION update_presale_stats();