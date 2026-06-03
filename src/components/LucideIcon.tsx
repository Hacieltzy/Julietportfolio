import React from "react";
import * as Icons from "lucide-react";

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export const LucideIcon: React.FC<LucideIconProps> = ({
  name,
  className = "",
  size,
  strokeWidth,
}) => {
  // Resolve component dynamically
  const IconComponent = (Icons as any)[name];

  if (!IconComponent) {
    // Return a fallback icon (e.g., HelpCircle) if the icon does not exist
    const Fallback = Icons.HelpCircle;
    return <Fallback className={className} size={size} strokeWidth={strokeWidth} />;
  }

  return <IconComponent className={className} size={size} strokeWidth={strokeWidth} />;
};

export default LucideIcon;
