'use client';

import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useInfluencerStore } from "@/app/types/useInfluencerStore";

const steps = [
  { id: 1, label: "DNA Base" },
  { id: 2, label: "Estilo e Cabelo" },
  { id: 3, label: "Pele e Detalhes" },
  { id: 4, label: "Resultado Final" },
];

export function Stepper() {
  const currentStep = useInfluencerStore((state) => state.currentStep);

  return (
    <div className="w-full pt-3 pb-7">
      <div className="relative flex justify-between items-start">
        
        <div className="absolute top-[12px] left-[60px] right-[60px] h-px bg-[#2A2A3A]" />
        
        <div
          className="absolute top-[12px] left-[60px] h-px bg-violet-500 transition-all duration-500"
          style={{
            width: `calc((100% - 120px) * ${((currentStep - 1) / (steps.length - 1)).toString()})`,
          }}
        />

        {steps.map((step) => {
          const isCompleted = currentStep > step.id;
          const isActive = currentStep === step.id;

          return (
            <div key={step.id} className="relative flex flex-col items-center w-[120px]">
              <div
                className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-300 z-10",
                  (isActive || isCompleted) &&
                    "bg-[#EEEEFF] border-black text-white shadow-[0_0_0_3px_rgba(124,58,237,0.12)]",
                  !isActive && !isCompleted && "bg-[#0A0616] border-[#2A2A3A] text-white"
                )}
              >
                {isCompleted ? (
                  <Check className="w-3 h-3 stroke-[3] text-black" />
                ) : null}
              </div>

              <span
                className={cn(
                  "mt-3 text-[11px] font-medium transition-colors duration-300 text-center w-full",
                  isActive || isCompleted ? "text-[#D7D7E8]" : "text-[#6D6D83]"
                )}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}