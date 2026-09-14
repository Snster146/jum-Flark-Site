import React from "react";
import { FaYoutube } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSearch } from "react-icons/md";
import jumtubeImg from "../assets/jumtube.png";
import thumbnail1 from "../assets/thumbnail-1.jpeg";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineMicrophone } from "react-icons/hi";
import { GoPlus } from "react-icons/go";

const Youtube =()=>{
    return(


        <div className='text-black w-full h-screen min-h-[1280px] bg-white'>
            <div className=" border-2  w-full mx-auto h-[5%] flex items-center gap-2">
                <GiHamburgerMenu className="ml-10 mr-5"size={25}/>
                <img className="w-[50px] h-[50px] object-contain" src={jumtubeImg} alt="FlarkTube"/>
                <p className="text-black font-bold text-2xl">FlarkTube</p>

                <div id="search-bar" className="hidden md:flex items-center gap-2 border rounded-full px-4 py-2 w-[40%] mx-auto justify-between">
                    <input type="text" placeholder="Search" className="outline-none text-black placeholder-gray-500"/>
                    <MdSearch className="text-gray-600" size={20}/>

                </div>

                <div id="search-icon" className="flex md:hidden items-center gap-2 mx-auto">
                    <MdSearch className="text-black" size={35}/>
                
                </div>

                <div className="flex items-center mr-10 ">
                    <div className="flex items-center ml-5 border-2 p-3 rounded-full bg-gray-200">
                        <HiOutlineMicrophone className="text-black" size={20} />
                    </div>

                    <div className=" flex items-center ml-5 border-2 p-3 rounded-full bg-gray-200">
                        <GoPlus className="text-black" size={20}/>
                        <p >Create</p>
                    </div>
                    
                    <div className=" ml-5 w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <p className="text-white font-bold text-sm">JF</p>
                        </div>


                </div>
                


            </div>





            <div className="w-screen h-[5%] flex items-center">

                <ul className="flex justify-center gap-4 mx-auto items-center">
                    <li className="px-4 py-2 border border-black rounded bg-black rounded-2xl"><p className="text-white">All</p></li>
                    <li className="px-4 py-2 border rounded bg-gray-100 rounded-2xl" ><p>Music</p></li>
                    <li className="px-4 py-2 border rounded bg-gray-100 rounded-2xl"><p>Gaming</p></li>
                    <li className="px-4 py-2 border rounded bg-gray-100 rounded-2xl" ><p>Pigs</p></li>
                    <li className="px-4 py-2 border rounded bg-gray-100 rounded-2xl"><p>Animals</p></li>
                    <li className="px-4 py-2 border rounded bg-gray-100 rounded-2xl"><p>Fish</p></li>

                </ul>
            </div>
            <div className=" sm:grid grid-cols-3 gap-4 ml-3 mr-5 ">
                    
                <div className="">

                    <img src={thumbnail1} alt="thumbnail" className=" md:h-64 w-full  rounded-3xl "></img>
                    
                    <div className=" mt-5 flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <p className="text-white font-bold text-sm">JF</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold">Jum Flark Arduino Tutorial</p>
                            <p className="text-gray-500 text-sm">JumTeaches 10m 9 yr ago</p>
                        </div>
                    </div>
                </div>
                   
                    <div className="">

                    <img src={thumbnail1} alt="thumbnail" className=" md:h-64 w-full  rounded-3xl "></img>
                    
                    <div className=" mt-5 flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <p className="text-white font-bold text-sm">JF</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold">Jum Flark Arduino Tutorial</p>
                            <p className="text-gray-500 text-sm">JumTeaches 10m 9 yr ago</p>
                        </div>
                    </div>
                </div>


                <div className="">

                    <img src={thumbnail1} alt="thumbnail" className=" md:h-64 w-full  rounded-3xl "></img>
                    
                    <div className=" mt-5 flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <p className="text-white font-bold text-sm">JF</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold">Jum Flark Arduino Tutorial</p>
                            <p className="text-gray-500 text-sm">JumTeaches 10m 9 yr ago</p>
                        </div>
                    </div>
                </div>




            </div>
           


            {/* <div className="w-[40%] border-2 border-black h-[95%] "> 
                <div class className=" text-xl mt-2">
                    <ul className="align-center ">
                        <li className="flex items-center justify-between gap-2 border-2 border-y-2 rounded mx-2"><TiHome /><p className=" flex-1 ml-10  ">Home</p></li>
                        <li className="flex items-center gap-2 mt-2 border-2 border-y-2 rounded mx-2"> <SiYoutubeshorts /> <p className=" flex-1 ml-10  rounded mx-2">Shorts</p></li>
                    </ul>
                </div>
                <p>Subscriptions</p>
                <ul className="ml-20">
                    <li>FlarkGaming</li>
                    <li>FlarkVlogs</li>
                </ul>

            </div> */}

            
        </div>

    )


    

};

export default Youtube;