import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ROUTES } from "@/constants";

export function InvoiceDetailHeader() {
  return (
    <header className="py-6 flex items-center justify-between border-b border-gray-200 mb-8 sticky top-0 bg-gray-50 z-10 box-border">
       <Link href={ROUTES.SYNC("test-123")} className="block p-2 -ml-2 rounded-xl focus:bg-gray-200 active:bg-gray-200">
         <ArrowLeft className="w-10 h-10 text-gray-950" />
       </Link>
       <h1 className="text-2xl font-bold text-gray-900 w-full text-center pr-[44px]">Detalle de Factura</h1>
    </header>
  );
}
