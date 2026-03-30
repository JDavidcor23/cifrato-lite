import Image from "next/image";
import logo from "@/assets/logo.png";

export function DashboardHeader() {
  return (
    <header className="mb-12 text-center space-y-6">
      <div className="flex justify-center mb-4">
         <Image src={logo} alt="Cifrato Lite" width={120} height={120} priority className="drop-shadow-sm" />
      </div>
      <div className="space-y-1">
        <h1 className="text-4xl font-black tracking-tight text-slate-900">Hola, Don José</h1>
        <p className="text-2xl text-slate-600 font-medium">¿Qué vamos a hacer hoy?</p>
      </div>
    </header>
  );
}
