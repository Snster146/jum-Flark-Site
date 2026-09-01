import React,{useState} from 'react'
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
    const [nav,setNav]=useState(false);
    
    const handleNav = () =>{
        setNav(!nav)
    }


    return (
        <div className='flex justify-between items-center h-24 max-width-{1240px} mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-green-500  hidden md:flex'>Jum flark</h1>
            
            <ul className='hidden md:flex ' >
                <li className='p-4'>Home</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
                <li className='p-4'>FindJum</li>
            </ul>
            
            <div onClick={handleNav} className='block md:hidden absolute right-5 '>
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}  />}
                
            </div>

            <div className={!nav? 'fixed left-0 top-0 w-[30%] h-full border-r border-r-green-500 bg-[#0003000] ease-in-out duration-700 md:hidden' : 'fixed -left-96 ' }>
                <h1 className='w-full text-3xl font-bold text-green-500 m-4 block md:hidden'>Jum flark</h1>

                <ul className='pt-24 uppercase'>
                    <li className='p-4 border-b border-green-500 '>Home</li>
                    <li className='p-4 border-b border-green-500'>About</li>
                    <li className='p-4 border-b border-green-500'>Contact</li>
                    <li className='p-4 '>FindJum</li>
                </ul>
                
            </div>


        </div>
    )
}
export default Navbar;