import React from 'react';
import frame1 from '../../../assets/glasses2.png';
import frame2 from '../../../assets/glasses3.png';
import frame3 from '../../../assets/glasses1.png';

const Shop = () => {
    return(
        <div className="my-28 px-10 md:w-11/12 mx-auto w-full">
           <h5 className="leading-relaxed text-4xl">
             Shop for our famous eyeglasses
           </h5>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
               <div className="">
                   <div className="h-80">
                    <img src={frame1} className="h-full" alt="Glasses London" />
                   </div>
                   <div className="sm:px-14 text-center sm:text-left">
                        <p className="text-5xl">London</p>
                        <small className="text-lg">
                            100.00&isin;&nbsp;
                            <del>250.00&isin;</del>
                        </small>
                   </div>
               </div>
               <div className="">
                   <div className="h-80">
                    <img src={frame2} className="h-full" alt="Glasses London" />
                   </div>
                   <div className="sm:px-14 text-center sm:text-left">
                        <p className="text-5xl">New York</p>
                        <small className="text-lg">
                            100.00&isin;&nbsp;
                            <del>250.00&isin;</del>
                        </small>
                   </div>
               </div>
               
               <div className="">
                   <div className="h-80">
                    <img src={frame3} className="h-full" alt="Glasses London" />
                   </div>
                   <div className="sm:px-14 text-center sm:text-left">
                        <p className="text-5xl">Felix</p>
                        <small className="text-lg">
                            100.00&isin;&nbsp;
                            <del>250.00&isin;</del>
                        </small>
                   </div>
               </div>
           </div>
           <div className="text-center my-20">
            <button className="bg-gradient-to-br from-red-300 to-yellow-300 px-16 py-4 text-center text-lg font-extralight tracking-wide">Shop Now</button>
           </div>
        </div>
    )
}

export default Shop;