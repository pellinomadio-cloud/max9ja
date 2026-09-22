import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { WalletCard } from './components/WalletCard.tsx';
import { QuickActions } from './components/QuickActions.tsx';
import { PromoBanner } from './components/PromoBanner.tsx';
import { RecentTransactions } from './components/RecentTransactions.tsx';
import { BottomNav } from './components/BottomNav.tsx';
import { FeatureModal } from './components/FeatureModal.tsx';
import { NotificationsModal } from './components/NotificationsModal.tsx';
import { ReceiptModal } from './components/ReceiptModal.tsx';
import { TransferView } from './components/TransferView.tsx';
import { ServicesView } from './components/ServicesView.tsx';
import { ProfileView } from './components/ProfileView.tsx';
import { ActiveTab, QuickActionType, Transaction } from './types/index.ts';
import { Smartphone, Monitor, Info, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [isBalanceHidden, setIsBalanceHidden] = useState<boolean>(false);
  const [activeModalAction, setActiveModalAction] = useState<QuickActionType | null>(null);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState<boolean>(false);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [viewMode, setViewMode] = useState<'mobile' | 'wide'>('mobile');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleActionClick = (action: QuickActionType) => {
    if (action === 'notifications') {
      setIsNotificationsOpen(true);
    } else {
      setActiveModalAction(action);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-800 flex flex-col items-center justify-start selection:bg-emerald-600 selection:text-white relative">
      {/* Top Floating Helper Bar (View Mode Switcher & Assistant Note) */}
      <div className="w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-2 px-4 sticky top-0 z-50 flex items-center justify-between text-xs text-slate-300">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-extrabold text-white tracking-wide">max9ja</span>
          <span className="hidden sm:inline text-slate-400">· Dashboard Preview</span>
        </div>

        {/* Device Viewport Toggle (Desktop only) */}
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700">
            <button
              type="button"
              onClick={() => setViewMode('mobile')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-bold flex items-center gap-1.5 transition-all ${
                viewMode === 'mobile'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile View</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('wide')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-bold flex items-center gap-1.5 transition-all ${
                viewMode === 'wide'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Expanded</span>
            </button>
          </div>

          <span className="text-[11px] text-amber-300 bg-amber-950/60 border border-amber-600/40 px-2 py-0.5 rounded-md font-medium hidden lg:inline">
            💡 Ready for your button instructions
          </span>
        </div>
      </div>

      {/* Main Container */}
      <main
        className={`w-full transition-all duration-300 ${
          viewMode === 'mobile'
            ? 'max-w-[430px] my-0 sm:my-4 sm:rounded-[36px] sm:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] sm:border-[6px] sm:border-slate-800'
            : 'max-w-2xl my-0 sm:my-6 sm:rounded-3xl sm:shadow-2xl sm:border sm:border-slate-700'
        } bg-[#063B21] flex flex-col overflow-hidden min-h-screen sm:min-h-[850px] relative`}
      >
        {/* Mobile Status Bar Simulation */}
        <div className="px-6 pt-2 pb-1 flex items-center justify-between text-white/70 text-[11px] font-semibold tracking-tight select-none">
          <span>9:41</span>
          <div className="flex items-center gap-1.5 text-[10px]">
            <span>5G</span>
            <span>100%</span>
          </div>
        </div>

        {/* App Header (Welcome Back, Pellino, Logo, Notification Bell) */}
        <Header
          userName="Pellino"
          onNotificationsClick={() => setIsNotificationsOpen(true)}
          unreadCount={2}
        />

        {/* Tab-driven Content Area */}
        {activeTab === 'home' && (
          <div className="flex-1 flex flex-col">
            {/* Emerald Wallet Card with Golden Wave Accents */}
            <WalletCard
              balance={0.0}
              isBalanceHidden={isBalanceHidden}
              onToggleHideBalance={() => setIsBalanceHidden(!isBalanceHidden)}
              onFundWallet={() => handleActionClick('fund-wallet')}
              onTransactionHistory={() => handleActionClick('transaction-history')}
            />

            {/* White Body Wrapper with Smooth Top Curves matching screenshot */}
            <div className="mt-4 flex-1 bg-white rounded-t-[32px] pt-2 pb-6 text-slate-800 shadow-2xl">
              {/* Quick Actions (Message Service, Buy Data, Buy Airtime, Promo) */}
              <QuickActions onActionClick={handleActionClick} />

              {/* Special Offer Promotional Banner */}
              <PromoBanner onCheckPromo={() => handleActionClick('check-promo')} />

              {/* Recent Transactions Section */}
              <RecentTransactions
                onViewAll={() => handleActionClick('view-all-transactions')}
                onSelectTransaction={(tx) => setSelectedTransaction(tx)}
              />
            </div>
          </div>
        )}

        {/* Transfer Tab */}
        {activeTab === 'transfer' && (
          <div className="flex-1 bg-slate-100 rounded-t-[32px] mt-2 pt-2 text-slate-800">
            <TransferView
              onBack={() => setActiveTab('home')}
              onShowNotice={(msg) => showToast(msg)}
            />
          </div>
        )}

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div className="flex-1 bg-slate-100 rounded-t-[32px] mt-2 pt-2 text-slate-800">
            <ServicesView
              onSelectAction={(action) => handleActionClick(action)}
            />
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="flex-1 bg-slate-100 rounded-t-[32px] mt-2 pt-2 text-slate-800">
            <ProfileView onShowNotice={(msg) => showToast(msg)} />
          </div>
        )}

        {/* Fixed Bottom Navigation (Home, Transfer, Services, Profile) */}
        <BottomNav
          activeTab={activeTab}
          onChangeTab={(tab) => setActiveTab(tab)}
        />
      </main>

      {/* Interactive Modal for Quick Actions / Buttons */}
      <FeatureModal
        actionType={activeModalAction}
        onClose={() => setActiveModalAction(null)}
        onSuccessDemo={(msg) => showToast(msg)}
      />

      {/* Notifications Drawer */}
      <NotificationsModal
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
      />

      {/* Transaction Receipt Modal */}
      <ReceiptModal
        transaction={selectedTransaction}
        onClose={() => setSelectedTransaction(null)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 z-50 flex items-center gap-2 bg-slate-900 text-white text-xs font-semibold py-2.5 px-4 rounded-full shadow-2xl border border-slate-700 animate-in fade-in slide-in-from-bottom duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
