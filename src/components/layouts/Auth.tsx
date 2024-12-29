import { Navigate, Outlet } from "react-router-dom";
import { CustomParticles } from "../Particles";
import { useSessionStore } from "@/store/session";

export const AuthLayout = () => {
    const { token } = useSessionStore()

    if (token) return <Navigate to="/app" />
    return (
        <div>
            <CustomParticles />
            <div className="z-10 w-full h-screen">
                <Outlet />
            </div>
        </div>
    );
};
