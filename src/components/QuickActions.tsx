import React from 'react';
import { ChevronRight, Globe, Smartphone, Gift } from 'lucide-react';
import { QuickActionType } from '../types/index.ts';

interface QuickActionsProps {
  onActionClick: (action: QuickActionType) => void;
}

export const QuickActions: React.FC<QuickActionsProps> = ({ onActionClick }) => {
  return (
    <section className="px-4 pt-5 pb-2">
      {/* Header Row */}
      <div className="flex items-center justify-between mb-3 px-1">
        <h2 className="text-[17px] font-bold text-slate-900 tracking-tight">
          Quick Actions
        </h2>
        <button
          type="button"
          onClick={() => onActionClick('view-all-actions')}
          className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-0.5 active:scale-95 transition-transform focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-600 rounded"
        >
          View All <ChevronRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
        {/* 1. Message Service */}
        <button
          type="button"
          onClick={() => onActionClick('message-service')}
          className="flex flex-col items-center justify-center bg-[#EBF7F0] hover:bg-[#DEF1E6] border border-[#CFECD9] rounded-2xl pt-3.5 pb-2.5 px-1.5 transition-all duration-150 active:scale-95 group shadow-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
        >
          {/* Icon with unread red notification dot */}
          <div className="relative mb-2">
            <div className="w-12 h-12 rounded-full bg-[#A0E6BE] flex items-center justify-center text-[#0B5C35] group-hover:scale-105 transition-transform shadow-xs">
              {/* Rounded chat bubble with dots */}
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7.5L3 21.5V6a2 2 0 0 1 2-2zm4 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
              </svg>
            </div>
            {/* Red Notification Dot from screenshot */}
            <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white shadow-xs" />
          </div>

          <span className="text-[12px] font-bold text-slate-800 text-center leading-tight tracking-tight">
            Message
          </span>
          <span className="text-[12px] font-bold text-slate-800 text-center leading-tight tracking-tight">
            Service
          </span>
        </button>

        {/* 2. Buy Data */}
        <button
          type="button"
          onClick={() => onActionClick('buy-data')}
          className="flex flex-col items-center justify-center bg-[#EBF7F0] hover:bg-[#DEF1E6] border border-[#CFECD9] rounded-2xl pt-3.5 pb-2.5 px-1.5 transition-all duration-150 active:scale-95 group shadow-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
        >
          <div className="mb-2">
            <div className="w-12 h-12 rounded-full bg-[#A0E6BE] flex items-center justify-center text-[#0B5C35] group-hover:scale-105 transition-transform shadow-xs">
              <Globe className="w-6 h-6 stroke-[2]" />
            </div>
          </div>

          <span className="text-[12px] font-bold text-slate-800 text-center leading-tight tracking-tight">
            Buy
          </span>
          <span className="text-[12px] font-bold text-slate-800 text-center leading-tight tracking-tight">
            Data
          </span>
        </button>

        {/* 3. Buy Airtime */}
        <button
          type="button"
          onClick={() => onActionClick('buy-airtime')}
          className="flex flex-col items-center justify-center bg-[#EBF7F0] hover:bg-[#DEF1E6] border border-[#CFECD9] rounded-2xl pt-3.5 pb-2.5 px-1.5 transition-all duration-150 active:scale-95 group shadow-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
        >
          <div className="mb-2">
            <div className="w-12 h-12 rounded-full bg-[#A0E6BE] flex items-center justify-center text-[#0B5C35] group-hover:scale-105 transition-transform shadow-xs">
              <Smartphone className="w-6 h-6 stroke-[2]" />
            </div>
          </div>

          <span className="text-[12px] font-bold text-slate-800 text-center leading-tight tracking-tight">
            Buy
          </span>
          <span className="text-[12px] font-bold text-slate-800 text-center leading-tight tracking-tight">
            Airtime
          </span>
        </button>

        {/* 4. Promo (Golden Card with HOT badge) */}
        <button
          type="button"
          onClick={() => onActionClick('promo')}
          className="flex flex-col items-center justify-center bg-[#FFF8EB] hover:bg-[#FEF1D7] border border-[#FEE3A9] rounded-2xl pt-3.5 pb-2 px-1.5 transition-all duration-150 active:scale-95 group shadow-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 relative"
        >
          <div className="mb-2">
            <div className="w-12 h-12 rounded-full bg-[#FCE19B] flex items-center justify-center text-[#B45309] group-hover:scale-105 transition-transform shadow-xs">
              <Gift className="w-6 h-6 stroke-[2] fill-amber-500/20" />
            </div>
          </div>

          <span className="text-[12px] font-bold text-slate-800 text-center leading-tight tracking-tight mb-1">
            Promo
          </span>

          {/* HOT Badge Pill from screenshot */}
          <span className="bg-[#E11D48] text-white text-[9.5px] font-black tracking-wider uppercase px-2.5 py-0.5 rounded-full shadow-xs">
            HOT
          </span>
        </button>
      </div>
    </section>
  );
};
