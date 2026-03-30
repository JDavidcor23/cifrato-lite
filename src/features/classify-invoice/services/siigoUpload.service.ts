import { UPLOAD_DELAY_MS } from '@/constants';
import { Invoice } from '../../sync-invoices/types/syncInvoices.types';

export const siigoUploadService = {
  uploadInvoice: async (invoice: Invoice): Promise<void> => {
    // Simulating API Call to Siigo
    await new Promise(resolve => setTimeout(resolve, UPLOAD_DELAY_MS));
    
    // In a real scenario, this would POST to Siigo API
    console.log(`Invoice ${invoice.id} uploaded to Siigo successfully.`);
  }
};
