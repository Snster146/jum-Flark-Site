import React from 'react'

const Cards =()=>{
    return (

        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>

            {/* bronze subscription */}
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src="" alt="this is an image"></img>
                    <h2 className='tex-2xl font-bold text-center py-8'>Bronze subscription</h2>
                    <p className='text-center text-4xl font-bold'>£9.99/mo</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>you get this</p>
                        <p className='py-2 border-b mx-8'>you get this</p>
                        <p className='py-2 border-b mx-8'>you get this</p>
                    </div>
                    <button className='mt-5  hover:bg-green-700 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-600 hover:border-transparent rounded-md md:text-xl sm:text-m  text-s mb-5  mx-auto md:mx-0 p-3'>
                        Start trial
                    </button>
                   
                </div>
                {/* silver subscription */}

                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src="" alt="this is an image"></img>
                    <h2 className='tex-2xl font-bold text-center py-8'>Silver subscription</h2>
                    <p className='text-center text-4xl font-bold'>£14.99/mo</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>you get this</p>
                        <p className='py-2 border-b mx-8'>you get this</p>
                        <p className='py-2 border-b mx-8'>you get this</p>
                    </div>
                    <button className='mt-5  hover:bg-green-700 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-600 hover:border-transparent rounded-md md:text-xl sm:text-m  text-s mb-5  mx-auto md:mx-0 p-3'>
                        Start trial
                    </button>
                   
                </div>

                {/* gold subscription */}
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src="" alt="this is an image"></img>
                    <h2 className='tex-2xl font-bold text-center py-8'>Gold subscription</h2>
                    <p className='text-center text-4xl font-bold'>£29.99/mo</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>you get this</p>
                        <p className='py-2 border-b mx-8'>you get this</p>
                        <p className='py-2 border-b mx-8'>you get this</p>
                    </div>
                    <button className='mt-5  hover:bg-green-700 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-600 hover:border-transparent rounded-md md:text-xl sm:text-m  text-s mb-5  mx-auto md:mx-0 p-3'>
                        Start trial
                    </button>
                   
                </div>
            </div>
        </div>
    )
}

export default Cards