import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ContainerComponentType = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerComponentType) => {
  return (
    <div className={cn("mx-auto max-w-6xl xl:max-w-7xl px-8", className)}>
      {children}
    </div>
  );
};
export default Container;
