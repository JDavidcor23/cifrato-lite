import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants';

export const useDianSetup = () => {
  const router = useRouter();
  const [tokenInput, setTokenInput] = useState("");
  const [error, setError] = useState<string | null>(null);

  const DIAN_REGEX = /https:\/\/catalogo\.dian\.gov\.co\/Document\/Access\/([a-zA-Z0-9-]+)/;

  const validateAndSave = () => {
    const match = tokenInput.match(DIAN_REGEX);
    if (match) {
      setError(null);
      alert("Conexión con DIAN exitosa");
      router.push(ROUTES.HOME);
    } else {
      setError("Este enlace no parece correcto, inténtelo de nuevo");
    }
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setTokenInput(text);
    } catch (err) {
      console.error("Failed to read clipboard", err);
    }
  };

  return {
    tokenInput,
    setTokenInput,
    error,
    validateAndSave,
    handlePaste
  };
};
