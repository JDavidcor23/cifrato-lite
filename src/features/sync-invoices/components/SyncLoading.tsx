import { Loader2 } from "lucide-react";

export function SyncLoading() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-8 mt-16">
      <Loader2 className="w-24 h-24 text-[#00c853] animate-spin" />
      <div className="space-y-4">
        <h1 className="text-3xl font-black text-slate-900">Trayendo sus facturas...</h1>
        <p className="text-2xl text-slate-600">Esto tomará unos segundos.</p>
      </div>
    </div>
  );
}
