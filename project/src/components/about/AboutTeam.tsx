import React from 'react';

export function AboutTeam() {
  const team = [
    {
      name: "Sarah Chen",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300&q=80"
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80"
    },
    {
      name: "David Kim",
      role: "Head of Security",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300&q=80"
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member) => (
          <div key={member.name} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
            <p className="text-gray-300">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}