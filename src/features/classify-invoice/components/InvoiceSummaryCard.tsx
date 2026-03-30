import { Card } from "@/components/ui";
import { Invoice } from "../../sync-invoices/types/syncInvoices.types";
import { formatCurrency } from "@/lib/mockData";

interface InvoiceSummaryCardProps {
  invoice: Invoice;
}

export function InvoiceSummaryCard({ invoice }: InvoiceSummaryCardProps) {
  return (
    <Card className="p-8 mb-10 border-none shadow-lg bg-slate-900 border-slate-800 text-white rounded-[32px] relative overflow-hidden">
       <div className="absolute top-0 right-0 w-32 h-32 bg-[#00e676]/10 transform translate-x-16 -translate-y-16 rounded-full"></div>
       <p className="text-slate-400 text-xl font-medium mb-2">{invoice.date}</p>
       <h2 className="text-5xl font-black mb-4 tracking-tight">{invoice.provider}</h2>
       <p className="text-4xl font-black text-[#00e676] bg-slate-800/50 p-6 rounded-2xl block text-center border-2 border-slate-700 font-mono tracking-tighter">{formatCurrency(invoice.amount)}</p>
    </Card>
  );
}
