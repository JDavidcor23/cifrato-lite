import { FileText } from "lucide-react";
import { Card } from "@/components/ui";

export function DashboardRecentActivity() {
  return (
    <section className="pt-6">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Actividad Reciente</h2>
      <Card className="border border-slate-200 shadow-lg overflow-hidden bg-white rounded-2xl">
        <div className="divide-y divide-slate-100">
          <div className="p-5 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                <FileText className="text-emerald-600" size={32} />
              </div>
              <div>
                <p className="font-bold text-xl text-slate-950">Electricaribe</p>
                <p className="text-slate-600 text-lg">Ayer • Servicios</p>
              </div>
            </div>
          </div>
          <div className="p-5 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                <FileText className="text-emerald-600" size={32} />
              </div>
              <div>
                <p className="font-bold text-xl text-slate-950">Papelería Centro</p>
                <p className="text-slate-600 text-lg">10 May • Insumos</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-50 p-5 text-center border-t border-slate-100 active:bg-slate-100 transition-colors cursor-pointer text-emerald-700 font-bold text-xl">
          Ver historial completo
        </div>
      </Card>
    </section>
  );
}
