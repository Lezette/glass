import React from 'react';
import Navbar from '../../UI/Navbar';
import Footer from '../../UI/Footer';
import Hero from './Hero';
import Intro from './Intro';
import Shop from './Shop';

const Home = () => {
    return(
        <>
        <div className="bg-primary text-white h-screen">
        <Navbar />
        <Hero />
        </div>
        <Intro />
        <Shop />
        <Footer />
        </>
    )
}

export default Home;