import type { ILinkButton } from "./type";

import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { AnimatePresence, motion } from "motion/react";
import { NavLink } from "react-router";

import ProfileImage from "@/assets/profile-image.jpg";
import { cn } from "@/libs/utils";
import {
  navLinkVariants,
  sideBarVariants,
  linkList,
  accountVariants,
} from "./utils";

const LinkButton = (props: ILinkButton) => {
  const { icon, children, ...rest } = props;

  const isActive = ({ isActive }: { isActive: boolean }) => {
    return cn(
      "flex w-full gap-5 p-3 text-white items-center hover:bg-white/10",
      isActive && "bg-white/10",
    );
  };

  return (
    <NavLink className={isActive} {...rest}>
      {icon}
      <motion.p variants={navLinkVariants} className={cn("text-xl uppercase")}>
        {children}
      </motion.p>
    </NavLink>
  );
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const menu = () => {
    return (
      <div
        className={cn(
          "relative w-full flex h-[10dvh] gap-1 items-center bg-slate-700",
        )}
      >
        <button
          className="cursor-pointer hover:bg-white/10 p-3"
          onClick={() => setOpen(!open)}
        >
          <MdMenu className="text-white size-8" />
        </button>
        <motion.p
          variants={navLinkVariants}
          className={cn("text-white text-3xl")}
        >
          MY WEB APP
        </motion.p>
      </div>
    );
  };

  const navLinks = () => {
    return (
      <div className={cn("flex flex-col pt-10 h-[60dvh]")}>
        {linkList.map((link, index) => (
          <LinkButton key={index} to={link.to} icon={link.icon}>
            {link.children}
          </LinkButton>
        ))}
      </div>
    );
  };

  const accountDetails = () => {
    return (
      <motion.div
        variants={accountVariants}
        className={"flex-1 h-[30dvh] flex flex-col items-center justify-center"}
      >
        <figure className="w-30 h-30 mb-5 border-2 rounded-full overflow-hidden border-white">
          <img
            src={ProfileImage}
            alt="Profile"
            className="h-full w-full object-cover object-center"
          />
        </figure>

        <p className="text-xl">Virgil Anthony B Ferolino</p>
        <p className="text-base text-slate-400">virgil.ferolino@example.com</p>
      </motion.div>
    );
  };

  return (
    <AnimatePresence>
      <motion.aside
        variants={sideBarVariants}
        initial="hidden"
        animate={open ? "visible" : "hidden"}
        exit="exit"
        className={cn("w-72 h-full bg-slate-800")}
      >
        {menu()}
        {navLinks()}
        {accountDetails()}
      </motion.aside>
    </AnimatePresence>
  );
};

export default Sidebar;
