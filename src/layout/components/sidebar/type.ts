import type { ReactNode } from "react";
import type { LinkProps } from "react-router";

export interface ILinkButton extends LinkProps {
  icon: ReactNode;
}
