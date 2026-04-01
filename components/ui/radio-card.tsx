import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRadioGroupDeselect } from "@/components/ui/radio-group";

interface RadioCardProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  label: string;
  icon?: React.ReactNode;
  groupValue?: string;
  onDeselect?: () => void;
}

export const RadioCard = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioCardProps
>(({ className, value, label, icon, groupValue: groupValueProp, onDeselect, onClick, ...props }, ref) => {
  const deselectCtx = useRadioGroupDeselect();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const gv = deselectCtx?.groupValue ?? groupValueProp ?? "";
    const clear = deselectCtx?.onClearSelection ?? onDeselect;
    if (value != null && value !== "" && gv === value) {
      clear?.();
    }
    onClick?.(e);
  };

  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      value={value}
      onClick={handleClick}
      className={cn(
        "relative flex items-center p-4 rounded-xl cursor-pointer transition-all w-full outline-none text-left",
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

      <RadioGroupPrimitive.Indicator className="absolute top-1.5 right-1.5 flex items-center justify-center w-4 h-4 rounded-full bg-violet-600 text-white shadow-[0_0_10px_rgba(124,58,237,0.5)]">
        <Check className="w-2.5 h-2.5" strokeWidth={3} />
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