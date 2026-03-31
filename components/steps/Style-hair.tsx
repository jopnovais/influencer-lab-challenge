"use client";

import { useInfluencerStore } from "@/app/types/useInfluencerStore";
import { RadioGroup } from "@/components/ui/radio-group";
import { RadioCard, DashedActionCard } from "@/components/ui/radio-card";

const eyeColorOptions = [
  { value: "Castanho", label: "Castanho", dot: "bg-amber-700" },
  { value: "Azul", label: "Azul", dot: "bg-blue-400" },
  { value: "Verde", label: "Verde", dot: "bg-emerald-400" },
  { value: "Mel", label: "Mel", dot: "bg-yellow-500" },
  { value: "Preto", label: "Preto", dot: "bg-black border border-gray-700" },
] as const;

const hairColorOptions = [
  { value: "Preto", label: "Preto", dot: "bg-black border border-gray-700" },
  { value: "Castanho", label: "Castanho", dot: "bg-amber-700" },
  { value: "Loiro", label: "Loiro", dot: "bg-yellow-300" },
  { value: "Ruivo", label: "Ruivo", dot: "bg-red-500" },
  { value: "Colorido", label: "Colorido", dot: "bg-gradient-to-r from-cyan-400 to-fuchsia-500" },
] as const;

const hairStyleOptions = [
  { value: "Longo / Solto", label: "Longo / Solto", icon: "👱🏻‍♀️" },
  { value: "Curto", label: "Curto", icon: "👱🏻" },
  { value: "Cacheado / Afro", label: "Cacheado / Afro", icon: "👩🏾" },
  { value: "Preso / Coque", label: "Preso / Coque", icon: "👩🏼" },
  { value: "Tranças", label: "Tranças", icon: "👩🏿" },
] as const;

const bodyTypeOptions = [
  { value: "Magra", label: "Magra" },
  { value: "Curvilínea", label: "Curvilínea" },
  { value: "Plus Size", label: "Plus Size" },
  { value: "Nanismo", label: "Nanismo" },
] as const;

export default function StyleHair() {
  const { data, updateData } = useInfluencerStore();

  return (
    <section className="h-full animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 lg:divide-x lg:divide-[#232334] h-full">
        
        <div className="space-y-3 lg:pr-4 lg:col-span-1">
          <h3 className="text-sm font-semibold text-gray-200">1. Cor dos Olhos</h3>
          <RadioGroup
            value={data.eyeColor}
            onValueChange={(value) => updateData({ eyeColor: value as any })}
            className="grid grid-cols-1 gap-2"
          >
            {eyeColorOptions.map((option) => (
              <RadioCard
                key={option.value}
                value={option.value}
                label={option.label}
                icon={<span className={`w-4 h-4 rounded-full ${option.dot}`} />}
                className="p-3.5"
              />
            ))}
            <DashedActionCard label="+ Personalizar" onClick={() => {}} />
          </RadioGroup>
        </div>


        <div className="space-y-3 lg:px-4 lg:col-span-2">
          <div>
            <h3 className="text-sm font-semibold text-gray-200">2. Cabelo</h3>
            <p className="text-xs text-[#8A8AA3] mt-1">Cor dos fios</p>
          </div>
          <RadioGroup
            value={data.hairColor}
            onValueChange={(value) => updateData({ hairColor: value as any })}
            className="grid grid-cols-2 gap-2"
          >
            {hairColorOptions.map((option) => (
              <RadioCard
                key={option.value}
                value={option.value}
                label={option.label}
                icon={<span className={`w-4 h-4 rounded-full ${option.dot}`} />}
                className="p-3.5"
              />
            ))}
            <DashedActionCard label="+ Personalizar" onClick={() => {}} />
          </RadioGroup>

          <div className="pt-2">
            <p className="text-xs text-[#8A8AA3] mb-2">Estilo / Penteado</p>
            <RadioGroup
              value={data.hairStyle}
              onValueChange={(value) => updateData({ hairStyle: value as any })}
              className="grid grid-cols-2 gap-2"
            >
              {hairStyleOptions.map((option) => (
                <RadioCard
                  key={option.value}
                  value={option.value}
                  label={option.label}
                  icon={option.icon}
                  className="p-3.5"
                />
              ))}
              <DashedActionCard label="+ Personalizar" onClick={() => {}} />
            </RadioGroup>
          </div>
        </div>

        <div className="space-y-3 lg:pl-4 lg:col-span-1">
          <h3 className="text-sm font-semibold text-gray-200">3. Tipo de corpo</h3>
          <RadioGroup
            value={data.bodyType}
            onValueChange={(value) => updateData({ bodyType: value as any })}
            className="grid grid-cols-1 gap-2"
          >
            {bodyTypeOptions.map((option) => (
              <RadioCard
                key={option.value}
                value={option.value}
                label={option.label}
                className="p-3.5 justify-center text-center"
              />
            ))}
            <DashedActionCard label="+ Personalizar" onClick={() => {}} />
          </RadioGroup>
        </div>

      </div>
    </section>
  );
}