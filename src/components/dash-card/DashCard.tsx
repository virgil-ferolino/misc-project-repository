import { cn } from "@/libs/utils";
import type { ComponentProps } from "react";

type TDashCard = {
  cardStyle?: "card-border" | "card-dash";
} & ComponentProps<"div">;

const DashCard = (props: TDashCard) => {
  const { cardStyle = "card-border", children, className, ...rest } = props;
  return (
    <div
      className={cn(
        "card bg-slate-600 shadow-sm shadow-white/50 overflow-hidden",
        className,
        cardStyle,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

const DashCardTitle = (props: ComponentProps<"div">) => {
  const { children, className, ...rest } = props;
  return (
    <div className={cn("card-title", className)} {...rest}>
      {children}
    </div>
  );
};

const DashCardBody = (props: ComponentProps<"div">) => {
  const { children, className, ...rest } = props;
  return (
    <div className={cn("card-body", className)} {...rest}>
      {children}
    </div>
  );
};

const DashCardAction = (props: ComponentProps<"div">) => {
  const { children, className, ...rest } = props;
  return (
    <div className={cn("card-actions", className)} {...rest}>
      {children}
    </div>
  );
};

export { DashCard, DashCardTitle, DashCardBody, DashCardAction };
