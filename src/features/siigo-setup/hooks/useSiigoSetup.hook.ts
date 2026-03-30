import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants';

export type SiigoStep = "username" | "apiKey";

export const useSiigoSetup = () => {
  const router = useRouter();
  const [step, setStep] = useState<SiigoStep>("username");
  const [username, setUsername] = useState("");
  const [apiKey, setApiKey] = useState("");

  const handleNext = () => {
    if (step === "username") {
      setStep("apiKey");
    } else {
      alert("Configuración de Siigo completada con éxito");
      router.push(ROUTES.HOME);
    }
  };

  const setApiKeyStep = () => setStep("apiKey");
  const setUsernameStep = () => setStep("username");

  return {
    step,
    setStep,
    username,
    setUsername,
    apiKey,
    setApiKey,
    handleNext,
    setApiKeyStep,
    setUsernameStep
  };
};
