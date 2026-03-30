import Link from "next/link";
import { RefreshCw, Wallet } from "lucide-react";
import { Button } from "@/components/ui";
import { ROUTES } from "@/constants";

export function DashboardMainActions() {
  return (
    <section className="space-y-6">
      <Link href={ROUTES.SYNC("test-token-123")} className="block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00e676] rounded-2xl">
        <Button size="giant" className="w-full flex items-center justify-start px-6 gap-6 shadow-xl py-12" tabIndex={-1}>
          <div className="bg-white/20 p-4 rounded-xl">
            <RefreshCw size={44} className="text-white" />
          </div>
          <span className="text-[26px]">Traer mis facturas</span>
        </Button>
      </Link>

      <Link href={ROUTES.EXPENSE_NEW} className="block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00e676] rounded-2xl">
        <Button size="giant" variant="secondary" className="w-full flex items-center justify-start px-6 gap-6 shadow-md py-12 border-2 border-slate-200" tabIndex={-1}>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <Wallet size={44} className="text-slate-900" />
          </div>
          <span className="text-[26px] text-left leading-tight">
            Registrar Gasto<br/>
            <span className="text-xl font-normal text-slate-600">Manual / Foto</span>
          </span>
        </Button>
      </Link>
    </section>
  );
}
