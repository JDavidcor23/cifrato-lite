"use client";

import { Camera, FileDown, ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui";
import { ROUTES } from "@/constants";
import { useCaptureExpense } from "@/features/capture-expense/hooks/useCaptureExpense.hook";
import Link from "next/link";

export default function NewExpensePage() {
  const {
    fileInputRef,
    isProcessing,
    handleCaptureClick,
    handleFileChange,
    handleDownloadTemplate
  } = useCaptureExpense();

  if (isProcessing) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-8 mt-16 h-screen">
        <Loader2 className="w-32 h-32 text-[#00c853] animate-spin" />
        <div className="space-y-4">
          <h1 className="text-4xl font-black text-slate-900 leading-tight">Leyendo factura...</h1>
          <p className="text-2xl text-slate-600 font-medium">Estamos extrayendo los datos automáticamente.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col px-6 pb-24 h-screen bg-slate-50">
      <header className="py-6 flex items-center justify-between border-b border-slate-200 mb-8 sticky top-0 bg-slate-50 z-10 box-border">
         <Link href={ROUTES.HOME} className="block p-2 -ml-2 rounded-xl focus:bg-slate-200 active:bg-slate-200">
           <ArrowLeft className="w-10 h-10 text-slate-950" />
         </Link>
         <h1 className="text-2xl font-bold text-slate-900 w-full text-center pr-[44px]">Registrar Gasto</h1>
      </header>
      
      <div className="mb-12 text-center space-y-3 px-2">
        <h2 className="text-4xl font-black tracking-tight text-slate-900 leading-tight">¿Cómo desea registrarlo?</h2>
        <p className="text-2xl text-slate-600 font-medium">Elija la opción más fácil para usted.</p>
      </div>

      <div className="flex-1 space-y-8">
        {/* Hidden File Input for Camera / File picking */}
        <input 
          type="file" 
          accept="image/*" 
          capture="environment" 
          className="hidden" 
          ref={fileInputRef}
          onChange={handleFileChange}
        />

        <Button 
          size="giant" 
          className="w-full flex flex-col gap-6 py-16 h-auto shadow-xl bg-[#00e676] hover:bg-[#00c853] text-slate-900 rounded-[32px] border-b-8 border-[#00c853]"
          onClick={handleCaptureClick}
        >
          <Camera size={72} className="text-slate-900 drop-shadow-md" />
          <span className="text-3xl font-black drop-shadow-sm">Tomar Foto a la Factura</span>
          <span className="text-xl font-normal text-emerald-900 px-4 whitespace-normal text-center leading-tight">
            Nosotros sacamos los datos por usted
          </span>
        </Button>

        <div className="relative py-6 flex items-center">
            <div className="flex-grow border-t border-slate-300"></div>
            <span className="flex-shrink-0 mx-4 text-slate-400 text-xl font-bold">O también puede</span>
            <div className="flex-grow border-t border-slate-300"></div>
        </div>

        <Button 
          size="giant" 
          variant="secondary" 
          className="w-full flex items-center justify-start px-8 gap-6 shadow-md py-12 rounded-[28px] border-2 border-slate-200 bg-white"
          onClick={handleDownloadTemplate}
        >
           <div className="bg-emerald-50 p-4 rounded-[18px] shadow-sm border border-emerald-100">
             <FileDown size={44} className="text-emerald-600" />
           </div>
           <span className="text-2xl font-bold text-left whitespace-normal text-slate-900 leading-tight">
             Descargar Plantilla Manual
           </span>
        </Button>
      </div>
    </div>
  );
}

