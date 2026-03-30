"use client";

import { ArrowLeft, Check, ClipboardPaste, AlertTriangle, HelpCircle } from "lucide-react";
import { Button, Card } from "@/components/ui";
import { ROUTES } from "@/constants";
import { useDianSetup } from "@/features/dian-setup/hooks/useDianSetup.hook";
import Link from "next/link";

export default function DianSetupPage() {
  const {
    tokenInput,
    setTokenInput,
    error,
    validateAndSave,
    handlePaste
  } = useDianSetup();

  return (
    <div className="flex-1 flex flex-col px-6 pb-24 h-screen bg-gray-50">
      <header className="py-6 flex items-center justify-between border-b border-gray-200 mb-8 sticky top-0 bg-gray-50 z-10 box-border">
         <Link href={ROUTES.HOME} className="block p-2 -ml-2 rounded-xl focus:bg-gray-200 active:bg-gray-200">
           <ArrowLeft className="w-10 h-10 text-gray-950" />
         </Link>
         <h1 className="text-2xl font-bold text-gray-900 w-full text-center pr-[44px]">Configurar DIAN</h1>
      </header>

      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">Enlace Mágico</h2>
          <p className="text-xl text-gray-700">Pegue aquí el enlace que recibió por correo:</p>
        </div>

        <Card className="p-4 shadow-lg border-2 border-slate-100 rounded-2xl overflow-hidden focus-within:border-[#00e676] transition-colors">
          <textarea
            className="w-full h-32 p-4 text-xl border-none focus:ring-0 resize-none bg-transparent placeholder:text-slate-300 font-medium"
            placeholder="Pegue aquí el enlace largo..."
            value={tokenInput}
            onChange={(e) => setTokenInput(e.target.value)}
          />
        </Card>

        {error && (
          <div className="bg-rose-50 border-2 border-rose-200 p-6 rounded-2xl flex items-center gap-4 animate-in shake">
            <AlertTriangle className="w-10 h-10 text-rose-600 shrink-0" />
            <p className="text-xl font-bold text-rose-700 leading-tight">{error}</p>
          </div>
        )}

        <div className="space-y-4">
          <Button size="giant" variant="secondary" className="w-full py-10 text-2xl border-2 border-slate-200" onClick={handlePaste}>
            <ClipboardPaste className="w-8 h-8 mr-4" />
            Pegar Enlace
          </Button>

          <Button size="giant" className="w-full py-10 text-2xl" onClick={validateAndSave} disabled={!tokenInput}>
            <Check className="w-8 h-8 mr-4" />
            Vincular ahora
          </Button>
        </div>

        <div className="pt-8">
            <div className="bg-emerald-50 p-6 rounded-2xl flex items-start gap-4 border border-emerald-100">
               <Link href="https://www.youtube.com/watch?v=Thop7UZVqCU" target="_blank" className="block w-full">
                  <Button variant="ghost" size="giant" className="w-full text-emerald-700 py-8 text-xl border-2 border-transparent font-bold">
                     <HelpCircle className="w-8 h-8 mr-4" strokeWidth={2.5} />
                     Ver video de ayuda (DIAN)
                  </Button>
               </Link>
            </div>
        </div>
      </div>
    </div>
  );
}

