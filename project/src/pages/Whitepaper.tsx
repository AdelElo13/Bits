import React from 'react';
import { Header } from '../components/layout/Header';
import { TableOfContents } from '../components/whitepaper/TableOfContents';
import { WhitepaperContent } from '../components/whitepaper/WhitepaperContent';

export function Whitepaper() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900 text-white">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">bit$ Whitepaper</h1>
          <p className="text-xl text-gray-300 mb-12">The Future of Digital Currency</p>
          
          <div className="grid md:grid-cols-[300px,1fr] gap-8">
            <div className="md:sticky md:top-6 h-fit">
              <TableOfContents />
            </div>
            <WhitepaperContent />
          </div>
        </div>
      </main>
    </div>
  );
}