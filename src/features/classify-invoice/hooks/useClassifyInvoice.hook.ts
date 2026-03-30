import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { INVOICE_STEPS, ROUTES } from '@/constants';
import { Invoice } from '../../sync-invoices/types/syncInvoices.types';
import { mockInvoices } from '@/lib/mockData';
import { siigoUploadService } from '../services/siigoUpload.service';
import { ClassificationStep } from '../types/classifyInvoice.types';

export const useClassifyInvoice = (invoiceId: string) => {
  const router = useRouter();
  const invoiceInfo = (mockInvoices as Invoice[]).find((i) => i.id === invoiceId);
  
  const [step, setStep] = useState<ClassificationStep>(INVOICE_STEPS.CLASSIFY);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(invoiceInfo?.suggestedCategory || null);

  const handleUpload = async () => {
    if (!invoiceInfo) return;

    setStep(INVOICE_STEPS.UPLOADING);
    try {
      await siigoUploadService.uploadInvoice(invoiceInfo);
      
      // In a real app we'd use a toast.
      alert(`¡Éxito! Su factura de ${invoiceInfo.provider} se subió correctamente a Siigo.`);
      router.push(ROUTES.HOME);
    } catch {
      alert("Hubo un pequeño problema al subir la factura, intentemos de nuevo.");
      setStep(INVOICE_STEPS.SYNC);
    }
  }

  const navigateToChooseCategory = () => setStep(INVOICE_STEPS.CHOOSE_CATEGORY);
  const navigateToSync = () => setStep(INVOICE_STEPS.SYNC);
  const navigateToClassify = () => setStep(INVOICE_STEPS.CLASSIFY);

  return {
    invoiceInfo,
    step,
    selectedCategory,
    setSelectedCategory,
    handleUpload,
    navigateToChooseCategory,
    navigateToSync,
    navigateToClassify
  };
};
