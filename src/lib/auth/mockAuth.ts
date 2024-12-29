import { User, AuthError } from './types';
import { authStorage } from './storage';

const MOCK_USERS: Record<string, User> = {};

export const mockAuth = {
  signUp: async (email: string, password: string): Promise<User> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (MOCK_USERS[email]) {
      throw { message: 'User already exists', code: 'auth/email-already-in-use' } as AuthError;
    }
    
    if (password.length < 6) {
      throw { message: 'Password must be at least 6 characters', code: 'auth/weak-password' } as AuthError;
    }
    
    const user: User = {
      id: crypto.randomUUID(),
      email,
      createdAt: new Date()
    };
    
    MOCK_USERS[email] = user;
    authStorage.saveUser(user);
    
    return user;
  },
  
  signIn: async (email: string, password: string): Promise<User> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const user = MOCK_USERS[email];
    if (!user) {
      throw { message: 'Invalid email or password', code: 'auth/invalid-credentials' } as AuthError;
    }
    
    authStorage.saveUser(user);
    return user;
  },
  
  signOut: async () => {
    await new Promise(resolve => setTimeout(resolve, 200));
    authStorage.removeUser();
  }
};