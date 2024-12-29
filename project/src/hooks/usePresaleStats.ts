import { useState, useEffect } from 'react';

interface PresaleStats {
  total_tokens: number;
  tokens_sold: number;
  participants: number;
}

const MOCK_STATS: PresaleStats = {
  total_tokens: 200000000,
  tokens_sold: 45000000,
  participants: 1250
};

export function usePresaleStats() {
  const [stats, setStats] = useState<PresaleStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setStats(MOCK_STATS);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return { stats, loading };
}