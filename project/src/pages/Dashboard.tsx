import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Header } from '../components/layout/Header';
import { DashboardStats } from '../components/dashboard/DashboardStats';
import { TransactionHistory } from '../components/dashboard/TransactionHistory';
import { UserProfile } from '../components/dashboard/UserProfile';
import { ReferralProgram } from '../components/dashboard/ReferralProgram';

export function Dashboard() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/presale" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900 text-white">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[300px,1fr] gap-8">
            <UserProfile />
            <div className="space-y-8">
              <DashboardStats />
              <TransactionHistory />
              <ReferralProgram />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}