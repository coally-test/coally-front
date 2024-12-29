import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { ParticlesConfig } from "@/constants/particles";
import { Engine } from "tsparticles-engine";


export const CustomParticles = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);


    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={ParticlesConfig}
            className="absolute top-0 left-0 w-full h-full -z-10"
        />
    );
};