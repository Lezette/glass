import React from 'react';
import hero from '../../../assets/hero.png';

const Hero = () => {
    return(
        <div className="h-screen relative">
            <div className="h-screen md:w-4/12 w-full md:mx-auto sm:ml-24">
                <img src={hero} alt=" " className="h-full" />
            </div>
            <div className="absolute z-20 top-0 left-0 w-1/7 blur h-screen flex items-center">
                <div className="w-7/12 mx-auto">
                <h2 className="md:text-6xl sm:text-3xl text-xl sm:pb-10 pb-7">One Life - see it well</h2>
                <p className="md:text-3xl text-lg sm:pb-10 pb-7">Reliable brand that consumers have come to love</p>
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10">
                    <div className="bg-gradient-to-br from-red-300 to-yellow-300 md:px-16 py-4 text-center text-lg font-extralight">Shop Now</div>
                    <div className="py-4 text-lg font-extralight grid grid-cols-3 gap-2">
                        <p className="text-right col-span-2">Discover the brand</p> 
                        <span className="">&rarr;</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;