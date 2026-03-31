"use client";

import { useInfluencerStore } from "@/app/types/useInfluencerStore";
import { RadioGroup } from "@/components/ui/radio-group";
import { RadioCard, DashedActionCard } from "@/components/ui/radio-card";
import { ImageUpload } from "@/components/ui/image-upload";

export default function DnaBase() {
  const { data, updateData } = useInfluencerStore();

  return (
    <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-4 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="space-y-4 lg:max-w-[440px]">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Rosto Base / Referência Visual (Opcional)
          </h2>
          <p className="text-sm text-gray-400">
            Quer basear o rosto em alguém? Adicione a imagem abaixo.
          </p>
        </div>

        <ImageUpload
          value={data.image}
          onChange={(file) => updateData({ image: file })}
        />
      </div>

      <div className="space-y-3">
        <section>
          <h3 className="text-sm font-semibold mb-2 text-gray-200">
            1. Nome do Influenciador
          </h3>
          <input
            type="text"
            placeholder="Ex: Fulano de Tal"
            value={data.name}
            onChange={(e) => updateData({ name: e.target.value })}
            className="w-full bg-[#090612] border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all"
          />
        </section>

        <section>
          <h3 className="text-sm font-semibold mb-3 text-gray-200">
            2. Qual o gênero?
          </h3>
          <RadioGroup
            value={data.gender}
            onValueChange={(value) => updateData({ gender: value as any })}
            className="grid grid-cols-2 gap-2"
          >
            <RadioCard value="Masculino" label="Masculino" icon="♂️" className="p-3" />
            <RadioCard value="Feminino" label="Feminino" icon="♀️" className="p-3" />
          </RadioGroup>
        </section>

        <section>
          <h3 className="text-sm font-semibold mb-2 text-gray-200">
            3. Qual a faixa etária?
          </h3>
          <RadioGroup
            value={data.ageGroup}
            onValueChange={(value) => updateData({ ageGroup: value as any })}
            className="grid grid-cols-2 gap-2"
          >
            <RadioCard value="Jovem" label="Jovem (18-25)" icon="👩🏻" className="p-3" />
            <RadioCard value="Adulto" label="Adulto (26-40)" icon="👩🏽‍💼" className="p-3" />
            <RadioCard value="Maduro" label="Maduro (41-60)" icon="👵🏼" className="p-3" />
            <RadioCard value="Sênior" label="Sênior (61+)" icon="👵🏻" className="p-3" />
          </RadioGroup>
        </section>

        <section>
          <h3 className="text-sm font-semibold mb-2 text-gray-200">
            4. Qual a etnia / fenótipo?
          </h3>
          <RadioGroup
            value={data.ethnicity}
            onValueChange={(value) => updateData({ ethnicity: value as any })}
            className="grid grid-cols-2 gap-2"
          >
            <RadioCard value="Branca" label="Branca" icon="👱🏻‍♀️" className="p-3" />
            <RadioCard value="Asiática" label="Asiática" icon="👩🏻" className="p-3" />
            <RadioCard value="Negra" label="Negra" icon="👩🏾" className="p-3" />
            <DashedActionCard label="+ Personalizar" onClick={() => {}} />
          </RadioGroup>
        </section>
      </div>
    </div>
  );
}