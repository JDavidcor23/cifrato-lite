"use client";

import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui";
import { SYNC_STATUS, ROUTES } from "@/constants";
import { useSyncInvoices } from "@/features/sync-invoices/hooks/useSyncInvoices.hook";
import {
  SyncLoading,
  SyncError,
  SyncSuccessHeader,
  InvoiceList
} from "@/features/sync-invoices/components";
import Link from "next/link";

function SyncHandlerContent() {
  const { status, invoices, retry } = useSyncInvoices();

  if (status === SYNC_STATUS.LOADING) {
    return <SyncLoading />;
  }

  if (status === SYNC_STATUS.ERROR) {
    return <SyncError onRetry={retry} />;
  }

  return (
    <div className="flex-1 flex flex-col pt-12 pb-24 px-6">
      <SyncSuccessHeader count={invoices.length} />
      <InvoiceList invoices={invoices} />
      
      <div className="mt-12">
        <Link href={ROUTES.HOME} className="block">
            <Button variant="secondary" size="giant" className="w-full py-10 text-[24px]">
                Hacerlo más tarde
            </Button>
        </Link>
      </div>
    </div>
  );
}

export default function SyncPage() {
  return (
    <Suspense fallback={
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-8 mt-16">
            <Loader2 className="w-24 h-24 text-blue-600 animate-spin" />
            <h1 className="text-3xl font-extrabold text-gray-900">Cargando...</h1>
        </div>
    }>
      <SyncHandlerContent />
    </Suspense>
  )
}
