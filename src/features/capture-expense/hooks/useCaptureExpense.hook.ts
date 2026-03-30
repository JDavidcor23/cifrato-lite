import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { OCR_PROCESSING_DELAY_MS, ROUTES } from '@/constants';

export const useCaptureExpense = () => {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCaptureClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setIsProcessing(true);
      // Simulate reading the invoice via AI OCR
      await new Promise(resolve => setTimeout(resolve, OCR_PROCESSING_DELAY_MS));
      // Redirect to a specific invoice (mock behavior)
      router.push(ROUTES.INVOICE("INV-004"));
    }
  };

  const handleDownloadTemplate = () => {
    alert("Iniciando descarga de Plantilla de Gastos (PDF/Excel)...");
  };

  return {
    fileInputRef,
    isProcessing,
    handleCaptureClick,
    handleFileChange,
    handleDownloadTemplate
  };
};
