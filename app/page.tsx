"use client";

import { useInfluencerStore } from "@/app/types/useInfluencerStore";
import { FormNavigation } from "@/components/ui/form-navigation";
import DnaBase from "@/components/steps/DnaBase";
import StyleHair from "@/components/steps/Style-hair";
import FinalResult from "@/components/steps/finalResult";
import Details from "@/components/steps/details";
import { Stepper } from "@/components/ui/stepper";
import { Sidebar } from "@/components/ui/sidebar";

export default function HomePage() {
  const currentStep = useInfluencerStore((state) => state.currentStep);

  return (
    <main className="h-screen overflow-hidden bg-[#0A0A10] text-white">
      <div className="flex h-full">
        <Sidebar />

        <div className="flex-1 h-full overflow-hidden px-4 py-4 md:px-8 lg:px-10">
          <div className="max-w-6xl mx-auto h-full flex flex-col">
            <header className="mb-4 shrink-0">
              <h1 className="text-3xl font-semibold tracking-tight">Crie sua influencer</h1>
              <p className="text-sm text-[#8A8AA3] mt-1">
                Nascimento, DNA e objetivo inicial
              </p>
            </header>

            <div className="shrink-0 mb-4">
              <Stepper />
            </div>

            <div className="bg-[#0A0616] border border-[#232334] rounded-xl p-5 md:p-6 flex-1 min-h-0 flex flex-col">
              <div className="flex-1 min-h-0 overflow-y-auto pr-1">
                {currentStep === 1 && <DnaBase />}
                {currentStep === 2 && <StyleHair />}
                {currentStep === 3 && <Details />}
                {currentStep === 4 && <FinalResult />}
              </div>
              <FormNavigation />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}