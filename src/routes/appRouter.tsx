import { createBrowserRouter } from "react-router";
import MainLayout from "@/layout/MainLayout";
import Dashboard from "@/pages/dashboard/Dashboard";
import Profile from "@/pages/profile/Profile";
import BusinessCard from "@/pages/business-card/BusinessCard";
import MusicPlayer from "@/pages/music-player/MusicPlayer";
import OnlineShop from "@/pages/online-shop/OnlineShop";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Dashboard,
        handle: {
          crumb: () => "Dashboard",
        },
      },
      {
        path: "profile",
        Component: Profile,
        handle: {
          crumb: () => "Profile",
        },
      },
      {
        path: "business-card",
        Component: BusinessCard,
        handle: {
          crumb: () => "Business Card",
        },
      },
      {
        path: "online-shop",
        Component: OnlineShop,
        handle: {
          crumb: () => "Online Shop",
        },
      },
      {
        path: "music-player",
        Component: MusicPlayer,
        handle: {
          crumb: () => "Music Player",
        },
      },
    ],
  },
]);
