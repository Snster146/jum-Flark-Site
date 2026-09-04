import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
    return (
        <div className ='text-white'>
        
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center '> 
                <p className='text-green-400 font-bold p-2 md:text-3xl sm:text-xl text-l'>Jum Flark</p>
                <h1 className='md:text-4xl sm:2xl text:1xl font-bold md:py-4'>Explore the fascinating life of the pig icon Jum Flark</h1>
                
                <div className='display:flex justify-center items-center md:text-3xl sm:text-xl text-l font-bold'>
                    {/* <p>Adventures, Crime, tales </p> */}
                    <ReactTyped  strings={['Adventures', 'Crime', 'tales']} typeSpeed={120} backSpeed={140} loop/>
                </div>
                
                <div>
                    <button className='mt-5 bg-transparent hover:bg-green-600 text-green-400 font-semibold hover:text-white py-2 px-4 border border-green-600 hover:border-transparent rounded-md md:text-xl sm:text-m  text-s '>
                        Explore
                    </button>
                    
                </div>


            </div>
        </div>
    )

}

export default Hero