import HeaderBar from "./components/headerbar/HeaderBar";
import Sidebar from "./components/sidebar/Sidebar";
import { Outlet, useLocation } from "react-router";

const MainLayout = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  return (
    <div className="flex bg-slate-900 h-dvh w-dvw">
      <Sidebar />
      <div className="flex flex-col flex-1 h-full">
        {!isHome && <HeaderBar />}
        <div className="p-10 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
