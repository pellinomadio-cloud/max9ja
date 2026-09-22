import React from 'react';
import { X, CheckCheck, Bell, ShieldAlert, Sparkles, Tag } from 'lucide-react';

interface NotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationsModal: React.FC<NotificationsModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const notifications = [
    {
      id: 1,
      title: 'Welcome to max9ja!',
      desc: 'Your max9ja digital wallet is active. Fund your wallet or buy cheap data and airtime instantly.',
      time: '10 min ago',
      icon: Sparkles,
      color: 'bg-emerald-100 text-emerald-800',
      unread: true,
    },
    {
      id: 2,
      title: 'Weekend Data Slash!',
      desc: 'Get MTN 10GB for only ₦2,400 this weekend. Check the Promo tab to claim.',
      time: '2 hours ago',
      icon: Tag,
      color: 'bg-amber-100 text-amber-800',
      unread: true,
    },
    {
      id: 3,
      title: 'Account Security Tip',
      desc: 'Never share your max9ja transaction PIN or OTP with anyone. max9ja staff will never ask for your PIN.',
      time: '1 day ago',
      icon: ShieldAlert,
      color: 'bg-blue-100 text-blue-800',
      unread: false,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4">
      <div className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[85vh] flex flex-col overflow-hidden">
        <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto my-2.5 sm:hidden" />

        <div className="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Bell className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-slate-900 leading-tight">
                Notifications
              </h3>
              <span className="text-[11px] text-slate-500">2 unread alerts</span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 overflow-y-auto space-y-2.5">
          {notifications.map((n) => {
            const Icon = n.icon;
            return (
              <div
                key={n.id}
                className={`p-3.5 rounded-2xl border transition-all ${
                  n.unread
                    ? 'bg-emerald-50/40 border-emerald-200/90'
                    : 'bg-white border-slate-200/80'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl ${n.color} flex items-center justify-center shrink-0 mt-0.5`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-slate-900">{n.title}</h4>
                      {n.unread && (
                        <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                      )}
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {n.desc}
                    </p>
                    <span className="text-[10px] text-slate-400 mt-1.5 block font-medium">
                      {n.time}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-3 border-t border-slate-100 bg-slate-50 text-center">
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-bold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1"
          >
            <CheckCheck className="w-4 h-4" />
            Mark all as read
          </button>
        </div>
      </div>
    </div>
  );
};
