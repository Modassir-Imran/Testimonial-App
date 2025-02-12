import React, { useState } from "react";
import Card from './Card';
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";


const Testimonial = (props) => {
    let reviews = props.reviews;

    const [index , setIndex] = useState(0);

    const leftClickHandler = () => {
        if(index-1 < 0 )
        {
            setIndex( reviews.length -1)
        }
        else{
            setIndex( index -1);
        }
    }
    const rightClickHandler = () => {
        if( index+1 >=   reviews.length){
            setIndex(0)
        }
        else{
            setIndex(index+1);
        }
    }
    const surpriseHandler = () =>{
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex (randomIndex);
    }
    return(
        <div className="w-[85vw] md:w-[700px]  bg-white flex flex-col justify-center 
            mt-28 lg:mt-10 p-19 transition-all duration-700 hover:shadow-xl rounded-md">
            <Card reviews = {reviews[index]} />

            <div className="flex text-3xl mt-1 gap-3 text-violet-400 font-bold mx-auto ">
                <button 
                onClick={leftClickHandler}
                className="cursor-pointer hover:text-violet-500 ">
                    <FiChevronLeft />
                </button>
                
                <button 
                onClick={rightClickHandler}
                className="cursor-pointer hover:text-violet-500">
                    <FiChevronRight />
                </button>
            </div>

            <div>
                <button 
                onClick={surpriseHandler}
                className="bg-violet-400 hover:bg-violet-500 transition-all duration-200
                    cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg my-6">
                    Surprise Me
                </button>
            </div>
        </div>
    )
}


export default Testimonial;