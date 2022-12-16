import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./config/particles-config";


const ParticlesBackground = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (

        <div className="nb-custom w-full bg-gradient-to-r from-indigo-800 via-cyan-500 to-indigo-800">
            <button className="btn btn-circle">Login</button>
            <div>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        fullScreen: {
                            enable: true,
                            zIndex: 1
                        },
                        detectRetina: false,
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: false,
                                    mode: "push"
                                },
                                onDiv: {
                                    elementId: "repulse-div",
                                    enable: false,
                                    mode: "repulse"
                                },
                                onHover: {
                                    enable: true,
                                    mode: "bubble",
                                    parallax: {
                                        enable: false,
                                        force: 2,
                                        smooth: 10
                                    }
                                },
                                resize: true
                            },
                            modes: {
                                bubble: {
                                    distance: 40,
                                    duration: 2,
                                    opacity: 8,
                                    size: 6,
                                    speed: 3
                                },
                                connect: {
                                    distance: 80,
                                    lineLinked: {
                                        opacity: 0.5
                                    },
                                    radius: 60
                                },
                                grab: {
                                    distance: 400,
                                    lineLinked: {
                                        opacity: 1
                                    }
                                },
                                push: {
                                    quantity: 4
                                },
                                remove: {
                                    quantity: 2
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4
                                },
                                slow: {
                                    active: false,
                                    radius: 0,
                                    factor: 1
                                }
                            }
                        },
                        particles: {
                            color: {
                                value: "#ffffff"
                            },
                            lineLinked: {
                                blink: false,
                                color: "#ffffff",
                                consent: false,
                                distance: 30,
                                enable: true,
                                opacity: 0.4,
                                width: 1
                            },
                            move: {
                                attract: {
                                    enable: false,
                                    rotate: {
                                        x: 600,
                                        y: 1200
                                    }
                                },
                                bounce: false,
                                direction: "none",
                                enable: true,
                                outMode: "bounce",
                                random: false,
                                speed: 1,
                                straight: false
                            },
                            number: {
                                density: {
                                    enable: false,
                                    area: 2000
                                },
                                limit: 0,
                                value: 400
                            },
                            opacity: {
                                animation: {
                                    enable: true,
                                    minimumValue: 0.05,
                                    speed: 2,
                                    sync: false
                                },
                                random: false,
                                value: 0.4
                            },
                            shape: {
                                type: "circle"
                            },
                            size: {
                                animation: {
                                    enable: false,
                                    minimumValue: 0.1,
                                    speed: 40,
                                    sync: false
                                },
                                random: true,
                                value: 1
                            }
                        },
                        polygon: {
                            draw: {
                                enable: true,
                                lineColor: "rgba(255,255,255,0.2)",
                                lineWidth: 0.5
                            },
                            enable: true,
                            move: {
                                radius: 10
                            },
                            inline: {
                                arrangement: "equidistant"
                            },
                            scale: 2,
                            type: "inline",
                            url: "https://particles.js.org/images/hollowknight.svg"
                        },
                        // background: {
                        //     color: "#000000",
                        //     // image: "",
                        //     // position: "50% 50%",
                        //     // repeat: "no-repeat",
                        //     size: "contain"
                        // }
                    }}
                >
                     <div>h1</div>
                </Particles>
            </div>
        </div>



    );
};

export default ParticlesBackground;

















// import React from 'react';
// import { Particles } from 'react-tsparticles';
// import particlesConfig from './config/particles-config';


// const ParticlesBackground = () => {

//     return (
//         <Particles params={particlesConfig}>

//         </Particles>

//     );
// };

// export default ParticlesBackground;