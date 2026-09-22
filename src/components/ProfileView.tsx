import React from 'react';
import {
  User,
  ShieldCheck,
  Lock,
  Share2,
  HelpCircle,
  LogOut,
  ChevronRight,
  BadgeCheck,
  Smartphone,
  Mail,
  Copy,
} from 'lucide-react';

interface ProfileViewProps {
  onShowNotice: (msg: string) => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ onShowNotice }) => {
  return (
    <div className="px-4 py-4 space-y-4">
      {/* Profile Header Card */}
      <div className="bg-gradient-to-br from-[#063B21] via-[#084D2B] to-[#042A17] rounded-3xl p-5 text-white shadow-lg relative overflow-hidden border border-emerald-700/50">
        <div className="flex items-center gap-3.5 relative z-10">
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-200 p-0.5 shadow-md">
            <div className="w-full h-full rounded-full bg-emerald-950 flex items-center justify-center font-black text-xl text-amber-300">
              P
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h2 className="text-lg font-extrabold text-white">Pellino</h2>
              <BadgeCheck className="w-4 h-4 text-amber-400 fill-amber-400/20" />
            </div>
            <div className="text-xs text-emerald-200 flex items-center gap-1 mt-0.5">
              <span>pellinomadio@gmail.com</span>
            </div>
            <div className="inline-flex items-center gap-1 bg-emerald-500/25 border border-emerald-400/30 text-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded-full mt-2">
              <ShieldCheck className="w-3 h-3 text-emerald-300" />
              <span>Tier 2 Verified (BVN/NIN Linked)</span>
            </div>
          </div>
        </div>

        {/* Referral Box */}
        <div className="mt-4 pt-3 border-t border-emerald-600/40 flex items-center justify-between text-xs">
          <div>
            <span className="text-[10px] uppercase font-bold text-emerald-300 tracking-wider">Referral Code</span>
            <div className="font-mono font-bold text-white tracking-wider">MAX-PELLINO</div>
          </div>
          <button
            type="button"
            onClick={() => onShowNotice('Referral code copied!')}
            className="px-3 py-1 bg-amber-400 text-slate-950 font-bold text-[11px] rounded-lg shadow-xs hover:bg-amber-300 transition-colors flex items-center gap-1"
          >
            <Copy className="w-3 h-3" />
            Copy
          </button>
        </div>
      </div>

      {/* Account Settings Menu */}
      <div className="space-y-2">
        <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 px-1">
          Security & Preferences
        </h3>
        <div className="bg-white border border-slate-200/80 rounded-2xl divide-y divide-slate-100 overflow-hidden shadow-xs">
          {[
            {
              title: 'Change Transaction PIN',
              desc: 'Secure 4-digit PIN for purchases',
              icon: Lock,
              action: () => onShowNotice('PIN settings ready for backend integration'),
            },
            {
              title: 'Biometric Login',
              desc: 'Use Face ID / Fingerprint',
              icon: ShieldCheck,
              action: () => onShowNotice('Biometric authentication preference'),
            },
            {
              title: 'Help & Customer Support',
              desc: 'Contact max9ja 24/7 care center',
              icon: HelpCircle,
              action: () => onShowNotice('Live chat & WhatsApp support active'),
            },
            {
              title: 'Share & Earn',
              desc: 'Invite friends and earn ₦200 per sign up',
              icon: Share2,
              action: () => onShowNotice('Referral link generated!'),
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={idx}
                type="button"
                onClick={item.action}
                className="w-full p-3.5 flex items-center justify-between hover:bg-slate-50 transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 leading-tight">
                      {item.title}
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

      {/* Logout button */}
      <div className="pt-2">
        <button
          type="button"
          onClick={() => onShowNotice('Signed out of demo session')}
          className="w-full py-3 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl font-bold text-xs flex items-center justify-center gap-2 border border-red-200 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};
