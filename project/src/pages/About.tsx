import React from 'react';
import { Header } from '../components/layout/Header';
import { AboutHero } from '../components/about/AboutHero';
import { AboutTeam } from '../components/about/AboutTeam';
import { AboutMission } from '../components/about/AboutMission';

export function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900 text-white">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <AboutHero />
        <AboutMission />
        <AboutTeam />
      </main>
    </div>
  );
}