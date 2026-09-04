import React from 'react'

const NewsLetter =()=>{
    return(
        <div className='w-full py-16 text-white'>
            <div className='max-w-[1260px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                    <h1 className='md:text-4xl sm:text-2xl text-xl font-bold text-green-500 m-4'>Stay updated on Flark news</h1>
                    <p className='font-semibold m-4 my-0'>Sign up to out newsletter and stay up to date </p>
                </div>
                <div className='my-4'>
                    <div >
                        <input className="p-3 flex rounded-md text-black mx-4 mr-4 md:w-[60%] w-[80%]" type="email" placeholder="Enter Email" />
                        <button  className='mt-5 bg-transparent hover:bg-green-600 text-green-400 font-semibold hover:text-white py-2 px-4 border border-green-600 hover:border-transparent rounded-md md:text-xl sm:text-m  text-s ml-4 '>
                        Notify me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter