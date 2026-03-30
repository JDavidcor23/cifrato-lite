import Link from "next/link";
import { RefreshCw, CloudLightning } from "lucide-react";
import { Card } from "@/components/ui";
import { ROUTES } from "@/constants";

export function DashboardSetupSteps() {
  return (
    <section className="pt-8">
       <h2 className="text-2xl font-bold text-slate-900 mb-4 px-2">Configuración Inicial</h2>
       <div className="grid grid-cols-2 gap-4">
          <Link href={ROUTES.DIAN_SETUP} className="block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00e676] rounded-2xl">
             <Card className="p-5 flex flex-col items-center justify-center text-center gap-3 border-2 border-slate-50 hover:border-[#00e676]/30 transition-colors shadow-md rounded-2xl">
                <div className="bg-[#00e676]/10 p-3 rounded-full">
                   <RefreshCw className="text-[#00c853]" size={32} />
                </div>
                <span className="text-lg font-bold text-slate-900">Configurar DIAN</span>
             </Card>
          </Link>
          <Link href={ROUTES.SIIGO_SETUP} className="block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00e676] rounded-2xl">
             <Card className="p-5 flex flex-col items-center justify-center text-center gap-3 border-2 border-slate-50 hover:border-[#00e676]/30 transition-colors shadow-md rounded-2xl">
                <div className="bg-[#00e676]/10 p-3 rounded-full">
                   <CloudLightning className="text-[#00c853]" size={32} />
                </div>
                <span className="text-lg font-bold text-slate-900">Conectar Siigo</span>
             </Card>
          </Link>
       </div>
    </section>
  );
}
