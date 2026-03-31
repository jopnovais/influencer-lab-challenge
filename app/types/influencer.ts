export type Gender = 'Masculino' | 'Feminino' | '';
export type AgeGroup = 'Jovem' | 'Adulto' | 'Maduro' | 'Sênior' | '';
export type Ethnicity = 'Branca' | 'Asiática' | 'Negra' | 'Personalizar' | '';
export type EyeColor = 'Castanho' | 'Azul' | 'Verde' | 'Mel' | 'Preto' | 'Personalizar' | '';
export type HairColor = 'Preto' | 'Castanho' | 'Loiro' | 'Ruivo' | 'Colorido' | 'Personalizar' | '';
export type HairStyle = 'Longo / Solto' | 'Curto' | 'Cacheado / Afro' | 'Preso / Coque' | 'Tranças' | 'Personalizar' | '';
export type BodyType = 'Magra' | 'Curvilínea' | 'Plus Size' | 'Nanismo' | 'Personalizar' | '';

export interface InfluencerData {
  image: File | string | null; // Pode ser o arquivo real ou uma URL temporária
  name: string;
  gender: Gender;
  ageGroup: AgeGroup;
  ethnicity: Ethnicity;
  eyeColor: EyeColor;
  hairColor: HairColor;
  hairStyle: HairStyle;
  bodyType: BodyType;
}