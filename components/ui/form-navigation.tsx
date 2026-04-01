"use client";

import React from "react";
import { useInfluencerStore } from "@/app/types/useInfluencerStore";
import { ChevronLeft } from "lucide-react";

export function FormNavigation() {
  const { currentStep, nextStep, prevStep } = useInfluencerStore();

  const isLastStep = currentStep === 4;

  return (
    <div className="flex justify-between items-center pt-4 mt-4 border-t border-gray-800 shrink-0">
      <button
        type="button"
        onClick={prevStep}
        className="flex items-center gap-2 px-16 py-3 rounded-lg border border-[#8B5CF6]/90 text-white hover:bg-[#8B5CF6]/15 transition-all"
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

      <button
        type="button"
        onClick={nextStep}
        className="px-16 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-bold transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:scale-[1.02]"
      >
        {isLastStep ? "Concluir Criação" : "Próximo"}
      </button>
    </div>
  );
}