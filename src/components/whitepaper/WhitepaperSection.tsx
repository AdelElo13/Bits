import React from 'react';

interface WhitepaperSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function WhitepaperSection({ id, title, children }: WhitepaperSectionProps) {
  return (
    <section id={id} className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-yellow-400">{title}</h2>
      <div className="prose prose-invert max-w-none">
        {children}
      </div>
    </section>
  );
}