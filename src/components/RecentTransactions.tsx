import React, { useState } from 'react';
import { ChevronRight, ArrowDownLeft, ArrowUpRight, Smartphone, Globe, ReceiptText } from 'lucide-react';
import { Transaction } from '../types/index.ts';

interface RecentTransactionsProps {
  onViewAll: () => void;
  onSelectTransaction: (tx: Transaction) => void;
}

const SAMPLE_TRANSACTIONS: Transaction[] = [
  {
    id: 'TXN-90214829',
    type: 'data',
    title: 'MTN 10GB Monthly Data',
    description: '0803 291 8472 · Direct SME Data',
    amount: 2500,
    isCredit: false,
    date: 'Today, 11:42 AM',
    status: 'successful',
    network: 'MTN',
    reference: 'MX-DATA-8839210',
  },
  {
    id: 'TXN-90214828',
    type: 'funding',
    title: 'Wallet Top-Up (Moniepoint)',
    description: 'Automated Bank Transfer · Dedicated Account',
    amount: 5000,
    isCredit: true,
    date: 'Yesterday, 04:15 PM',
    status: 'successful',
    reference: 'MX-FUND-1928374',
  },
  {
    id: 'TXN-90214827',
    type: 'airtime',
    title: 'Airtel VTU Airtime',
    description: '0802 839 1044 · Instant Top-up',
    amount: 1000,
    isCredit: false,
    date: '20 Sep, 02:20 PM',
    status: 'successful',
    network: 'Airtel',
    reference: 'MX-AIR-7728192',
  },
];

export const RecentTransactions: React.FC<RecentTransactionsProps> = ({
  onViewAll,
  onSelectTransaction,
}) => {
  const [showDemo, setShowDemo] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'airtime' | 'data' | 'funding'>('all');

  const filteredTransactions = SAMPLE_TRANSACTIONS.filter((tx) => {
    if (activeFilter === 'all') return true;
    return tx.type === activeFilter;
  });

  return (
    <section className="px-4 pt-2 pb-6">
      {/* Header Row */}
      <div className="flex items-center justify-between mb-3 px-1">
        <h2 className="text-[17px] font-bold text-slate-900 tracking-tight">
          Recent Transactions
        </h2>
        <button
          type="button"
          onClick={onViewAll}
          className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-0.5 active:scale-95 transition-transform focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-600 rounded"
        >
          View All <ChevronRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>

      {/* Quick Demo Preview Switcher */}
      <div className="flex items-center justify-between bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-2 mb-3 text-xs">
        <span className="text-slate-600 font-medium">Preview with sample history:</span>
        <button
          type="button"
          onClick={() => setShowDemo(!showDemo)}
          className={`px-3 py-1 rounded-full font-bold text-[11px] transition-all cursor-pointer ${
            showDemo
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          {showDemo ? 'Showing Sample' : 'Empty (Default)'}
        </button>
      </div>

      {!showDemo ? (
        /* Empty State */
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 text-center shadow-xs flex flex-col items-center justify-center">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
            <ReceiptText className="w-7 h-7 stroke-[1.8]" />
          </div>
          <h3 className="text-sm font-bold text-slate-900">No Transactions Yet</h3>
          <p className="text-xs text-slate-500 max-w-[240px] mt-1 leading-relaxed">
            Your transactions will appear here as soon as you fund your wallet or make purchases.
          </p>
          <button
            type="button"
            onClick={() => setShowDemo(true)}
            className="mt-3 text-xs font-bold text-emerald-700 hover:text-emerald-800 underline underline-offset-2"
          >
            Click here to preview sample transaction logs
          </button>
        </div>
      ) : (
        /* Transactions List */
        <div className="space-y-2">
          {filteredTransactions.map((tx) => {
            const isCredit = tx.isCredit;
            return (
              <div
                key={tx.id}
                onClick={() => onSelectTransaction(tx)}
                className="bg-white hover:bg-slate-50 border border-slate-200/80 rounded-2xl p-3.5 flex items-center justify-between transition-colors cursor-pointer active:scale-[0.99] shadow-xs"
              >
                {/* Left: Icon & Description */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                      isCredit
                        ? 'bg-emerald-100 text-emerald-700'
                        : tx.type === 'data'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    {isCredit ? (
                      <ArrowDownLeft className="w-5 h-5 stroke-[2.5]" />
                    ) : tx.type === 'data' ? (
                      <Globe className="w-5 h-5 stroke-[2]" />
                    ) : (
                      <Smartphone className="w-5 h-5 stroke-[2]" />
                    )}
                  </div>

                  <div className="flex flex-col text-left">
                    <span className="text-[13px] font-bold text-slate-900 leading-tight">
                      {tx.title}
                    </span>
                    <span className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                      {tx.description}
                    </span>
                    <span className="text-[10px] text-slate-400 mt-0.5">{tx.date}</span>
                  </div>
                </div>

                {/* Right: Amount & Status */}
                <div className="flex flex-col items-end shrink-0 pl-2">
                  <span
                    className={`text-[13px] font-extrabold tabular-nums tracking-tight ${
                      isCredit ? 'text-emerald-600' : 'text-slate-900'
                    }`}
                  >
                    {isCredit ? '+' : '-'}₦
                    {tx.amount.toLocaleString('en-NG', {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                  <span className="text-[9.5px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded mt-1">
                    {tx.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
