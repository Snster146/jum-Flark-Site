import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
    return (
        <div className ='text-white'>
        
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center '> 
                <p className='text-black font-bold p-2 md:text-3xl sm:text-xl text-l'>Pilot Section</p>
                <h1 className='md:text-4xl sm:2xl text:1xl font-bold md:py-4'>Silly Jum Animation Zone</h1>
                
                <div className='display:flex justify-center items-center md:text-3xl sm:text-xl text-l font-bold'>
                    {/* <p>It's not made yet, But I swear it'll be sick, So sick, Literally so sick, I swear... </p> */}
                    <ReactTyped  strings={['It\'s not made yet', 'But I swear it\'ll be sick', 'So sick, literally so sick, I swear...']} typeSpeed={60} backSpeed={30} loop/>
                </div>
    


            </div>
        </div>
    )

}

export default Hero