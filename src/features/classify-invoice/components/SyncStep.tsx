import { CloudLightning } from "lucide-react";
import { Button } from "@/components/ui";

interface SyncStepProps {
  selectedCategory: string | null;
  onUpload: () => void;
}

export function SyncStep({ selectedCategory, onUpload }: SyncStepProps) {
  return (
    <div className="flex-1 space-y-12 animate-in slide-in-from-bottom-4 fade-in pt-8">
      <div className="bg-emerald-50 border-[3px] border-emerald-100 p-8 rounded-[32px] text-center">
        <p className="text-2xl text-emerald-900 font-bold mb-2">Categoría elegida:</p>
        <p className="text-4xl text-emerald-600 font-black">{selectedCategory}</p>
      </div>

      <div className="text-center pt-8">
        <Button size="giant" className="py-14 w-full shadow-2xl rounded-[40px] text-4xl bg-[#00e676] hover:bg-[#00c853] text-slate-900 border-[#00c853]" onClick={onUpload}>
          <CloudLightning className="w-14 h-14 mr-6 drop-shadow-md text-emerald-900" strokeWidth={2.5} /> 
          <span className="drop-shadow-sm font-black">Subir a Siigo</span>
        </Button>
        <p className="mt-8 text-xl text-slate-500 max-w-[80%] mx-auto leading-relaxed font-medium">Con un solo toque esta factura quedará registrada en su contabilidad.</p>
      </div>
    </div>
  );
}
