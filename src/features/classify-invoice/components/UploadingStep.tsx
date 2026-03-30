import { Loader2 } from "lucide-react";

export function UploadingStep() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center space-y-8 mt-16 animate-in fade-in">
       <div className="bg-emerald-100 p-8 rounded-full">
         <Loader2 className="w-32 h-32 text-emerald-600 animate-spin" />
       </div>
       <h1 className="text-4xl font-black text-slate-900 text-center leading-snug">Guardando en Siigo...</h1>
       <p className="text-2xl text-slate-600 font-medium">Por favor, no cierre esta pantalla.</p>
    </div>
  );
}
