import React from 'react';
import {
  Smartphone,
  Globe,
  Tv,
  Zap,
  GraduationCap,
  Trophy,
  Plane,
  CreditCard,
  PhoneCall,
  Search,
  ChevronRight,
} from 'lucide-react';
import { QuickActionType } from '../types/index.ts';

interface ServicesViewProps {
  onSelectAction: (act: QuickActionType) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onSelectAction }) => {
  const serviceCategories = [
    {
      title: 'Telecom & Internet',
      items: [
        { id: 'buy-airtime' as QuickActionType, name: 'Buy Airtime', desc: 'MTN, Airtel, Glo, 9mobile', icon: Smartphone, color: 'bg-emerald-100 text-emerald-800' },
        { id: 'buy-data' as QuickActionType, name: 'Buy Data Bundles', desc: 'SME, Direct, Corporate Gifting', icon: Globe, color: 'bg-blue-100 text-blue-800' },
        { id: 'view-all-actions' as QuickActionType, name: 'Airtime to Cash', desc: 'Convert excess airtime to wallet', icon: PhoneCall, color: 'bg-amber-100 text-amber-800' },
      ],
    },
    {
      title: 'Utilities & Bills',
      items: [
        { id: 'view-all-actions' as QuickActionType, name: 'Electricity Tokens', desc: 'IKEDC, EKEDC, IBEDC, AEDC, etc.', icon: Zap, color: 'bg-yellow-100 text-yellow-800' },
        { id: 'view-all-actions' as QuickActionType, name: 'Cable TV Subscription', desc: 'DSTV, GOTV, Startimes, Showmax', icon: Tv, color: 'bg-purple-100 text-purple-800' },
      ],
    },
    {
      title: 'Education & Entertainment',
      items: [
        { id: 'view-all-actions' as QuickActionType, name: 'Exam Result Checker', desc: 'WAEC, NECO, NABTEB, JAMB PINs', icon: GraduationCap, color: 'bg-rose-100 text-rose-800' },
        { id: 'view-all-actions' as QuickActionType, name: 'Betting Wallet Funding', desc: 'SportyBet, Bet9ja, 1xBet, Betway', icon: Trophy, color: 'bg-emerald-100 text-emerald-800' },
      ],
    },
  ];

  return (
    <div className="px-4 py-4 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-extrabold text-slate-900">All Services</h2>
        <span className="text-xs text-slate-500">Fast & Automated</span>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
        <input
          type="text"
          placeholder="Search service (e.g. MTN Data, IKEDC...)"
          className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
        />
      </div>

      {/* Categories */}
      <div className="space-y-4">
        {serviceCategories.map((cat, idx) => (
          <div key={idx} className="space-y-2">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 px-1">
              {cat.title}
            </h3>
            <div className="bg-white border border-slate-200/80 rounded-2xl divide-y divide-slate-100 overflow-hidden shadow-xs">
              {cat.items.map((item, itemIdx) => {
                const Icon = item.icon;
                return (
                  <button
                    key={itemIdx}
                    type="button"
                    onClick={() => onSelectAction(item.id)}
                    className="w-full p-3.5 flex items-center justify-between hover:bg-slate-50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl ${item.color} flex items-center justify-center shrink-0`}>
                        <Icon className="w-4 h-4 stroke-[2.2]" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 leading-tight">
                          {item.name}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
