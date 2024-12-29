import React from 'react';
import { User, LogOut } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../ui/Button';

export function UserProfile() {
  const { user, signOut } = useAuth();

  return (
    <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
      <div className="flex items-center space-x-4 mb-6">
        <div className="p-3 bg-yellow-400/10 rounded-full">
          <User className="w-8 h-8 text-yellow-400" />
        </div>
        <div>
          <h2 className="text-lg font-semibold">{user?.email}</h2>
          <p className="text-sm text-gray-400">Member since {new Date(user?.createdAt || '').toLocaleDateString()}</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <Button
          variant="outline"
          className="w-full justify-center"
          onClick={() => signOut()}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  );
}