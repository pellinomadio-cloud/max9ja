import React from 'react';
import { ChevronRight } from 'lucide-react';
import promoGiftImg from '../assets/images/promo_gift_coins_1790110313584.jpg';

interface PromoBannerProps {
  onCheckPromo: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onCheckPromo }) => {
  return (
    <div className="px-4 py-3">
      <div className="relative rounded-2xl overflow-hidden shadow-lg shadow-emerald-950/20 bg-gradient-to-r from-[#032615] via-[#074427] to-[#042414] border border-emerald-600/30 p-4 text-white flex items-center justify-between min-h-[148px]">
        {/* Ambient lighting effects */}
        <div className="absolute -left-10 -bottom-10 w-36 h-36 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute right-0 top-0 w-40 h-40 bg-amber-400/15 rounded-full blur-2xl pointer-events-none" />

        {/* Left Text & CTA Content */}
        <div className="relative z-10 max-w-[58%] sm:max-w-[62%] flex flex-col items-start">
          {/* Special Offer Badge */}
          <div className="inline-flex items-center gap-1 bg-[#DC2626] text-white text-[10.5px] font-bold px-2.5 py-0.5 rounded-full shadow-xs mb-1.5">
            <span>🔥</span>
            <span>Special Offer</span>
          </div>

          {/* Headline */}
          <h3 className="text-[15px] sm:text-[16px] font-extrabold text-white leading-tight tracking-tight">
            Get Amazing Deals & Exciting Rewards!
          </h3>

          {/* Subtitle */}
          <p className="text-[11px] font-medium text-emerald-200/90 leading-tight mt-1">
            Buy data, airtime and more at the best rates.
          </p>

          {/* Check Promo Pill Button */}
          <button
            type="button"
            onClick={onCheckPromo}
            className="mt-3 bg-[#F6BA3B] hover:bg-[#E5AA2C] active:scale-95 text-slate-950 text-[11.5px] font-extrabold px-3.5 py-1.5 rounded-full shadow-md shadow-amber-950/20 flex items-center gap-1 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
          >
            <span>Check Promo</span>
            <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
          </button>
        </div>

        {/* Right 3D Gift Box & Floating Coins Imagery */}
        <div className="relative z-10 w-[38%] sm:w-[35%] flex items-center justify-center shrink-0">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
            {/* Generated 3D Asset */}
            <img
              src={promoGiftImg}
              alt="Promo Rewards 3D Gift Box with Golden Coins"
              className="w-full h-full object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-300"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Graceful CSS fallback if image asset cannot render
                e.currentTarget.style.display = 'none';
                const fallback = document.getElementById('promo-fallback');
                if (fallback) fallback.style.display = 'flex';
              }}
            />

            {/* CSS / SVG Fallback if image fails */}
            <div
              id="promo-fallback"
              className="hidden w-24 h-24 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-300 p-3 items-center justify-center shadow-xl"
            >
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center text-3xl">
                🎁
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
