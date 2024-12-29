import React from 'react';
import { Coins, TrendingUp, Shield, Globe2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { FeatureCard } from '../components/home/FeatureCard';

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <Coins className="w-8 h-8 text-yellow-400" />
            <span className="text-2xl font-bold">bit$</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <Button href="/" variant="outline">Home</Button>
            <Button href="/about" variant="outline">About</Button>
            <Button href="/whitepaper" variant="outline">Whitepaper</Button>
          </div>
        </nav>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl font-bold mb-6">The Future of Digital Currency</h1>
            <p className="text-xl text-gray-300 mb-8">
              Experience lightning-fast transactions, unparalleled security, and global accessibility with bit$ - the next generation of cryptocurrency.
            </p>
            <div className="flex space-x-4">
              <Button href="/whitepaper" withArrow>Read Whitepaper</Button>
              <Button href="#features" variant="outline">Learn More</Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Coins className="w-64 h-64 text-yellow-400" />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose bit$?</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <FeatureCard
            Icon={TrendingUp}
            title="Lightning Fast"
            description="Complete transactions in under 2 seconds with our advanced blockchain technology."
          />
          <FeatureCard
            Icon={Shield}
            title="Ultra Secure"
            description="State-of-the-art encryption and security measures to protect your assets."
          />
          <FeatureCard
            Icon={Globe2}
            title="Global Access"
            description="Seamlessly transact with anyone, anywhere in the world, at any time."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="bg-white/5 rounded-2xl p-12 text-center backdrop-blur-sm">
          <h2 className="text-4xl font-bold mb-6">Join the Revolution</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of the future of digital currency. Join our Telegram community to stay updated and connect with fellow bit$ enthusiasts.
          </p>
          <div className="flex justify-center">
            <Button href="https://t.me/+vvwtecGjlUE4MWM0" withArrow className="px-6 py-2 text-sm">
              Join Our Telegram
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}