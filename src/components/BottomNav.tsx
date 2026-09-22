import React from 'react';
import { Home, ArrowLeftRight, LayoutGrid, User } from 'lucide-react';
import { ActiveTab } from '../types/index.ts';

interface BottomNavProps {
  activeTab: ActiveTab;
  onChangeTab: (tab: ActiveTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onChangeTab }) => {
  const tabs = [
    {
      id: 'home' as ActiveTab,
      label: 'Home',
      icon: Home,
    },
    {
      id: 'transfer' as ActiveTab,
      label: 'Transfer',
      icon: ArrowLeftRight,
    },
    {
      id: 'services' as ActiveTab,
      label: 'Services',
      icon: LayoutGrid,
    },
    {
      id: 'profile' as ActiveTab,
      label: 'Profile',
      icon: User,
    },
  ];

  return (
    <nav className="sticky bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-4 py-1.5 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <div className="max-w-md mx-auto grid grid-cols-4 items-center">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onChangeTab(tab.id)}
              className="flex flex-col items-center justify-center py-1 group cursor-pointer transition-transform active:scale-95 focus:outline-none"
            >
              <div className="relative flex flex-col items-center">
                <Icon
                  className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-150 ${
                    isActive
                      ? 'text-[#063B21] stroke-[2.4] fill-[#063B21]/15'
                      : 'text-slate-400 group-hover:text-slate-600 stroke-[1.8]'
                  }`}
                />
                <span
                  className={`text-[10px] sm:text-[11px] font-semibold mt-1 transition-colors ${
                    isActive ? 'text-[#063B21] font-bold' : 'text-slate-500'
                  }`}
                >
                  {tab.label}
                </span>

                {/* Active Indicator Underline from screenshot */}
                {isActive && (
                  <span className="w-5 h-1 bg-[#063B21] rounded-full mt-0.5" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
