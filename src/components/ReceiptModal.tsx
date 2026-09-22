import React from 'react';
import { X, CheckCircle2, Share2, Copy } from 'lucide-react';
import { Transaction } from '../types/index.ts';

interface ReceiptModalProps {
  transaction: Transaction | null;
  onClose: () => void;
}

export const ReceiptModal: React.FC<ReceiptModalProps> = ({ transaction, onClose }) => {
  if (!transaction) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150 border border-slate-100">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <span className="text-xs font-bold text-slate-700">Transaction Receipt</span>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-600 rounded-full"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 text-center">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-inner">
            <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
          </div>

          <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
            {transaction.status}
          </div>

          <div className="text-3xl font-extrabold text-slate-900 mt-1 tabular-nums">
            {transaction.isCredit ? '+' : '-'}₦
            {transaction.amount.toLocaleString('en-NG', { minimumFractionDigits: 2 })}
          </div>

          <div className="text-xs text-slate-500 mt-1">{transaction.title}</div>

          <div className="mt-6 pt-4 border-t border-dashed border-slate-200 text-left space-y-2.5 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-500">Date & Time</span>
              <span className="font-semibold text-slate-800">{transaction.date}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Reference ID</span>
              <span className="font-mono font-semibold text-slate-800 flex items-center gap-1">
                {transaction.reference}
                <button
                  type="button"
                  onClick={() => navigator.clipboard.writeText(transaction.reference)}
                  className="text-slate-400 hover:text-emerald-700"
                >
                  <Copy className="w-3 h-3" />
                </button>
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Channel</span>
              <span className="font-semibold text-slate-800">max9ja VTU Engine</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Beneficiary Details</span>
              <span className="font-semibold text-slate-800">{transaction.description}</span>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl font-bold text-xs"
            >
              Done
            </button>
            <button
              type="button"
              onClick={() => {
                alert('Receipt copied / ready to share!');
              }}
              className="flex-1 py-2.5 bg-[#063B21] hover:bg-[#084D2B] text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5"
            >
              <Share2 className="w-3.5 h-3.5" />
              Share Receipt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
