import React from 'react';
import { AnonymousNoiseIcon, YourVoiceIcon } from './Icons';

const CultureSection: React.FC = () => {
  return (
    <section className="bg-white p-6 rounded-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] fade-in-up-section">
      <h2 className="text-2xl font-bold text-center mb-6 text-[#3A4A3E]">
        On plante une nouvelle culture
      </h2>
      <div className="flex items-center justify-center space-x-2 sm:space-x-4">
        <div className="flex-1 bg-gray-100 p-4 rounded-xl text-center">
          <p className="font-semibold text-[#6B7B71]">Avant</p>
          <AnonymousNoiseIcon className="h-12 w-12 mx-auto my-3 text-[#3A4A3E]" />
          <h3 className="font-bold text-[#3A4A3E]">Le Bruit Anonyme</h3>
          <p className="text-sm text-[#6B7B71]">Toxique, stérile, perdu</p>
        </div>
        <span className="text-xl font-bold text-[#6B7B71]">VS</span>
        <div className="flex-1 bg-green-100 p-4 rounded-xl text-center">
          <p className="font-semibold text-[#3A4A3E]">Maintenant</p>
          <YourVoiceIcon className="h-12 w-12 mx-auto my-3 text-[#3A4A3E]" />
          <h3 className="font-bold text-[#3A4A3E]">Ta Voix</h3>
          <p className="text-sm text-[#6B7B71]">Direct, Constructif, Action</p>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;