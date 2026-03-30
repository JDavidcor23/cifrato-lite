export const INVOICE_STEPS = {
  CLASSIFY: 'classify',
  CHOOSE_CATEGORY: 'choose-category',
  SYNC: 'sync',
  UPLOADING: 'uploading',
} as const;

export type InvoiceStep = (typeof INVOICE_STEPS)[keyof typeof INVOICE_STEPS];
