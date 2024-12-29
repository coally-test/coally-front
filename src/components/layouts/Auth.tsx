import { Outlet } from "react-router-dom";
import { CustomParticles } from "../Particles";

export const AuthLayout = () => {
    return (
        <div >
            <CustomParticles />
            <div className="z-10 w-full h-screen">
                <Outlet />
            </div>
        </div>
    );
};
