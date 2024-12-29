import { RecursivePartial, IOptions } from "node_modules/tsparticles-engine/types/export-types";

export const ParticlesConfig: RecursivePartial<IOptions> = {

    background: {

        color: {

            value: "#0d47a1"

        }

    },

    fpsLimit: 60,

    interactivity: {

        events: {

            onClick: {

                enable: false,

                mode: "push"

            },

            onHover: {

                enable: false,

                mode: "repulse"

            },

            resize: true

        },

        modes: {

            push: {

                quantity: 4

            },

            repulse: {

                distance: 100,

                duration: 0.4

            }

        }

    },

    particles: {

        color: {

            value: "#ffffff"

        },

        links: {

            color: "#ffffff",

            distance: 150,

            enable: true,

            opacity: 0.5,

            width: 1

        },

        collisions: {

            enable: true

        },

        move: {


            enable: true,

            outMode: "bounce",

            random: false,

            speed: 1,

            straight: false

        },

        number: {

            density: {

                enable: true,

                area: 2000

            },

            value: 80

        },

        opacity: {

            value: 0.5

        },

        shape: {

            type: "circle"

        },

        size: {

            random: true,

            value: 5

        }

    },

    detectRetina: true

};
