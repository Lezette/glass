import React from 'react';

const Intro = () => {
    return(
        <div className="my-28 px-10">
           <p className="text-center leading-relaxed text-4xl font-light md:w-7/12 mx-auto w-full">
             Buying eyewear sould leave you happy and good-looking, with money in your pocket. Glasses, Sunglasses and contacts-we've got your eyes covered.
           </p>
           <div className="grid grid-cols-1 md:grid-cols-2 md:w-11/12 mx-auto w-full gap-6 my-10 md:my-28">
                <div className="md:h-lg">
                    <img src="https://source.unsplash.com/Dm8eBJD3fZE" className="h-full w-full" alt="Man on glasess" />
                </div>
                <div className="md:h-lg">
                    <div className="h-3/4">
                    <img src="https://source.unsplash.com/RJrCj87zPJc" className="h-full w-full" alt="Man on glasess"  />
                    </div>
                    <div className="pt-5">
                        <h5 className="text-3xl leading-relaxed tracking-wide">Christmas sale!</h5>
                        <p className="font-light text-xl leading-relaxed tracking-widest">Save 25% when purchasing a glasses by the end of December 2020</p>

                        <div className="lg:w-7/12 grid grid-cols-2 gap-5 mt-4">
                            <button className="bg-gradient-to-br from-red-300 to-yellow-300 md:px-16 py-4 text-center text-lg font-extralight tracking-wide">Shop men</button>
                            <button className="bg-gradient-to-br from-purple-100 to-purple-300 md:px-16 py-4 text-center text-lg font-extralight tracking-wide">Shop women</button>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Intro;