"use client";

import { use } from "react";
import { Button } from "@/components/ui";
import { mockCategories } from "@/lib/mockData";
import { INVOICE_STEPS, ROUTES } from "@/constants";
import { useClassifyInvoice } from "@/features/classify-invoice/hooks/useClassifyInvoice.hook";
import {
  InvoiceDetailHeader,
  InvoiceSummaryCard,
  ClassifyStep,
  ChooseCategoryStep,
  SyncStep,
  UploadingStep
} from "@/features/classify-invoice/components";
import Link from "next/link";

export default function InvoicePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const {
    invoiceInfo,
    step,
    selectedCategory,
    setSelectedCategory,
    handleUpload,
    navigateToChooseCategory,
    navigateToSync,
    navigateToClassify
  } = useClassifyInvoice(resolvedParams.id);

  if (!invoiceInfo) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-8 mt-16">
        <h1 className="text-3xl font-extrabold text-gray-900">Factura no encontrada</h1>
        <Link href={ROUTES.HOME}>
           <Button size="giant">Volver al inicio</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col px-6 pb-24 h-screen">
      <InvoiceDetailHeader />
      <InvoiceSummaryCard invoice={invoiceInfo} />

      {step === INVOICE_STEPS.CLASSIFY && (
        <ClassifyStep 
          suggestedCategory={invoiceInfo.suggestedCategory}
          onConfirm={navigateToSync}
          onReject={navigateToChooseCategory}
        />
      )}

      {step === INVOICE_STEPS.CHOOSE_CATEGORY && (
         <ChooseCategoryStep 
            categories={mockCategories}
            onSelect={(cat) => {
              setSelectedCategory(cat);
              navigateToSync();
            }}
            onCancel={navigateToClassify}
         />
      )}

      {step === INVOICE_STEPS.SYNC && (
        <SyncStep 
          selectedCategory={selectedCategory}
          onUpload={handleUpload}
        />
      )}

      {step === INVOICE_STEPS.UPLOADING && <UploadingStep />}
    </div>
  );
}
