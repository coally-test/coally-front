import { Navigate, Outlet } from "react-router-dom";
// import { SideNav } from "@/components";
// import { MenuItems } from "@/constants/menuItems";
import { COALLY_API } from "@/config/fetch";
import { useSessionStore } from "@/store/session";

export const CoreLayout = () => {
    const { token } = useSessionStore();
    COALLY_API.setToken({ token });

    if (!token) return <Navigate to="/" />;

    return (
        <div className="flex px-1 py-2 h-screen space-x-3">
            {/* <SideNav items={MenuItems} /> */}
            <div className="bg-gray-800 w-full rounded-lg">
                <Outlet />
            </div>
        </div>
    );
};
