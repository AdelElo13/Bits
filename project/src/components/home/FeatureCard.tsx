import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ Icon, title, description }: FeatureCardProps) {
  return (
    <div className="text-center">
      <Icon className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}