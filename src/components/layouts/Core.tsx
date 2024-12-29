import { Navigate, Outlet } from "react-router-dom";
// import { SideNav } from "@/components";
// import { MenuItems } from "@/constants/menuItems";
import { COALLY_API } from "@/config/fetch";
import { useSessionStore } from "@/store/session";
import { SideNav } from "../Sidenav";

export const CoreLayout = () => {
    const { token } = useSessionStore();
    COALLY_API.setToken({ token });

    if (!token) return <Navigate to="/" />;

    return (
        <div className="flex p-5 h-screen space-x-3">
            <SideNav />
            <Outlet />
        </div>
    );
};
