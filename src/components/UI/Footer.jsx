import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faPinterestP, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return(
        <div className="mt-18 p-12 grid lg:grid-cols-5 grid-cols-1 gap-10 tracking-wider">
           <div className="lg:col-span-2 grid sm:grid-cols-2">
            <div className="px-14">
                <h6 className="font-medium text-3xl pb-10">MENU</h6>
                <ul className="font-medium text-lg">
                    <li className="pb-3"> <a href="/">About</a></li>
                    <li className="pb-3"> <a href="/">Sunglasses</a></li>
                    <li className="pb-3"> <a href="/">Eyeglasses</a></li>
                    <li className="pb-3"> <a href="/">Eye Exam</a></li>
                    <li className="pb-3"> <a href="/">Profle</a></li>
                    <li className="pb-3"> <a href="/">Search</a></li>
                </ul>
            </div>
            <div className="px-14">
                <h6 className="font-medium text-3xl pb-10">ABOUT</h6>
                <ul className="font-medium text-lg">
                    <li className="pb-3"><a href="/">Our Concept</a></li>
                    <li className="pb-3"><a href="/">FAQ</a></li>
                    <li className="pb-3"><a href="/">Return Policies</a></li>
                    <li className="pb-3"><a href="/">Contact</a></li>
                </ul>
            </div>
           </div>
           <div className="lg:px-14 px-9 border-l border-r border-gray-400">
           <h6 className="font-medium text-3xl pb-10">CONTACT US</h6>
                <ul className="font-medium text-lg text-center">
                    <li className="pb-3">0184 60 00 02(No Taxes)</li>
                    <li className="pb-10">Mon - Fri 10:00 - 19:00</li>

                    <li className="pb-3">Helloglasses@gmail.com</li>

                    <li className="pt-5 text-4xl">
                        <ul className="grid grid-cols-4 gap-5">
                            <li><a href="/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faPinterestP} /></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faYoutube} /></a></li>
                        </ul>
                    </li>
                </ul>
           </div>
           <div className="px-14 lg:col-span-2">
            <h6 className="font-medium text-3xl pb-10">NEWSLETTER</h6>
            <div className="mt-9">
             <p className="mb-12">Get news about our promotions and best rates</p>

             <div className="border-b-4 border-gray-700 p-1 flex justify-between mb-6">
                <input placeholder="Your e-mail" type="email" className="border-none w-8/12 focus:outline-none placeholder-gray-800" />
                <button className="text-2xl"><FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
            </div>

            <p className="text-lg">
               &copy;{year} Glass - All Rights Reserved
            </p>
            </div>
           </div>
        </div>
    )
}

export default Footer;