import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Link, useNavigate } from 'react-router-dom';
import AnimatedText from 'react-animated-text-content';
import './Home.scss';
import ParticlesBackground from '../../Particle/ParticlesBackground';

const Home = () => {
    const navigate = useNavigate();
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    const toSignUp = () => {
        navigate('/Login', { state: { value: false } });
    }
    const toSignIn = () => {
        navigate('/Login', { state: { value: true } });
    }

    return (

        <div className="nb-custom w-full bg-gradient-to-r from-indigo-800 via-cyan-500 to-indigo-800 min-h-screen c-mt">
            <div className="custom-contents flex flex-col items-center justify-center w-full pt-48">
                <div className="heading-wrapper ">
                    <AnimatedText
                        type="chars" // animate words or chars
                        animation={{
                            x: '200px',
                            y: '-20px',
                            scale: 1.1,
                            ease: 'ease-in-out',
                        }}
                        animationType="float"
                        interval={0.2}
                        duration={1}
                        tag="h1"
                        className="animated-paragraph lg:text-8xl md:text-7xl text-6xl font-bold text-white banner-text"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%"
                    >
                        TestOrg
                    </AnimatedText>
                </div>
                <div className="button-group-wrapper flex md:gap-72 pt-20">
                    <div className="button-wrapper pt-10">
                        <div onClick={() => {toSignUp()}} className="lg:text-xl sm:text-lg btn bg-transparent px-16 text-gray-300 hover:text-gray-100 hover:bg-cyan-800">Sign up</div>
                    </div>
                    <div className="button-wrapper pt-10">
                        <div onClick={() => { toSignIn() }} className="lg:text-xl sm:text-lg btn bg-transparent px-16 text-gray-300 hover:text-gray-100 hover:bg-cyan-800">Login</div>
                    </div>
                </div>
                <div className="paragraph-wrapper pt-20 px-2">
                    <p class="line-1 anim-typewriter text-2xl text-gray-300 font-semibold">
                        Test Org is created by lame coders
                    </p>
                </div>
            </div>

            <ParticlesBackground></ParticlesBackground>

        </div>



    );

};

export default Home;