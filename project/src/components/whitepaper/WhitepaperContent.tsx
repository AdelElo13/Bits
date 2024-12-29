import React from 'react';
import { WhitepaperSection } from './WhitepaperSection';

export function WhitepaperContent() {
  return (
    <div className="space-y-16">
      <WhitepaperSection id="executive-summary" title="1. Executive Summary">
        <p>bit$ is a next-generation cryptocurrency built to redefine digital transactions. Combining advanced blockchain technology, enhanced security, and a user-centric ecosystem, bit$ provides a scalable, efficient, and accessible digital currency solution for the global market.</p>
      </WhitepaperSection>

      <WhitepaperSection id="introduction" title="2. Introduction">
        <p>The global economy is rapidly moving towards digitalization, yet the adoption of cryptocurrencies is hindered by challenges like scalability, transaction speeds, and security vulnerabilities. bit$ addresses these limitations, providing a secure and scalable solution with a vision to make digital currency universal.</p>
      </WhitepaperSection>

      <WhitepaperSection id="problem" title="3. The Problem: Current Challenges in Digital Currency">
        <ul className="list-disc pl-6 space-y-2">
          <li>Scalability Issues: Many cryptocurrencies face bottlenecks as networks grow.</li>
          <li>High Transaction Costs: Inefficient networks lead to higher fees.</li>
          <li>Security Concerns: Vulnerabilities in older blockchain systems.</li>
          <li>Accessibility Barriers: Limited adoption due to complex systems.</li>
        </ul>
      </WhitepaperSection>

      <WhitepaperSection id="solution" title="4. The Solution: What Makes bit$ Unique">
        <ul className="list-disc pl-6 space-y-2">
          <li>Revolutionary Blockchain: Built on a next-generation architecture optimized for performance.</li>
          <li>Global Accessibility: A focus on usability for both crypto enthusiasts and newcomers.</li>
          <li>Advanced Cryptography: Cutting-edge measures to protect users and their assets.</li>
        </ul>
      </WhitepaperSection>

      <WhitepaperSection id="core-features" title="5. Core Features">
        <ul className="list-disc pl-6 space-y-2">
          <li>Unparalleled Speed: Transactions completed in under 2 seconds.</li>
          <li>Low Fees: Near-zero transaction costs.</li>
          <li>Smart Contracts: Fully programmable and secure.</li>
          <li>Interoperability: Seamlessly integrate with existing financial systems.</li>
        </ul>
      </WhitepaperSection>

      <WhitepaperSection id="technology" title="6. Technology Overview">
        <ul className="list-disc pl-6 space-y-2">
          <li>Consensus Mechanism: Proof-of-Stake with enhanced scalability.</li>
          <li>Layered Architecture: Separate layers for transactions and smart contracts.</li>
          <li>Advanced Encryption: Utilizes post-quantum cryptography for future-proof security.</li>
        </ul>
      </WhitepaperSection>

      <WhitepaperSection id="tokenomics" title="7. Tokenomics">
        <h3 className="text-xl font-semibold mb-4">Total Supply: 1 Billion bit$ tokens</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>20% Initial Launch</li>
          <li>30% Ecosystem Development</li>
          <li>20% Team and Advisors (with vesting schedule)</li>
          <li>15% Marketing and Partnerships</li>
          <li>15% Reserves</li>
        </ul>
      </WhitepaperSection>

      <WhitepaperSection id="roadmap" title="8. Roadmap">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Phase 1: Launch (January 2024)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Initial Token Launch</li>
              <li>Exchange Listings</li>
              <li>Community Building</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Phase 2: Q1 2024</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Wallet App Release</li>
              <li>Strategic Partnerships</li>
              <li>Marketing Campaign</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Phase 3: Q2 2024</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>DeFi Integration</li>
              <li>Cross-chain Bridge</li>
              <li>Governance Launch</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Phase 4: Q3 2024</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>NFT Platform</li>
              <li>Metaverse Integration</li>
              <li>Global Expansion</li>
            </ul>
          </div>
        </div>
      </WhitepaperSection>

      <WhitepaperSection id="partnerships" title="9. Partnerships and Ecosystem">
        <p>bit$ collaborates with global enterprises, financial institutions, and blockchain innovators to ensure a robust and scalable ecosystem.</p>
      </WhitepaperSection>

      <WhitepaperSection id="security" title="10. Security and Compliance">
        <ul className="list-disc pl-6 space-y-2">
          <li>Compliance: Adhering to global regulations, including AML and KYC standards.</li>
          <li>Audit: Regular third-party security audits.</li>
          <li>Data Protection: Decentralized encryption for user privacy.</li>
        </ul>
      </WhitepaperSection>

      <WhitepaperSection id="team" title="11. Team and Advisors">
        <p>The bit$ team comprises blockchain experts, financial innovators, and technology pioneers. Together, they bring decades of experience in fintech, cryptography, and global markets.</p>
      </WhitepaperSection>

      <WhitepaperSection id="conclusion" title="12. Conclusion">
        <p>bit$ is more than a cryptocurrency—it's a vision for a truly global, secure, and efficient digital currency. Join us in revolutionizing how the world transacts.</p>
      </WhitepaperSection>

      <WhitepaperSection id="appendix" title="13. Appendix: Technical Details">
        <ul className="list-disc pl-6 space-y-2">
          <li>Blockchain Framework: Custom Layer-1 protocol</li>
          <li>Smart Contract Language: Rust-based for security and performance</li>
          <li>Network Nodes: Distributed across global regions for high availability</li>
        </ul>
      </WhitepaperSection>
    </div>
  );
}