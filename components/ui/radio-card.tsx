import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils"; // Utilitário padrão do shadcn

interface RadioCardProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  label: string;
  icon?: React.ReactNode;
}

export const RadioCard = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioCardProps
>(({ className, value, label, icon, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      value={value}
      className={cn(
        "relative flex items-center p-4 rounded-xl cursor-pointer transition-all gap-4 w-full outline-none text-left",
        "border border-gray-800 bg-[#090612] text-gray-300 hover:border-gray-600",
        "data-[state=checked]:border-violet-600 data-[state=checked]:bg-violet-600/10 data-[state=checked]:text-white",
        "focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A10]",
        className
      )}
      {...props}
    >
      {icon && (
        <span className="text-xl flex-shrink-0 flex items-center justify-center">
          {icon}
        </span>
      )}

      <span className="font-medium text-sm flex-1 text-center">{label}</span>

      <RadioGroupPrimitive.Indicator className="absolute right-4 flex items-center justify-center w-5 h-5 rounded-full bg-violet-600 text-white shadow-[0_0_10px_rgba(124,58,237,0.5)]">
        <Check className="w-3.5 h-3.5" strokeWidth={3} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioCard.displayName = "RadioCard";

export const DashedActionCard = ({
  onClick,
  label,
}: {
  onClick: () => void;
  label: string;
}) => (
  <button
    type="button"
    onClick={onClick}
    className="relative flex items-center justify-center p-4 rounded-xl cursor-pointer transition-all w-full outline-none border border-dashed border-gray-700 bg-[#090612] text-gray-400 hover:border-gray-500 hover:text-white focus-visible:ring-2 focus-visible:ring-violet-600"
  >
    <span className="font-medium text-sm">{label}</span>
  </button>
);