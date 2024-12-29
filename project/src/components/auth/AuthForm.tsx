import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { useAuth } from '../../hooks/useAuth';
import { AuthError } from '../../lib/auth/types';

interface AuthFormProps {
  onSuccess?: () => void;
}

export function AuthForm({ onSuccess }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { signUp, signIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Try to sign up first
      await signUp(email, password);
      onSuccess?.();
    } catch (err) {
      const authError = err as AuthError;
      // If user exists, try to sign in
      if (authError.code === 'auth/email-already-in-use') {
        try {
          await signIn(email, password);
          onSuccess?.();
          return;
        } catch (signInErr) {
          setError((signInErr as AuthError).message);
        }
      } else {
        setError(authError.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-500/10 border border-red-500 p-4 rounded-lg text-red-500">
          {error}
        </div>
      )}
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 bg-white/5 rounded-lg border border-white/10 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-2">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 bg-white/5 rounded-lg border border-white/10 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
          required
          minLength={6}
        />
      </div>

      <Button className="w-full" disabled={loading}>
        {loading ? 'Processing...' : 'Create Account & Sign In'}
      </Button>
    </form>
  );
}