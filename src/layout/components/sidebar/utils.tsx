import type { Variants } from "motion/react";
import type { ILinkButton } from "./type";
import { MdOutlineDashboard, MdOutlineShoppingCart } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { LuUsersRound, LuMusic4 } from "react-icons/lu";

export const sideBarVariants: Variants = {
  hidden: {
    width: "auto",
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
  visible: {
    width: "18rem",
    transition: {
      duration: 0.3,
      when: "beforeChildren",
    },
  },
};
export const navLinkVariants: Variants = {
  hidden: {
    display: "none",
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
  visible: {
    display: "block",
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
};

export const accountVariants: Variants = {
  hidden: {
    display: "none",
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
  visible: {
    display: "flex",
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
};

export const linkList: ILinkButton[] = [
  {
    to: "/",
    icon: <MdOutlineDashboard className="text-white size-8" />,
    children: "Dashboard",
  },
  {
    to: "/profile",
    icon: <LuUsersRound className="text-white size-8" />,
    children: "Profile",
  },
  {
    to: "/business-card",
    icon: <FaRegAddressCard className="text-white size-8" />,
    children: "Business Card",
  },
  {
    to: "/online-shop",
    icon: <MdOutlineShoppingCart className="text-white size-8" />,
    children: "Online Shop",
  },
  {
    to: "/music-player",
    icon: <LuMusic4 className="text-white size-8" />,
    children: "Music Player",
  },
];
