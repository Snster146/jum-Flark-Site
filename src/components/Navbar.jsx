import React,{useState} from 'react'
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import logo from "../assets/logo.png";


const Navbar = () => {
    const [nav,setNav]=useState(false);
    
    const handleNav = () =>{
        setNav(!nav)
    }

    return (
        <div className='flex justify-between  items-center h-24 max-width-{1240px} mx-auto px-4 font-bold bg-[#fff8f7] rounded-lg'>
            <a href="/"> <img className='h-16 w-16 m-4 ease-in-out duration-700' alt="logo" src={logo}></img> </a>
    
            
<ul className='hidden md:flex [&>li>a]:block [&>li>a]:whitespace-nowrap [&>li>a:hover]:text-[#AD7952]'>
      <li className='p-4'>
    <a href='https://www.youtube.com/watch?v=zYdkWdYiU4w'>
      Flark Gallery
    </a>
  </li>
  <li className='p-4'>
    <a href='/wordle'>
      Flark Dupes
    </a>
  </li>
  <li className='p-4'>
    <a href='https://www.youtube.com/watch?v=zYdkWdYiU4w'>
      Documentation
    </a>
  </li>
  <li className='p-4'>
    <a
      href='https://www.youtube.com/watch?v=zYdkWdYiU4w'>
      Have you Found Jum?
    </a>
  </li>
</ul>





            <div onClick={handleNav} className='block md:hidden absolute right-5 '>
                {nav ? <AiOutlineClose className='sm:mr-5' size={20}/> :<> <AiOutlineMenu className='sm:mr-5' size={20} />   </>}
                
            </div>

            <div className={nav? 'fixed left-0 top-[15%] w-[35%]  ease-in-out duration-700 md:hidden bg-[#fff8f7]/50' : 'fixed -left-96 ' }>
                {/* <h1 className='w-full text-3xl font-bold text-green-500 m-4 block md:hidden'>Jum flark</h1> */}

                <ul className=' uppercase ml-1 [&>li>a:hover]:text-[#AD7952]'>
                  <li className='p-4 border-b border-[#AD7952] '>
                    <a href='https://www.youtube.com/watch?v=zYdkWdYiU4w'>Flark Gallery</a>
                  </li>
                  <li className='p-4 border-b border-[#AD7952]'>
                    <a href='https://www.youtube.com/watch?v=zYdkWdYiU4w'>Flark Dupes</a>
                  </li>
                  <li className='p-4 border-b border-[#AD7952]'>
                    <a href='https://www.youtube.com/watch?v=zYdkWdYiU4w'>Documentation</a>
                  </li>
                  <li className='p-4 border-b border-[#AD7952]'>
                    <a href='https://www.youtube.com/watch?v=zYdkWdYiU4w'>Have you Found Jum?</a>
                  </li>
                </ul>
                
            </div>


        </div>
    )
}
export default Navbar;