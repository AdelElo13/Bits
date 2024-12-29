import { useState, useEffect } from 'react';
import { User, AuthError } from '../lib/auth/types';
import { mockAuth } from '../lib/auth/mockAuth';
import { authStorage } from '../lib/auth/storage';

export function useAuth() {
  const [user, setUser] = useState<User | null>(() => authStorage.getUser());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AuthError | null>(null);

  useEffect(() => {
    // Check local storage for existing session
    const storedUser = authStorage.getUser();
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const signUp = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const user = await mockAuth.signUp(email, password);
      setUser(user);
    } catch (err) {
      setError(err as AuthError);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const user = await mockAuth.signIn(email, password);
      setUser(user);
    } catch (err) {
      setError(err as AuthError);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setLoading(true);
    try {
      await mockAuth.signOut();
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    error,
    signUp,
    signIn,
    signOut
  };
}