import Link from "next/link";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui";
import { ROUTES } from "@/constants";

interface SyncErrorProps {
  onRetry: () => void;
}

export function SyncError({ onRetry }: SyncErrorProps) {
  return (
    <div className="flex-1 flex flex-col items-center p-8 text-center space-y-8 mt-[20vh]">
      <div className="bg-rose-100 p-6 rounded-full inline-block mb-4">
        <AlertCircle className="w-20 h-20 text-rose-600" />
      </div>
      <div className="space-y-4">
        <h1 className="text-3xl font-black text-slate-900 leading-tight">Hubo un pequeño problema al traer sus facturas.</h1>
        <p className="text-2xl text-slate-600">Por favor, intentemos de nuevo.</p>
      </div>
      <Button 
        size="giant" 
        onClick={onRetry} 
        className="w-full mt-8 py-10 text-[24px]"
      >
        Intentar de nuevo
      </Button>
      <Link href={ROUTES.HOME} className="w-full">
          <Button size="giant" variant="ghost" className="w-full py-10 text-[24px]">
            Volver al inicio
          </Button>
      </Link>
    </div>
  );
}
