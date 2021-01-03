import React from 'react';
import Navbar from '../../UI/Navbar';
import Hero from './Hero';
import Intro from './Intro';

const Home = () => {
    return(
        <>
        <div className="bg-primary text-white h-screen">
        <Navbar />
        <Hero />
        </div>
        <Intro />
        </>
    )
}

export default Home;