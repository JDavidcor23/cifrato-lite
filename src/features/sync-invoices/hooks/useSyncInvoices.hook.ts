import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { SYNC_STATUS, SyncStatus } from '@/constants';
import { Invoice } from '../types/syncInvoices.types';
import { dianSyncService } from '../services/dianSync.service';

export const useSyncInvoices = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const [status, setStatus] = useState<SyncStatus>(SYNC_STATUS.LOADING);
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  const syncWithDian = useCallback(async (retryToken?: string) => {
    const activeToken = retryToken || token;
    if (!activeToken) {
      setStatus(SYNC_STATUS.ERROR);
      return;
    }

    setStatus(SYNC_STATUS.LOADING);
    try {
      const data = await dianSyncService.fetchInvoices(activeToken);
      setInvoices(data);
      setStatus(SYNC_STATUS.SUCCESS);
    } catch (err) {
      console.error(err);
      setStatus(SYNC_STATUS.ERROR);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      (async () => {
        await syncWithDian();
      })();
    }
  }, [token, syncWithDian]);

  return {
    status,
    invoices,
    retry: () => syncWithDian()
  };
};
