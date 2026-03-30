"use client";

import { ArrowLeft, Check, HelpCircle, Mail, Key } from "lucide-react";
import { Button, Card } from "@/components/ui";
import { ROUTES } from "@/constants";
import { useSiigoSetup } from "@/features/siigo-setup/hooks/useSiigoSetup.hook";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function SiigoSetupPage() {
  const {
    step,
    setStep,
    username,
    setUsername,
    apiKey,
    setApiKey,
    handleNext
  } = useSiigoSetup();

  return (
    <div className="flex-1 flex flex-col px-6 pb-24 h-screen bg-gray-50">
      <header className="py-6 flex items-center justify-between border-b border-gray-200 mb-8 sticky top-0 bg-gray-50 z-10 box-border">
         <Link href={ROUTES.HOME} className="block p-2 -ml-2 rounded-xl focus:bg-gray-200 active:bg-gray-200">
           <ArrowLeft className="w-10 h-10 text-gray-950" />
         </Link>
         <h1 className="text-2xl font-bold text-gray-900 w-full text-center pr-[44px]">Configurar Siigo</h1>
      </header>

      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
        <div className="flex justify-center gap-4 mb-4">
            <div className={cn("h-4 w-12 rounded-full transition-colors", step === "username" ? "bg-[#00e676]" : "bg-slate-200")} />
            <div className={cn("h-4 w-12 rounded-full transition-colors", step === "apiKey" ? "bg-[#00e676]" : "bg-slate-200")} />
        </div>

        {step === "username" && (
          <div className="space-y-10">
            <div className="text-center space-y-4">
               <h2 className="text-3xl font-black text-slate-900 leading-tight">Paso 1: Su Correo</h2>
               <p className="text-xl text-slate-600 font-medium">Ingrese el correo que usa en Siigo:</p>
            </div>

            <Card className="p-6 shadow-lg border-2 border-slate-100 rounded-3xl flex items-center gap-6 focus-within:border-[#00e676] transition-colors bg-white">
               <Mail className="w-10 h-10 text-[#00c853] shrink-0" />
               <input 
                 type="email" 
                 className="w-full text-2xl border-none focus:ring-0 bg-transparent placeholder:text-slate-300 font-bold"
                 placeholder="ejemplo@correo.com"
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}
                 autoFocus
               />
            </Card>

            <Button size="giant" className="w-full py-10 text-2xl mt-4 shadow-xl" disabled={!username} onClick={() => setStep("apiKey")}>
               Continuar →
            </Button>
          </div>
        )}

        {step === "apiKey" && (
          <div className="space-y-10 animate-in slide-in-from-right-4">
            <div className="text-center space-y-4">
               <h2 className="text-3xl font-black text-slate-900 leading-tight">Paso 2: Clave de Conexión</h2>
               <p className="text-xl text-slate-600 font-medium">La clave secreta para conectar los sistemas:</p>
            </div>

            <Card className="p-6 shadow-lg border-2 border-slate-100 rounded-3xl flex items-center gap-6 focus-within:border-[#00e676] transition-colors bg-white">
               <Key className="w-10 h-10 text-[#00c853] shrink-0" />
               <input 
                 type="password" 
                 className="w-full text-2xl border-none focus:ring-0 bg-transparent placeholder:text-slate-300 font-bold"
                 placeholder="S-XXXX-XXXX-XXXX"
                 value={apiKey}
                 onChange={(e) => setApiKey(e.target.value)}
                 autoFocus
               />
            </Card>

            <div className="space-y-4">
               <Button size="giant" className="w-full py-10 text-2xl shadow-xl" disabled={!apiKey} onClick={handleNext}>
                  <Check className="w-8 h-8 mr-4" />
                  Terminar Configuración
               </Button>
               
               <Link href="https://www.youtube.com/watch?v=1pvL4LLDKNw" target="_blank" className="block">
                  <Button variant="ghost" size="giant" className="w-full text-emerald-700 py-8 text-xl border-2 border-transparent font-bold">
                     <HelpCircle className="w-8 h-8 mr-4" strokeWidth={2.5} />
                     Ver video de ayuda (Siigo)
                  </Button>
               </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

