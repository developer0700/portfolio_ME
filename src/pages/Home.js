import React from 'react';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';


const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Services />
            <Projects />
            <Experience />
            <Education />
            <Clients />
            <Cta/>
            <Footer />
        </>

    )
}

export default Home;

