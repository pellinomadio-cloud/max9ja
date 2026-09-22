import React, { useState } from 'react';
import { ArrowLeftRight, Building2, UserCheck, ShieldCheck, ArrowRight } from 'lucide-react';

interface TransferViewProps {
  onBack: () => void;
  onShowNotice: (msg: string) => void;
}

export const TransferView: React.FC<TransferViewProps> = ({ onBack, onShowNotice }) => {
  const [transferType, setTransferType] = useState<'bank' | 'wallet'>('bank');
  const [bankName, setBankName] = useState('Access Bank');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountName, setAccountName] = useState('');
  const [amount, setAmount] = useState('');

  const handleVerifyAccount = (val: string) => {
    setAccountNumber(val);
    if (val.length === 10) {
      setAccountName('ADEKUNLE SAMUEL OLUWASEUN');
    } else {
      setAccountName('');
    }
  };

  return (
    <div className="px-4 py-4 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-extrabold text-slate-900">Transfer Funds</h2>
        <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
          Instant Settlement
        </span>
      </div>

      {/* Segmented Transfer Mode */}
      <div className="grid grid-cols-2 p-1 bg-slate-200/70 rounded-xl text-xs font-bold">
        <button
          type="button"
          onClick={() => setTransferType('bank')}
          className={`py-2 rounded-lg transition-all ${
            transferType === 'bank'
              ? 'bg-white text-slate-900 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          To Bank Account
        </button>
        <button
          type="button"
          onClick={() => setTransferType('wallet')}
          className={`py-2 rounded-lg transition-all ${
            transferType === 'wallet'
              ? 'bg-white text-slate-900 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          To max9ja User
        </button>
      </div>

      {transferType === 'bank' ? (
        <div className="space-y-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">
              Select Bank
            </label>
            <select
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            >
              <option value="Access Bank">Access Bank</option>
              <option value="GTBank (Guaranty Trust)">GTBank (Guaranty Trust)</option>
              <option value="Zenith Bank">Zenith Bank</option>
              <option value="United Bank for Africa (UBA)">UBA</option>
              <option value="Moniepoint Microfinance Bank">Moniepoint MFB</option>
              <option value="Opay Digital Services">OPay</option>
              <option value="Kuda Bank">Kuda Bank</option>
              <option value="Palmpay">Palmpay</option>
              <option value="First Bank of Nigeria">First Bank</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">
              Account Number (10 digits)
            </label>
            <input
              type="text"
              maxLength={10}
              value={accountNumber}
              onChange={(e) => handleVerifyAccount(e.target.value)}
              placeholder="e.g. 0123456789"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-mono font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          {accountName && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-2.5 flex items-center gap-2 text-xs">
              <UserCheck className="w-4 h-4 text-emerald-700 shrink-0" />
              <div>
                <span className="text-[10px] text-emerald-600 block">Verified Account Name</span>
                <span className="font-extrabold text-emerald-950">{accountName}</span>
              </div>
            </div>
          )}

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">
              Amount (₦)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-extrabold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          <button
            type="button"
            onClick={() => onShowNotice(`Transfer preview: ₦${amount || '0'} to ${accountName || accountNumber || 'Bank'}`)}
            className="w-full py-3 bg-[#063B21] hover:bg-[#084D2B] text-white rounded-xl font-bold text-xs shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer mt-2"
          >
            <span>Continue Transfer</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div className="space-y-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">
              Recipient max9ja Phone / Username
            </label>
            <input
              type="text"
              placeholder="@username or 080..."
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">
              Amount (₦)
            </label>
            <input
              type="number"
              placeholder="0.00"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-extrabold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-600 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Internal max9ja transfers are 100% free with 0 fee.</span>
          </div>

          <button
            type="button"
            onClick={() => onShowNotice('max9ja peer-to-peer transfer ready!')}
            className="w-full py-3 bg-[#063B21] hover:bg-[#084D2B] text-white rounded-xl font-bold text-xs shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Transfer to User</span>
          </button>
        </div>
      )}
    </div>
  );
};
