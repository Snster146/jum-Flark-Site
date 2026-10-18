import React from "react";

import { MdSearch } from "react-icons/md";
import jumtubeImg from "../assets/jumtube.png";
import thumbnail1 from "../assets/thumbnail-1.jpeg";
import thumbnail2 from "../assets/jumflark-2.png"
import thumbnail3 from "../assets/Youtube_Video_FNAF.png"
import thumbnail4 from "../assets/Youtube_Video_GAME.png"
import thumbnail5 from "../assets/Youtube_Video_SONG.jpg"
import thumbnail6 from "../assets/Youtube_Video_RIRI.png"
import thumbnail7 from "../assets/Youtube_Video_Verity.png"
import thumbnail8 from "../assets/Youtube_Video_Mukbang.png"

import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineMicrophone } from "react-icons/hi";
import { GoPlus } from "react-icons/go";

const Youtube =()=>{
    return(

        <div className='text-black w-full h-screen min-h-[1280px] bg-white'>
            <div className=" border-2  w-full mx-auto h-[5%] flex items-center gap-2">
                <GiHamburgerMenu className="ml-10 mr-5"size={25}/>
                <img className="w-[50px] h-[50px] object-contain" src={jumtubeImg} alt="FlarkTube"/>
                <a  href="/youtube">  <p className="text-black font-bold text-2xl">FlarkTube</p> </a>

                <div id="search-bar" className="hidden md:flex items-center gap-2 border rounded-full px-4 py-2 w-[40%] mx-auto justify-between">
                    <input type="text" placeholder="Search" className="outline-none text-black placeholder-gray-500"/>
                    <MdSearch className="text-gray-600" size={20}/>

                </div>

                <div id="search-icon" className="flex md:hidden items-center gap-2 mx-auto hover:border-3   hover:bg-gray-200 hover:rounded-full">
                    <MdSearch className="text-black" size={35}/>
                
                </div>

                <div className="flex items-center mr-10 ">
                    <div className="flex items-center ml-5 border-2 p-3 rounded-full bg-gray-200 hover:bg-gray-300">
                        <HiOutlineMicrophone className="text-black" size={20} />
                    </div>

                    <div className=" flex items-center ml-5 border-2 p-3 rounded-full bg-gray-200 hover:bg-gray-300">
                        <GoPlus className="text-black" size={20}/>
                        <p >Create</p>
                    </div>

                  
                    
                    <div className=" ml-5 w-12 h-12 bg-teal-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <p className="text-white font-bold text-sm">ST</p>
                        </div>


                </div>
                


            </div>


            <div className="w-screen h-[5%] flex items-center">

                <ul className="flex justify-center gap-4 mx-auto items-center">
                    <li className="px-4 py-2 border border-black rounded bg-black rounded-2xl "><p className="text-white">All</p></li>
                    <li className="px-4 py-2 border rounded bg-gray-100 rounded-2xl hover:bg-gray-200" ><p>Music</p></li>
                    <li className="px-4 py-2 border rounded bg-gray-100 rounded-2xl hover:bg-gray-200"><p>Gaming</p></li>
                    <li className="px-4 py-2 border rounded bg-gray-100 rounded-2xl hover:bg-gray-200" ><p>Pigs</p></li>
                    <li className="px-4 py-2 border rounded bg-gray-100 rounded-2xl hover:bg-gray-200"><p>Theories</p></li>
                    <li className="px-4 py-2 border rounded bg-gray-100 rounded-2xl hover:bg-gray-200"><p>Mud</p></li>

                </ul>
            </div>
            <div className=" sm:grid grid-cols-3 gap-4 ml-3 mr-5 ">
                    
                <div className="">
                    <a href="https://streamable.com/nwgx99">
                        <img src={thumbnail4} alt="thumbnail" className=" h-64 w-full  rounded-3xl mt-5 "></img>
                    </a>
                    <div className=" mt-5 flex items-center gap-3">
                        <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <p className="text-white font-bold text-sm">LM</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold">I GOT THE BAD ENDING! WHAT THE FLARK IS THIS??</p>
                            <p className="text-gray-500 text-sm">LegendaryMafiaBoss 13  1mo ago</p>
                        </div>
                    </div>
                </div>
                   
                    <div className="">

                    <img src={thumbnail3} alt="thumbnail" className=" h-64 w-full  rounded-3xl mt-5"></img>
                    
                    <div className=" mt-5 flex items-center gap-3">
                        <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <p className="text-white font-bold text-sm">NN</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold">Five Nights at Flark's: Flarkiplier Classic!</p>
                            <p className="text-gray-500 text-sm">NotSoNicheFlarkFandom 68k  7h ago</p>
                        </div>
                    </div>
                </div>


                <div className="">

                    <img src={thumbnail6} alt="thumbnail" className=" h-64 w-full  rounded-3xl mt-5"></img>
                    
                    <div className=" mt-5 flex items-center gap-3">
                        <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <p className="text-white font-bold text-sm">LR</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold">I’m a K-Pop Idol. Here’s How To Actually Get Accepted into Kpop Academy!</p>
                            <p className="text-gray-500 text-sm">Luvli Riri 5.6m 1yr ago</p>
                        </div>
                    </div>
                </div>

            </div>
           

                       <div className="hidden sm:grid grid-cols-3 gap-4 ml-3 mr-5 ">
                    
                <div className="">

                    <img src={thumbnail1} alt="thumbnail" className=" h-64 w-full  rounded-3xl mt-5 "></img>
                    
                    <div className=" mt-5 flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <p className="text-white font-bold text-sm">JF</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold">Jum Flark Arduino Tutorial</p>
                            <p className="text-gray-500 text-sm">JumTeaches 10m  yr ago</p>
                        </div>
                    </div>
                </div>
                   
                    <div className="">

                    <img src={thumbnail6} alt="thumbnail" className=" h-64 w-full  rounded-3xl mt-5"></img>
                    
                    <div className=" mt-5 flex items-center gap-3">
                        <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <p className="text-white font-bold text-sm">LR</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold">"Riri Rescue!" Official Dance Video | Luvli Riri</p>
                            <p className="text-gray-500 text-sm">Luvli Riri 1m 1mo ago</p>
                        </div>
                    </div>
                </div>


                <div className="">

                    <img src={thumbnail5} alt="thumbnail" className=" h-64 w-full  rounded-3xl mt-5"></img>
                    
                    <div className=" mt-5 flex items-center gap-3">
                        <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <p className="text-white font-bold text-sm">JF</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold">Jum Flark Tribute Song | Lyric Video </p>
                            <p className="text-gray-500 text-sm">NotSoNicheFandom 1m 6 mo ago</p>
                        </div>
                    </div>
                </div>

            </div>

                        <div className="hidden sm:grid grid-cols-3 gap-4 ml-3 mr-5 ">
                    
                <div className="">

                    <img src={thumbnail7} alt="thumbnai7" className=" h-64 w-full  rounded-3xl mt-5 "></img>
                    
                    <div className=" mt-5 flex items-center gap-3">
                        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <p className="text-white font-bold text-sm">LF</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold">Your Verity - Flark Animimation Meme</p>
                            <p className="text-gray-500 text-sm">GirlsLOVEFlark 112k 9d ago</p>
                        </div>
                    </div>
                </div>
                   
                    <div className="">

                    <img src={thumbnail8} alt="thumbnail" className=" h-64 w-full  rounded-3xl mt-5"></img>
                    
                    <div className=" mt-5 flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <p className="text-white font-bold text-sm">JF</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold">ASMR MUKBANG Spicy chicken Tteokbokki, Seasoned Chicken, Cheese Kimchi Gimbap, fried food, Eating </p>
                            <p className="text-gray-500 text-sm">JumEats 10m 6 yr ago</p>
                        </div>
                    </div>
                </div>


                <div className="">

                    <img src={thumbnail2} alt="thumbnail" className=" h-64 w-full  rounded-3xl mt-5"></img>
                    
                    <div className=" mt-5 flex items-center gap-3">
                        <div className="w-12 h-12 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <p className="text-white font-bold text-sm">JF</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold">6 PHOTOS THT CAN'T BE EXPLAINED: DON'T WATCH AT 3AM</p>
                            <p className="text-gray-500 text-sm">JuminaTheories 2 10mo ago</p>
                        </div>
                    </div>
                </div>

            </div>




            
        </div>

    )


    

};

export default Youtube;