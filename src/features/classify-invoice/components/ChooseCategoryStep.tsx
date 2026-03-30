import { Button } from "@/components/ui";

interface ChooseCategoryStepProps {
  categories: string[];
  onSelect: (category: string) => void;
  onCancel: () => void;
}

export function ChooseCategoryStep({ categories, onSelect, onCancel }: ChooseCategoryStepProps) {
  return (
    <div className="flex-1 space-y-6 animate-in slide-in-from-bottom-4 fade-in">
      <h3 className="text-3xl font-black text-slate-900 mb-6 px-2">Seleccione la categoría:</h3>
      <div className="grid gap-4">
         {categories.map(cat => (
           <Button 
             key={cat} 
             variant="secondary" 
             size="giant"
             className="justify-start py-8 text-[22px] px-6"
             onClick={() => onSelect(cat)}
           >
             <span className="w-full text-center font-bold">{cat}</span>
           </Button>
         ))}
      </div>
      <Button size="giant" variant="ghost" onClick={onCancel} className="mt-8 text-2xl py-8">
         Cancelar
      </Button>
    </div>
  );
}
