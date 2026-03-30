export const INVOICE_STATUS = {
  PENDING: 'pending',
  CLASSIFIED: 'classified',
  SYNCED: 'synced',
} as const;

export type InvoiceStatus = (typeof INVOICE_STATUS)[keyof typeof INVOICE_STATUS];
