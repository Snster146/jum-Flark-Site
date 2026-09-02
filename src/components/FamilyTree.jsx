import React from 'react'
import HistoricPork from '../assets/history-pork-1.jpeg'


const FamilyTree = () =>{
    return(
        <div className='w-full bg-white  px-4'>

            <div clasName='mx-w-[1240px] mx-auto grid md:grid-cols-2 '>
                <img className=' w-[500px] mx-auto object-scale-down ' src={HistoricPork} alt="historic pork" />
               
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-green-600 font-bold md:text-4xl sm:text-3xl'>The Flark family tree</p>
                    <h1 className='mt-5 text-black font-bold sm:text-2xl text:1xl'>Learn more about the Flark family tree</h1>
                    <p className='mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.
                    </p>
                     <button className='mt-5  hover:bg-green-700 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-600 hover:border-transparent rounded-md md:text-xl sm:text-m  text-s mb-5  mx-auto md:mx-0 p-3'>
                        Learn More
                    </button>
                </div>
                
            </div>

        </div>


    )

}

export default FamilyTree