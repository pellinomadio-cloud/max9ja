import React from 'react';
import { Bell } from 'lucide-react';

interface HeaderProps {
  userName?: string;
  onNotificationsClick: () => void;
  unreadCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  userName = 'Pellino',
  onNotificationsClick,
  unreadCount = 2,
}) => {
  return (
    <header className="px-5 pt-4 pb-3 flex items-center justify-between text-white">
      {/* Left: Brand Monogram Crest + User Welcome Lockup */}
      <div className="flex items-center gap-3">
        {/* max9ja Golden Emblem Badge */}
        <div className="relative group cursor-pointer transition-transform active:scale-95">
          <div className="w-13 h-13 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-yellow-600 p-[2.5px] shadow-lg shadow-black/20 flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-[#052817] flex items-center justify-center relative overflow-hidden border border-amber-300/40">
              {/* Subtle inner metallic radial glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2d7a4f_0%,transparent_70%)] opacity-80" />
              
              {/* Stylized max9ja Monogram 'M9' Emblem */}
              <svg
                viewBox="0 0 100 100"
                className="w-8 h-8 text-amber-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer dynamic swoosh / wing */}
                <path
                  d="M20 70 C 18 35, 45 18, 75 22 C 60 22, 32 32, 30 65 Z"
                  fill="url(#goldGrad)"
                />
                {/* Crest M Shape */}
                <path
                  d="M32 68 L 42 32 L 52 52 L 62 32 L 72 68 L 62 68 L 56 46 L 50 60 L 44 46 L 38 68 Z"
                  fill="url(#goldGrad)"
                  stroke="#FFE28A"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                {/* Nigeria 9ja Swoop */}
                <path
                  d="M68 62 C 78 50, 84 38, 74 28 C 65 20, 52 24, 48 27"
                  stroke="url(#goldGrad)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFF2A3" />
                    <stop offset="50%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#D97706" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          {/* Subtle online indicator dot */}
          <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#063B21] rounded-full" />
        </div>

        {/* User Welcome Text */}
        <div className="flex flex-col">
          <span className="text-xs font-normal text-emerald-200/90 tracking-wide">
            Welcome Back
          </span>
          <span className="text-[19px] font-extrabold text-white leading-tight tracking-tight">
            {userName}
          </span>
          <span className="text-[11px] font-medium text-emerald-300/85">
            Your success is our priority
          </span>
        </div>
      </div>

      {/* Right: Notifications Bell */}
      <button
        type="button"
        onClick={onNotificationsClick}
        aria-label="View notifications"
        className="relative p-2.5 rounded-full text-white/90 hover:text-white hover:bg-white/10 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
      >
        <Bell className="w-6 h-6 stroke-[2]" />
        {unreadCount > 0 && (
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-[#063B21] animate-pulse" />
        )}
      </button>
    </header>
  );
};
