import { SYNC_DELAY_MS, INVOICE_STATUS } from '@/constants';
import { Invoice } from '../types/syncInvoices.types';
import { mockInvoices } from '@/lib/mockData';

export const dianSyncService = {
  fetchInvoices: async (token: string): Promise<Invoice[]> => {
    if (!token) throw new Error("No token provided");

    // Simulating network delay for realism (Don José needs to see it's working)
    await new Promise((resolve) => setTimeout(resolve, SYNC_DELAY_MS));
    
    // Simulating random error (10% chance)
    if (Math.random() < 0.1) {
      throw new Error("Simulated network failure");
    }

    return (mockInvoices as Invoice[]).filter(i => i.status === INVOICE_STATUS.PENDING);
  }
};
