import { User } from './types';

const STORAGE_KEY = 'auth_user';

export const authStorage = {
  saveUser: (user: User) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  },
  
  getUser: (): User | null => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  },
  
  removeUser: () => {
    localStorage.removeItem(STORAGE_KEY);
  }
};