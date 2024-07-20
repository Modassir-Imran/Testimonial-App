import React from "react";
//import reviews from "../data";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";



const Card = (props) => {
    let reviews = props.reviews;
    return (
        <div className="flex flex-col relative  m-8">
            <div className='absolute left-[50%] translate-x-[-50%] top-[-120px] z-[10] mx-auto md:left-16'>
                <img 
                className="aspect-square rounded-full w-[140px] h-[140px] z-[25]"
                src={reviews.image} alt="mode"/>
                <div className="absolute rounded-full w-[140px] h-[140px] bg-violet-500 z-[-10] top-[-6px] left-[10px]">
                </div>
            </div>

            <div className="text-center mt-7">
                <p className="tracking-wide	 font-bold text-2xl capitalize">{reviews.name} </p>
                <p className="font-bold text-violet-300 uppercase text-sm">{reviews.job} </p>

            </div>

            <div className="text-center mt-7">
            </div>


            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteLeft />
            </div>

            <div className="font-semibold text-center mt-4 text-slate-500">
                {
                    reviews.text.length >220 ?
                    (reviews.text.substr(0,220) + "..."):
                    ( reviews.text)
                }
            </div>

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteRight />
            </div>

           
        </div>
    )
}

export default Card;