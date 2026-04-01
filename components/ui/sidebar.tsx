"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronDown,
  CircleHelp,
  User,
  Folder,
  ShoppingBag,
  PlaySquare,
  MonitorPlay,
  Users,
  Briefcase,
  Banknote,
  TvMinimalPlayIcon,
  Menu, // Ícone do menu hamburguer
  X, // Ícone de fechar
} from "lucide-react";
import { cn } from "@/lib/utils";
import { TiktokIcon } from "@/components/icons/tiktokIcon";

const creationItems = [
  { label: "Laboratório de avatares", active: true, icon: User },
  { label: "Geração de vídeos", active: false, icon: TvMinimalPlayIcon },
  { label: "Meus projetos", active: false, icon: Folder },
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
  const [isOpen, setIsOpen] = useState(false);

  // Trava o scroll da página quando o menu mobile está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <div className="xl:hidden w-full flex items-center justify-between p-4 bg-[#0D0D14] border-b border-[#1E1E2A] sticky top-0 z-30">
        <div className="flex items-center">
          <Image
            src="/Logo.svg"
            alt="Influencers Lab"
            width={140}
            height={30}
            style={{ width: "auto", height: "30px" }}
            priority
          />
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 text-[#8E8EA6] hover:text-white transition-colors bg-[#121220] border border-[#2A2A3B] rounded-md"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-0 bg-[#0A0A10] z-[90] transition-opacity duration-300 xl:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={() => setIsOpen(false)}
      />

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-[99] w-[260px] h-screen bg-[#0D0D14] border-r border-[#1E1E2A] text-[#B7B7C9] p-4 flex flex-col transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "xl:translate-x-0 xl:sticky xl:top-0 xl:flex",
        )}
      >
        <div className="mb-10 flex items-center justify-between">
          <div className="h-10 rounded-lg px-2 flex items-center">
            <Image
              src="/Logo.svg"
              alt="Influencers Lab"
              width={190}
              height={40}
              className="h-[40px] w-auto"
              priority
            />
          </div>

          <button
            className="xl:hidden p-2 text-[#8E8EA6] hover:text-white hover:bg-[#191929] rounded-md transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar pb-4">
          <NavSection title="ESTÚDIO DE CRIAÇÃO" items={creationItems} />
          <MarketplaceSection />
          <NavSection title="GERAL" items={geralItems} />
        </div>

        <div className="mt-auto space-y-4 pt-4 border-t border-[#1E1E2A] bg-[#0D0D14]">
          <button className="w-full text-left text-sm px-2.5 py-2 rounded-md text-[#ACACC0] hover:bg-[#191929] transition-colors flex items-center gap-3 group">
            <CircleHelp className="w-4 h-4 text-[#8E8EA6] group-hover:text-white transition-colors" />
            <span className="group-hover:text-white transition-colors">
              Central de ajuda
            </span>
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
              <span className="text-sm font-medium text-[#D3D3E6] truncate group-hover:text-white transition-colors">
                NomeDoUsuario
              </span>
              <span className="text-[11px] text-[#6D6D83]">Plano Básico</span>
            </div>
            <div className="flex flex-col gap-1 pr-1 opacity-60 group-hover:opacity-100 transition-opacity">
              <div className="w-1 h-1 rounded-full bg-[#8E8EA6]" />
              <div className="w-1 h-1 rounded-full bg-[#8E8EA6]" />
              <div className="w-1 h-1 rounded-full bg-[#8E8EA6]" />
            </div>
          </div>
        </div>
      </aside>
    </>
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
                "w-full text-left text-sm px-2.5 py-2 rounded-md transition-colors flex items-center gap-3 group",
                item.active
                  ? "bg-violet-600 text-white font-medium shadow-[0_0_24px_rgba(124,58,237,0.35)]"
                  : "hover:bg-[#191929] text-[#ACACC0]",
              )}
            >
              <Icon
                className={cn(
                  "w-4 h-4 transition-colors",
                  item.active
                    ? "text-white"
                    : "text-[#8E8EA6] group-hover:text-white",
                )}
              />
              <span
                className={cn(
                  "transition-colors",
                  !item.active && "group-hover:text-white",
                )}
              >
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
          <TiktokIcon className="text-[#8E8EA6] group-hover:text-white transition-colors" />

          <span className="flex-1 text-[#D3D3E6] group-hover:text-white transition-colors">
            Tiktok Shop
          </span>

          <ChevronDown
            className={cn(
              "w-4 h-4 transition-all duration-200",
              "text-[#8E8EA6] group-hover:text-white",
              isTiktokOpen && "rotate-180",
            )}
          />
        </button>

        <div
          className={cn(
            "ml-5 pl-4 border-l border-[#2A2A3A] space-y-1 my-1 overflow-hidden transition-all duration-300 ease-in-out",
            isTiktokOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0",
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
          <span className="text-[#D3D3E6] group-hover:text-white transition-colors">
            Shopee
          </span>
        </button>
      </div>
    </div>
  );
}