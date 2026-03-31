import { create } from 'zustand';
import { InfluencerData } from '@/app/types/influencer';

interface WizardState {
  currentStep: number;
  data: InfluencerData;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  updateData: (newData: Partial<InfluencerData>) => void;
}

const initialData: InfluencerData = {
  image: null,
  name: '',
  gender: '',
  ageGroup: '',
  ethnicity: '',
  eyeColor: '',
  hairColor: '',
  hairStyle: '',
  bodyType: '',
};

export const useInfluencerStore = create<WizardState>((set) => ({
  currentStep: 1, // Começa na Etapa 1
  data: initialData,
  
  setStep: (step) => set({ currentStep: step }),
  
  nextStep: () => set((state) => ({ 
    currentStep: Math.min(state.currentStep + 1, 4) 
  })),
  
  prevStep: () => set((state) => ({ 
    currentStep: Math.max(state.currentStep - 1, 1) 
  })),
  
  updateData: (newData) => set((state) => ({
    data: { ...state.data, ...newData }
  })),
}));