import React, { useState } from 'react';
import {
  X,
  Copy,
  Check,
  Smartphone,
  Globe,
  Wallet,
  MessageSquare,
  Gift,
  ArrowUpRight,
  ShieldCheck,
  CreditCard,
  Building,
  Send,
  Sparkles,
} from 'lucide-react';
import { QuickActionType } from '../types/index.ts';

interface FeatureModalProps {
  actionType: QuickActionType | null;
  onClose: () => void;
  onSuccessDemo?: (msg: string) => void;
}

export const FeatureModal: React.FC<FeatureModalProps> = ({
  actionType,
  onClose,
  onSuccessDemo,
}) => {
  const [copied, setCopied] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState<'MTN' | 'Airtel' | 'Glo' | '9mobile'>('MTN');
  const [selectedPlan, setSelectedPlan] = useState('10GB');
  const [phoneNumber, setPhoneNumber] = useState('08012345678');
  const [airtimeAmount, setAirtimeAmount] = useState('1000');
  const [chatMessage, setChatMessage] = useState('');
  const [chatLog, setChatLog] = useState<{ sender: 'bot' | 'user'; text: string; time: string }[]>([
    {
      sender: 'bot',
      text: 'Hello Pellino! Welcome to max9ja Live Support. How can we help your VTU experience today?',
      time: '12:00 PM',
    },
  ]);

  if (!actionType) return null;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    const newMsg = {
      sender: 'user' as const,
      text: chatMessage,
      time: 'Just now',
    };
    setChatLog((prev) => [
      ...prev,
      newMsg,
      {
        sender: 'bot',
        text: 'Thank you for reaching out! Our team is standing by. When you wire up the backend or webhook, real agent replies will appear here.',
        time: 'Just now',
      },
    ]);
    setChatMessage('');
  };

  const renderContent = () => {
    switch (actionType) {
      case 'buy-data':
        return (
          <div className="space-y-4">
            {/* Network Selector */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-2">
                1. Select Telecom Provider
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { id: 'MTN', bg: 'bg-[#FFCC00]', text: 'text-slate-950', label: 'MTN' },
                  { id: 'Airtel', bg: 'bg-[#ED1C24]', text: 'text-white', label: 'Airtel' },
                  { id: 'Glo', bg: 'bg-[#299E3D]', text: 'text-white', label: 'Glo' },
                  { id: '9mobile', bg: 'bg-[#00573D]', text: 'text-white', label: '9mobile' },
                ].map((net) => (
                  <button
                    key={net.id}
                    type="button"
                    onClick={() => setSelectedNetwork(net.id as any)}
                    className={`py-2 px-1 rounded-xl text-xs font-black transition-all flex flex-col items-center justify-center border-2 ${
                      selectedNetwork === net.id
                        ? 'border-emerald-600 shadow-md scale-102 ring-2 ring-emerald-500/20'
                        : 'border-slate-200 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <span className={`w-7 h-7 rounded-full ${net.bg} ${net.text} flex items-center justify-center font-bold text-[10px] mb-1 shadow-xs`}>
                      {net.label[0]}
                    </span>
                    <span className="text-[11px] font-bold text-slate-800">{net.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Plan Picker */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-2">
                2. Choose Data Bundle
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { size: '1GB', days: '30 Days SME', price: '₦280' },
                  { size: '2GB', days: '30 Days SME', price: '₦560' },
                  { size: '5GB', days: '30 Days SME', price: '₦1,400' },
                  { size: '10GB', days: '30 Days SME', price: '₦2,750' },
                ].map((plan) => (
                  <button
                    key={plan.size}
                    type="button"
                    onClick={() => setSelectedPlan(plan.size)}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      selectedPlan === plan.size
                        ? 'border-emerald-600 bg-emerald-50/80 text-emerald-950 font-bold ring-1 ring-emerald-500'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-extrabold text-[13px]">{plan.size}</span>
                      <span className="text-emerald-700 font-bold">{plan.price}</span>
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{plan.days}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Recipient Phone Number */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">
                3. Recipient Phone Number
              </label>
              <div className="relative">
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="080 1234 5678"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                />
                <button
                  type="button"
                  onClick={() => setPhoneNumber('08032918472')}
                  className="absolute right-2 top-2 px-2 py-1 text-[10px] font-bold bg-emerald-100 text-emerald-800 rounded-md hover:bg-emerald-200"
                >
                  My Number
                </button>
              </div>
            </div>

            {/* Submit CTA */}
            <button
              type="button"
              onClick={() => {
                if (onSuccessDemo) onSuccessDemo(`Data request queued for ${phoneNumber} (${selectedNetwork} ${selectedPlan})!`);
                onClose();
              }}
              className="w-full py-3 bg-[#063B21] hover:bg-[#084D2B] text-white rounded-xl font-bold text-sm shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Confirm & Buy Data</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        );

      case 'buy-airtime':
        return (
          <div className="space-y-4">
            {/* Network Selector */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-2">
                1. Select Network
              </label>
              <div className="grid grid-cols-4 gap-2">
                {['MTN', 'Airtel', 'Glo', '9mobile'].map((net) => (
                  <button
                    key={net}
                    type="button"
                    onClick={() => setSelectedNetwork(net as any)}
                    className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                      selectedNetwork === net
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-extrabold shadow-xs'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {net}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Amounts */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-2">
                2. Select Amount
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['200', '500', '1000', '2000', '3000', '5000'].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setAirtimeAmount(amt)}
                    className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all ${
                      airtimeAmount === amt
                        ? 'border-emerald-600 bg-emerald-600 text-white shadow-xs'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    ₦{amt}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Input */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">
                Recipient Phone Number
              </label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="080 1234 5678"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
              />
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-center justify-between text-xs">
              <span className="text-emerald-800 font-medium">Cashback / Discount:</span>
              <span className="font-extrabold text-emerald-700">2% Instant Cashback</span>
            </div>

            <button
              type="button"
              onClick={() => {
                if (onSuccessDemo) onSuccessDemo(`Airtime purchase ready for ₦${airtimeAmount} on ${phoneNumber}!`);
                onClose();
              }}
              className="w-full py-3 bg-[#063B21] hover:bg-[#084D2B] text-white rounded-xl font-bold text-sm shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Recharge ₦{airtimeAmount} Airtime</span>
            </button>
          </div>
        );

      case 'fund-wallet':
        return (
          <div className="space-y-4">
            <div className="bg-emerald-950 text-white rounded-2xl p-4 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs text-emerald-200 font-medium">Dedicated Virtual Account</span>
                <span className="text-[10px] bg-emerald-500/30 text-emerald-300 font-bold px-2 py-0.5 rounded-full">
                  Instant Credit
                </span>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <div className="text-xs text-emerald-300">Bank Name</div>
                  <div className="text-base font-extrabold text-white">Moniepoint MFB / Wema Bank</div>
                </div>
                <Building className="w-6 h-6 text-emerald-400" />
              </div>

              <div className="mt-3 bg-white/10 backdrop-blur-md rounded-xl p-3 flex items-center justify-between border border-white/10">
                <div>
                  <div className="text-[10px] text-emerald-200 uppercase font-bold tracking-wider">Account Number</div>
                  <div className="text-xl font-black tracking-widest text-amber-300 font-mono">
                    8123 940 281
                  </div>
                  <div className="text-[11px] text-white/80 mt-0.5 font-medium">
                    Account Name: MAX9JA - PELLINO
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard('8123940281')}
                  className="px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm transition-all"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <p className="text-[11px] text-emerald-200/80 mt-3">
                Transfer any amount to this account from your bank app. Your max9ja wallet will be credited automatically in seconds.
              </p>
            </div>

            <div className="space-y-2">
              <button
                type="button"
                onClick={() => {
                  if (onSuccessDemo) onSuccessDemo('Card gateway (Paystack/Flutterwave) simulation ready!');
                  onClose();
                }}
                className="w-full p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-left flex items-center justify-between transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Pay with Debit Card</div>
                    <div className="text-[11px] text-slate-500">Mastercard, Visa, Verve</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                type="button"
                onClick={() => {
                  if (onSuccessDemo) onSuccessDemo('Manual bank transfer verification requested!');
                  onClose();
                }}
                className="w-full p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-left flex items-center justify-between transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Manual Transfer / USSD</div>
                    <div className="text-[11px] text-slate-500">Upload proof of payment</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>
        );

      case 'message-service':
        return (
          <div className="space-y-3">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-600 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
                <span className="font-bold text-slate-800">Support Agent Online</span>
              </div>
              <span className="text-[11px] text-slate-500">Avg reply &lt; 2 min</span>
            </div>

            {/* Chat Bubble Thread */}
            <div className="h-48 overflow-y-auto space-y-2 p-2 bg-slate-100 rounded-xl border border-slate-200/80 text-xs">
              {chatLog.map((chat, idx) => (
                <div
                  key={idx}
                  className={`flex ${chat.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-2.5 rounded-2xl ${
                      chat.sender === 'user'
                        ? 'bg-[#063B21] text-white rounded-br-none'
                        : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-xs'
                    }`}
                  >
                    <p className="leading-snug">{chat.text}</p>
                    <span
                      className={`text-[9px] block mt-1 ${
                        chat.sender === 'user' ? 'text-emerald-200' : 'text-slate-400'
                      }`}
                    >
                      {chat.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Send Input */}
            <form onSubmit={handleSendChat} className="flex gap-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Type your message or enquiry..."
                className="flex-1 px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
              />
              <button
                type="submit"
                className="px-3.5 py-2 bg-[#063B21] hover:bg-[#084D2B] text-white rounded-xl text-xs font-bold flex items-center gap-1 active:scale-95 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        );

      case 'promo':
      case 'check-promo':
        return (
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl p-3 text-white">
              <div className="text-xs uppercase font-extrabold tracking-wider opacity-90">Hot Promo Season</div>
              <div className="text-lg font-black leading-tight mt-0.5">Save Up to 25% On Bundles</div>
              <p className="text-[11px] text-amber-100 mt-1">
                Use your special promotional vouchers on data and airtime top-ups.
              </p>
            </div>

            <div className="space-y-2">
              {[
                {
                  code: 'MAX9JA-FIRST',
                  title: '₦500 Welcome Bonus',
                  desc: 'Valid on first wallet funding of ₦2,000+',
                  discount: '₦500 Free',
                },
                {
                  code: 'SME-BLAST',
                  title: 'MTN 10GB at ₦2,400',
                  desc: 'Special weekend rate discount',
                  discount: 'Save ₦350',
                },
                {
                  code: 'NIGHT-DATA',
                  title: 'Glo Midnight 1GB at ₦95',
                  desc: 'Night owl browsing bundle',
                  discount: 'Super Deal',
                },
              ].map((promo, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-amber-200 rounded-xl p-3 flex items-center justify-between shadow-xs"
                >
                  <div>
                    <div className="text-xs font-extrabold text-slate-900">{promo.title}</div>
                    <div className="text-[11px] text-slate-500">{promo.desc}</div>
                    <div className="font-mono text-[10px] text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 inline-block mt-1">
                      {promo.code}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      copyToClipboard(promo.code);
                      if (onSuccessDemo) onSuccessDemo(`Applied promo code ${promo.code}!`);
                    }}
                    className="px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-lg transition-transform active:scale-95"
                  >
                    Apply
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 'view-all-actions':
        return (
          <div className="space-y-4">
            <p className="text-xs text-slate-600">
              max9ja offers complete digital VTU and utility bill payments:
            </p>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { title: 'Buy Airtime', icon: Smartphone, color: 'text-emerald-700 bg-emerald-100' },
                { title: 'Buy Data', icon: Globe, color: 'text-blue-700 bg-blue-100' },
                { title: 'Electricity Bills', icon: Wallet, color: 'text-amber-700 bg-amber-100' },
                { title: 'Cable TV (DSTV/GOTV)', icon: ShieldCheck, color: 'text-purple-700 bg-purple-100' },
                { title: 'Exam PINs (WAEC)', icon: Sparkles, color: 'text-rose-700 bg-rose-100' },
                { title: 'Betting Funding', icon: ArrowUpRight, color: 'text-cyan-700 bg-cyan-100' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      if (onSuccessDemo) onSuccessDemo(`Selected ${item.title}`);
                      onClose();
                    }}
                    className="bg-white hover:bg-slate-50 border border-slate-200 rounded-xl p-3 flex flex-col items-center text-center transition-all cursor-pointer"
                  >
                    <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center mb-1.5`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-800 leading-tight">
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        );

      default:
        return (
          <div className="py-4 text-center">
            <p className="text-sm font-semibold text-slate-700">
              Interactive preview ready for this action.
            </p>
          </div>
        );
    }
  };

  const getTitle = () => {
    switch (actionType) {
      case 'buy-data':
        return 'Buy Internet Data';
      case 'buy-airtime':
        return 'Buy VTU Airtime';
      case 'fund-wallet':
        return 'Fund Your max9ja Wallet';
      case 'message-service':
        return 'Customer Support & Message Service';
      case 'promo':
      case 'check-promo':
        return 'Hot Deals & Promotions';
      case 'transaction-history':
      case 'view-all-transactions':
        return 'Transaction History';
      case 'view-all-actions':
        return 'All Services & Products';
      default:
        return 'Action Details';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4 animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Drag handle for mobile */}
        <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto my-2.5 sm:hidden" />

        {/* Modal Header */}
        <div className="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-base font-extrabold text-slate-900 leading-snug">
              {getTitle()}
            </h3>
            <span className="text-[11px] text-emerald-700 font-semibold">
              max9ja Dashboard Ready
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 overflow-y-auto space-y-4">
          {/* User Prompt Guidance Notice */}
          <div className="bg-emerald-50/90 border border-emerald-200/80 rounded-2xl p-3 flex items-start gap-2.5">
            <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <div className="text-xs text-emerald-950">
              <span className="font-bold block">Ready for your custom logic!</span>
              <span className="text-[11px] text-emerald-800 leading-relaxed block mt-0.5">
                Tell me what API or behavior you want for this button whenever you're ready.
              </span>
            </div>
          </div>

          {/* Interactive Feature Body */}
          {renderContent()}
        </div>
      </div>
    </div>
  );
};
