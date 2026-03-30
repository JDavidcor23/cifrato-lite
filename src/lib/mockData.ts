import { INVOICE_STATUS, InvoiceStatus } from "@/constants/INVOICE_STATUS";
import { Invoice } from "@/features/sync-invoices/types/syncInvoices.types";

export type { InvoiceStatus, Invoice };

export const PUC_MAPPING: Record<string, string> = {
  "Insumos": "510506",
  "Transporte y Domicilios": "513505",
  "Servicios Públicos": "513525",
  "Mantenimiento": "514510",
  "Otros Gastos": "519595",
};

export const mockCategories = Object.keys(PUC_MAPPING);

export const mockInvoices: Invoice[] = [
  {
    id: "INV-001",
    provider: "Gaseosas Lux",
    amount: 145000,
    date: "2024-05-10",
    status: INVOICE_STATUS.PENDING,
    suggestedCategory: "Insumos",
  },
  {
    id: "INV-002",
    provider: "Harinas El Sol",
    amount: 320000,
    date: "2024-05-11",
    status: INVOICE_STATUS.PENDING,
    suggestedCategory: "Insumos",
  },
  {
    id: "INV-003",
    provider: "Electricaribe",
    amount: 85000,
    date: "2024-05-12",
    status: INVOICE_STATUS.SYNCED,
    suggestedCategory: "Servicios Públicos",
  },
  {
    id: "INV-004",
    provider: "Ferretería Don Nacho",
    amount: 65000,
    date: "2024-05-13",
    status: INVOICE_STATUS.PENDING,
    suggestedCategory: "Mantenimiento",
  },
];

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(value);
};
