import { CheckCircle2 } from "lucide-react";

interface SyncSuccessHeaderProps {
  count: number;
}

export function SyncSuccessHeader({ count }: SyncSuccessHeaderProps) {
  return (
    <header className="mb-10 text-center space-y-3">
      <div className="bg-[#00e676]/10 p-4 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
        <CheckCircle2 className="w-16 h-16 text-[#00c853]" />
      </div>
      <h1 className="text-4xl font-black text-slate-900 tracking-tight">¡Facturas listas!</h1>
      <p className="text-2xl text-slate-600 font-medium">Encontramos {count} facturas nuevas.</p>
    </header>
  );
}
