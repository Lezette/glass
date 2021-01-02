import React from 'react';
import Navbar from '../../UI/Navbar';
import Hero from './Hero';

const Home = () => {
    return(
        <div className="bg-primary text-white h-screen">
        <Navbar />
        <Hero />
        </div>
    )
}

export default Home;