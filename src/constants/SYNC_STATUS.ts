export const SYNC_STATUS = {
  LOADING: 'loading',
  ERROR: 'error',
  SUCCESS: 'success',
} as const;

export type SyncStatus = (typeof SYNC_STATUS)[keyof typeof SYNC_STATUS];
