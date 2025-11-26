"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { UtensilsCrossed, CalendarCheck } from "lucide-react";

// Gloria Food configuration
const GLORIA_FOOD_CONFIG = {
  cuid: "282c52e6-d4a9-4a64-96ea-8dbd56e40dd1",
  ruid: "15f3c4e8-239f-4391-86d5-0685b3c97e04",
};

interface GloriaFoodButtonProps {
  variant?: "order" | "reservation";
  size?: "sm" | "md" | "lg";
  className?: string;
  showIcon?: boolean;
  customText?: string;
  fullWidth?: boolean;
}

export function GloriaFoodButton({
  variant = "order",
  size = "md",
  className,
  showIcon = true,
  customText,
  fullWidth = false,
}: GloriaFoodButtonProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if Gloria Food script is already loaded
    const existingScript = document.querySelector('script[src*="ewm2.js"]');
    if (existingScript) {
      setIsLoaded(true);
      return;
    }

    // Load Gloria Food script
    const script = document.createElement("script");
    script.src = "https://www.fbgcdn.com/embedder/js/ewm2.js";
    script.async = true;
    script.defer = true;
    script.onload = () => setIsLoaded(true);
    document.body.appendChild(script);

    return () => {
      // Don't remove the script on unmount as other components might need it
    };
  }, []);

  const isReservation = variant === "reservation";
  const Icon = isReservation ? CalendarCheck : UtensilsCrossed;
  
  const defaultText = isReservation ? "Book a Table" : "Order Online";
  const buttonText = customText || defaultText;

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm gap-1.5",
    md: "px-4 py-2 text-base gap-2",
    lg: "px-6 py-3 text-lg gap-2.5",
  };

  const iconSizes = {
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  return (
    <span
      className={cn(
        "glf-button inline-flex items-center justify-center font-medium rounded-full cursor-pointer transition-all duration-300",
        "bg-primary text-primary-foreground hover:bg-primary/90",
        "shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
        sizeClasses[size],
        fullWidth && "w-full",
        isReservation && "reservation",
        !isLoaded && "opacity-70 pointer-events-none",
        className
      )}
      data-glf-cuid={GLORIA_FOOD_CONFIG.cuid}
      data-glf-ruid={GLORIA_FOOD_CONFIG.ruid}
      data-glf-reservation={isReservation ? "true" : undefined}
    >
      {showIcon && <Icon className={iconSizes[size]} />}
      {buttonText}
    </span>
  );
}

// Styled variants for specific use cases
export function GloriaFoodOrderButton({
  className,
  ...props
}: Omit<GloriaFoodButtonProps, "variant">) {
  return (
    <GloriaFoodButton
      variant="order"
      className={cn(
        "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0",
        className
      )}
      {...props}
    />
  );
}

export function GloriaFoodReservationButton({
  className,
  ...props
}: Omit<GloriaFoodButtonProps, "variant">) {
  return (
    <GloriaFoodButton
      variant="reservation"
      className={cn(
        "bg-accent text-accent-foreground hover:bg-accent/90",
        className
      )}
      {...props}
    />
  );
}

// Header-specific button (smaller, rounded)
export function GloriaFoodHeaderButton({
  className,
  ...props
}: Omit<GloriaFoodButtonProps, "variant" | "size">) {
  return (
    <GloriaFoodButton
      variant="reservation"
      size="sm"
      className={cn(
        "bg-accent text-accent-foreground hover:bg-accent/90",
        className
      )}
      customText="Reserve"
      {...props}
    />
  );
}

// CTA Section buttons - larger with more prominent styling
export function GloriaFoodCTAButtons({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col sm:flex-row gap-4 justify-center", className)}>
      <GloriaFoodOrderButton 
        size="lg" 
        customText="Order Online"
        className="shadow-lg shadow-amber-500/25"
      />
      <GloriaFoodReservationButton 
        size="lg" 
        customText="Book a Table"
        className="shadow-lg shadow-primary/25"
      />
    </div>
  );
}

