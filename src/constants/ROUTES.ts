export const ROUTES = {
  HOME: '/',
  SYNC: (token: string) => `/sync?token=${token}`,
  INVOICE: (id: string) => `/invoice/${id}`,
  EXPENSE_NEW: '/expense/new',
  DIAN_SETUP: '/dian-setup',
  SIIGO_SETUP: '/siigo-setup',
} as const;
