import { Check, X } from "lucide-react";
import { Button } from "@/components/ui";

interface ClassifyStepProps {
  suggestedCategory: string;
  onConfirm: () => void;
  onReject: () => void;
}

export function ClassifyStep({ suggestedCategory, onConfirm, onReject }: ClassifyStepProps) {
  return (
    <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-bottom-4">
      <div className="text-center space-y-4">
        <h3 className="text-3xl font-black text-slate-900 leading-snug">
          ¿Esta factura es de <br/>
          <span className="text-emerald-700 bg-emerald-100 px-4 py-1 rounded-full text-4xl inline-block mt-2">
            {suggestedCategory}
          </span>?
        </h3>
      </div>
      
      <div className="flex flex-col gap-6 pt-4">
        <Button size="giant" className="py-12 text-3xl font-black" onClick={onConfirm}>
          <Check className="w-12 h-12 mr-4" strokeWidth={3} /> Sí, es correcto
        </Button>
        <Button size="giant" variant="outline" className="py-12 text-2xl font-bold" onClick={onReject}>
          <X className="w-10 h-10 mr-4" /> No, es otra cosa
        </Button>
      </div>
    </div>
  );
}
