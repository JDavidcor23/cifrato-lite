import Link from "next/link";
import { Card } from "@/components/ui";
import { ROUTES } from "@/constants";
import { Invoice } from "../types/syncInvoices.types";
import { formatCurrency } from "@/lib/mockData";

interface InvoiceListProps {
  invoices: Invoice[];
}

export function InvoiceList({ invoices }: InvoiceListProps) {
  return (
    <div className="space-y-6">
      {invoices.map((invoice) => (
        <Link key={invoice.id} href={ROUTES.INVOICE(invoice.id)} className="block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00e676] rounded-3xl">
          <Card className="hover:border-[#00e676] hover:shadow-lg transition-all border-2 border-transparent active:scale-[0.98] shadow-md relative overflow-hidden bg-white">
             <div className="absolute top-0 right-0 w-24 h-24 bg-[#00e676]/5 transform translate-x-12 -translate-y-12 rounded-full z-0"></div>
            <div className="p-8 relative z-10 flex flex-col gap-4">
              <div className="flex justify-between items-start">
                  <p className="font-bold text-2xl text-slate-950">{invoice.provider}</p>
                  <span className="bg-emerald-100 text-emerald-800 text-lg font-bold px-4 py-2 rounded-full">
                      Nueva
                  </span>
              </div>
              <p className="text-3xl font-black text-slate-900 font-mono tracking-tight">{formatCurrency(invoice.amount)}</p>
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                   <p className="text-xl font-bold text-[#00c853]">Clasificar ahora →</p>
              </div>
            </div>
          </Card>
        </Link>
      ))}
      {invoices.length === 0 && (
         <div className="text-center p-8 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
             <p className="text-2xl text-slate-400 font-medium">No hay facturas nuevas.</p>
         </div>
      )}
    </div>
  );
}
