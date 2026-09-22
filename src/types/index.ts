export interface Transaction {
  id: string;
  type: 'airtime' | 'data' | 'funding' | 'transfer';
  title: string;
  description: string;
  amount: number;
  isCredit: boolean;
  date: string;
  status: 'successful' | 'pending' | 'failed';
  network?: 'MTN' | 'Airtel' | 'Glo' | '9mobile';
  reference: string;
}

export type ActiveTab = 'home' | 'transfer' | 'services' | 'profile';

export type QuickActionType =
  | 'message-service'
  | 'buy-data'
  | 'buy-airtime'
  | 'promo'
  | 'fund-wallet'
  | 'transaction-history'
  | 'check-promo'
  | 'view-all-actions'
  | 'view-all-transactions'
  | 'notifications';

export interface ModalState {
  isOpen: boolean;
  type: QuickActionType | null;
  title: string;
  subtitle?: string;
}
