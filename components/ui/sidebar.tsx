"use client";

import { useState } from "react";
import { 
  ChevronDown, 
  CircleHelp, 
  Sparkles, 
  User, 
  Folder, 
  ShoppingBag, 
  PlaySquare, 
  MonitorPlay, 
  Users, 
  Briefcase, 
  Banknote 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { TiktokIcon } from "@/components/icons/tiktokIcon";

const creationItems = [
  { label: "Laboratório de avatares", active: true, icon: User },
  { label: "Meus projetos", active: false, icon: Folder }
];

const geralItems = [
  { label: "Cursos", icon: PlaySquare },
  { label: "Lives de mentoria", icon: MonitorPlay },
  { label: "Comunidade", icon: Users },
  { label: "Mercado de trabalho", icon: Briefcase },
  { label: "Indique e ganhe", icon: Banknote },
];

const tiktokShopCategories = [
  { label: "Espionagem" },
  { label: "Produtos virais" },
  { label: "Vídeos virais" },
  { label: "Calculadora" },
];

export function Sidebar() {
  return (
    <aside className="hidden xl:flex w-[260px] shrink-0 h-screen sticky top-0 border-r border-[#1E1E2A] bg-[#0D0D14] text-[#B7B7C9] p-4 flex-col">
      <div className="mb-10"> 
        <div className="h-10 rounded-lg border border-[#2A2A3B] bg-[#121220] px-3 flex items-center gap-2">
          {/* O ícone da logo mantemos com a cor original violeta */}
          <Sparkles className="w-4 h-4 text-violet-300" />
          <span className="text-sm font-semibold text-white">Influencers Lab</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar">
        <NavSection title="ESTÚDIO DE CRIAÇÃO" items={creationItems} />
        <MarketplaceSection />
        <NavSection title="GERAL" items={geralItems} />
      </div>

      <div className="mt-auto space-y-4 pt-4 border-t border-[#1E1E2A]">
        {/* AQUI: Adicionado 'group' no botão */}
        <button className="w-full text-left text-sm px-2.5 py-2 rounded-md text-[#ACACC0] hover:bg-[#191929] transition-colors flex items-center gap-3 group">
          {/* AQUI: Adicionado o efeito de hover no ícone */}
          <CircleHelp className="w-4 h-4 text-[#8E8EA6] group-hover:text-white transition-colors" />
          {/* Opcional: Se quiser que o texto também fique branco no hover, adicione group-hover:text-white no span abaixo */}
          <span className="group-hover:text-white transition-colors">Central de ajuda</span>
        </button>

        <div className="flex items-center gap-3 px-2.5 py-2 cursor-pointer hover:bg-[#191929] rounded-md transition-colors group">
          <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
            <img 
              src="https://github.com/shadcn.png" 
              alt="Avatar" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col flex-1 overflow-hidden">
            <span className="text-sm font-medium text-[#D3D3E6] truncate group-hover:text-white transition-colors">NomeDoUsuario</span>
            <span className="text-[11px] text-[#6D6D83]">Plano Básico</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-[#6D6D83] mb-3 group-hover:bg-[#8E8EA6] transition-colors" />
          <div className="w-1 h-1 rounded-full bg-[#6D6D83] mb-3 -ml-2 group-hover:bg-[#8E8EA6] transition-colors" />
          <div className="w-1 h-1 rounded-full bg-[#6D6D83] mb-3 -ml-2 group-hover:bg-[#8E8EA6] transition-colors" />
        </div>
      </div>
    </aside>
  );
}

function NavSection({
  title,
  items,
}: {
  title: string;
  items: { label: string; active?: boolean; icon: React.ElementType }[];
}) {
  return (
    <div className="mb-8">
      <div className="mb-3 text-[10px] uppercase tracking-[0.14em] text-[#6D6D83] font-semibold">
        {title}
      </div>
      <div className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className={cn(
                // AQUI: Adicionado 'group' na lista de classes base
                "w-full text-left text-sm px-2.5 py-2 rounded-md transition-colors flex items-center gap-3 group",
                item.active
                  ? "bg-violet-600 text-white font-medium shadow-[0_0_24px_rgba(124,58,237,0.35)]"
                  : "hover:bg-[#191929] text-[#ACACC0]"
              )}
            >
              <Icon 
                className={cn(
                  "w-4 h-4 transition-colors", 
                  // AQUI: Se estiver ativo é branco, senão é cinza e fica branco no hover do 'group'
                  item.active ? "text-white" : "text-[#8E8EA6] group-hover:text-white"
                )} 
              />
              {/* Adicionado o hover no texto também para acompanhar o ícone e dar uma sensação melhor de interatividade */}
              <span className={cn("transition-colors", !item.active && "group-hover:text-white")}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function MarketplaceSection() {
  const [isTiktokOpen, setIsTiktokOpen] = useState(false);

  return (
    <div className="mb-8">
      <div className="mb-3 text-[10px] uppercase tracking-[0.14em] text-[#6D6D83] font-semibold">
        MARKETPLACES
      </div>

      <div className="space-y-1">
        <button
          onClick={() => setIsTiktokOpen((prev) => !prev)}
          className="w-full text-left text-sm px-2.5 py-2 rounded-md hover:bg-[#191929] transition-colors flex items-center gap-3 group"
        >
          {/* Ícone customizado do TikTok */}
          <TiktokIcon className="text-[#8E8EA6] group-hover:text-white transition-colors" />
          
          <span className="flex-1 text-[#D3D3E6] group-hover:text-white transition-colors">Tiktok Shop</span>
          
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-all duration-200",
              // AQUI: A setinha também herda a cor cinza e fica branca no hover
              "text-[#8E8EA6] group-hover:text-white",
              isTiktokOpen && "rotate-180"
            )}
          />
        </button>

        <div 
          className={cn(
            "ml-5 pl-4 border-l border-[#2A2A3A] space-y-1 my-1 overflow-hidden transition-all duration-300 ease-in-out",
            isTiktokOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          {tiktokShopCategories.map((item) => (
            <button
              key={item.label}
              className="w-full text-left text-sm px-2.5 py-1.5 rounded-md transition-colors hover:bg-[#191929] text-[#ACACC0] hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button className="w-full text-left text-sm px-2.5 py-2 rounded-md hover:bg-[#191929] transition-colors flex items-center gap-3 group">
          <ShoppingBag className="w-4 h-4 text-[#8E8EA6] group-hover:text-white transition-colors" />
          <span className="text-[#D3D3E6] group-hover:text-white transition-colors">Shopee</span>
        </button>
      </div>
    </div>
  );
}