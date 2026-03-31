"use client";

import React from "react";
import { useInfluencerStore } from "@/app/types/useInfluencerStore";
import { ChevronLeft } from "lucide-react";

export function FormNavigation() {
  const { currentStep, nextStep, prevStep } = useInfluencerStore();

  // Se for o último passo, o texto do botão muda para "Finalizar"
  const isLastStep = currentStep === 4;

  return (
    <div className="flex justify-between items-center pt-4 mt-4 border-t border-gray-800 shrink-0">
      {/* Botão Voltar/Cancelar */}
      <button
        type="button"
        onClick={prevStep}
        className="flex items-center gap-2 px-8 py-3 rounded-lg border border-gray-800 text-gray-400 hover:bg-gray-800/50 transition-all"
      >
        {currentStep === 1 ? (
          "Cancelar"
        ) : (
          <>
            <ChevronLeft className="w-4 h-4" />
            Voltar
          </>
        )}
      </button>

      {/* Botão Próximo */}
      <button
        type="button"
        onClick={nextStep}
        className="px-12 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-bold transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:scale-[1.02]"
      >
        {isLastStep ? "Concluir Criação" : "Próximo"}
      </button>
    </div>
  );
}