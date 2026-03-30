import { InvoiceStatus } from '@/constants/INVOICE_STATUS';

export interface Invoice {
  id: string;
  provider: string;
  amount: number;
  date: string;
  status: InvoiceStatus;
  suggestedCategory: string;
}
