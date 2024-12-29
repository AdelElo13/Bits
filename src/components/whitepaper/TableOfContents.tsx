import React from 'react';

interface Section {
  id: string;
  title: string;
}

const sections: Section[] = [
  { id: 'executive-summary', title: '1. Executive Summary' },
  { id: 'introduction', title: '2. Introduction' },
  { id: 'problem', title: '3. The Problem' },
  { id: 'solution', title: '4. The Solution' },
  { id: 'core-features', title: '5. Core Features' },
  { id: 'technology', title: '6. Technology Overview' },
  { id: 'tokenomics', title: '7. Tokenomics' },
  { id: 'roadmap', title: '8. Roadmap' },
  { id: 'partnerships', title: '9. Partnerships' },
  { id: 'security', title: '10. Security and Compliance' },
  { id: 'team', title: '11. Team and Advisors' },
  { id: 'conclusion', title: '12. Conclusion' },
  { id: 'appendix', title: '13. Appendix' },
];

export function TableOfContents() {
  return (
    <nav className="p-6 bg-white/5 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}