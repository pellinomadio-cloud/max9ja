import React from 'react';
import { Eye, EyeOff, ArrowUpRight, ArrowLeftRight, Wallet } from 'lucide-react';

interface WalletCardProps {
  balance?: number;
  isBalanceHidden: boolean;
  onToggleHideBalance: () => void;
  onFundWallet: () => void;
  onTransactionHistory: () => void;
}

export const WalletCard: React.FC<WalletCardProps> = ({
  balance = 0.0,
  isBalanceHidden,
  onToggleHideBalance,
  onFundWallet,
  onTransactionHistory,
}) => {
  const formattedBalance = balance.toLocaleString('en-NG', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="relative mx-4 rounded-3xl overflow-hidden shadow-xl shadow-emerald-950/20 text-white bg-gradient-to-br from-[#084227] via-[#063b22] to-[#042817] border border-emerald-700/40">
      {/* Decorative Golden Swooshes / Ribbons from screenshot */}
      <svg
        className="absolute right-0 top-0 bottom-0 h-full w-[55%] pointer-events-none opacity-95"
        viewBox="0 0 240 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Subtle dark emerald shadow curve */}
        <path
          d="M60 200 C 130 180, 160 90, 240 30 L 240 200 Z"
          fill="#032113"
          opacity="0.5"
        />
        {/* Primary Gold Ribbon */}
        <path
          d="M75 200 C 150 185, 175 95, 240 45 L 240 65 C 180 110, 155 195, 90 200 Z"
          fill="url(#goldGradientRibbon)"
        />
        {/* Secondary Delicate Gold Accent Ribbon */}
        <path
          d="M110 200 C 175 192, 195 125, 240 85 L 240 92 C 198 130, 180 196, 120 200 Z"
          fill="url(#goldGradientRibbonLight)"
        />
        <defs>
          <linearGradient id="goldGradientRibbon" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C98B22" />
            <stop offset="45%" stopColor="#F5B738" />
            <stop offset="85%" stopColor="#FFDE7A" />
            <stop offset="100%" stopColor="#E29F25" />
          </linearGradient>
          <linearGradient id="goldGradientRibbonLight" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ECC465" />
            <stop offset="100%" stopColor="#FFECA8" />
          </linearGradient>
        </defs>
      </svg>

      {/* Main Card Content */}
      <div className="relative z-10 p-5 pb-4">
        {/* Top Row: Total Balance label + Eye Icon */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-400/20 border border-amber-300/30 flex items-center justify-center text-amber-300 shadow-inner">
              <Wallet className="w-4 h-4 fill-amber-400 stroke-amber-400" />
            </div>
            <span className="text-sm font-medium text-emerald-100/90 tracking-wide">
              Total Balance
            </span>
          </div>

          {/* Toggle Eye Button */}
          <button
            type="button"
            onClick={onToggleHideBalance}
            className="p-1.5 text-emerald-200/90 hover:text-white rounded-full hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
            aria-label={isBalanceHidden ? 'Show balance' : 'Hide balance'}
          >
            {isBalanceHidden ? (
              <EyeOff className="w-5 h-5 stroke-[1.8]" />
            ) : (
              <Eye className="w-5 h-5 stroke-[1.8]" />
            )}
          </button>
        </div>

        {/* Balance Display */}
        <div className="mt-3">
          <div className="text-[34px] sm:text-[38px] font-extrabold tracking-tight text-white leading-none tabular-nums flex items-baseline">
            <span className="font-sans mr-0.5">₦</span>
            {isBalanceHidden ? '••••••' : formattedBalance}
          </div>
          <p className="text-xs font-normal text-emerald-200/80 mt-1.5 tracking-wide">
            Wallet Balance
          </p>
        </div>

        {/* Inset White Pill Action Bar */}
        <div className="mt-5 bg-white rounded-full p-1.5 sm:p-2 shadow-lg shadow-black/15 flex items-center justify-between text-slate-800">
          {/* Fund Wallet Button */}
          <button
            type="button"
            onClick={onFundWallet}
            className="flex-1 flex items-center justify-center gap-2 py-1.5 px-3 rounded-full hover:bg-slate-100 active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
          >
            <div className="w-7 h-7 rounded-full bg-[#074428] text-white flex items-center justify-center shrink-0 shadow-sm">
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </div>
            <span className="text-xs sm:text-[13px] font-bold text-slate-900 tracking-tight whitespace-nowrap">
              Fund Wallet
            </span>
          </button>

          {/* Divider */}
          <div className="h-6 w-[1px] bg-slate-200 shrink-0" />

          {/* Transaction History Button */}
          <button
            type="button"
            onClick={onTransactionHistory}
            className="flex-1 flex items-center justify-center gap-2 py-1.5 px-3 rounded-full hover:bg-slate-100 active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <div className="w-7 h-7 rounded-full bg-[#E5A83B] text-white flex items-center justify-center shrink-0 shadow-sm">
              <ArrowLeftRight className="w-4 h-4 stroke-[2.5]" />
            </div>
            <span className="text-xs sm:text-[13px] font-bold text-slate-900 tracking-tight whitespace-nowrap">
              Transaction History
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
