import React from "react";
import FlarkPfp from "../assets/thumbnail-1.jpeg";
import { ImInstagram } from "react-icons/im";
import { LuMessageCircleHeart } from "react-icons/lu";
import { FaRegNewspaper } from "react-icons/fa";
import { TbPig } from "react-icons/tb";
import { TiHome } from "react-icons/ti";

const Instagram = () => {
  const posts = [
    { id: 1, image: FlarkPfp },
    { id: 2, image: FlarkPfp },
    { id: 3, image: FlarkPfp },
    { id: 4, image: FlarkPfp },
    { id: 5, image: FlarkPfp },
    { id: 6, image: FlarkPfp },
  ];

  return (
    <div className="min-h-screen mt-5 mb-8 text-black">

      <div className="w-[80%] mx-auto bg-gray-100 ">


        <header className="flex items-center justify-between text-white   bg-blue-800">
        
        
          <div className="flex items-center mx-auto ">
         
            <span className="text-[22px] font-bold tracking-tight" >Instagram</span>
          </div>
        </header>

        <main className="p-4">

          <section className="flex items-center justify-between  bg-white p-4  mb-4 rounded-xl ">
          
            <div className="w-32 h-32 border border-black  mr-5 p-1 rounded-lg">
              <img src={FlarkPfp} alt="Profile" className="w-full h-full object-cover" />
            </div>

            <div className="flex-1 flex flex-col items-center  border-black ">
 
              <div className="flex">
              </div>

              <div className="grid grid-cols-3 text-xs  mb-3 w-full text-center">
             
                <div className="border border-black  bg-gray-200 py-2 ">
                  <span className="font-bold block">128</span>
                  photos
                </div>


                <div className="border border-black  bg-gray-200 py-2">
                  <span className="font-bold block">42.7k</span>
                  followers
                </div>
                <div className="border border-black  bg-gray-200 py-2">
                  <span className="font-bold block">614</span>
                  following
                </div>
              </div>
              <button type="submit" className="bg-blue-700 p-2 rounded-xl w-[80%] text-white">Follow</button>

             
            </div>
          </section>

          <div className="border-t border-[#dbdbdb] pt-3">
            <div className="flex justify-center gap-10 text-[10px] uppercase tracking-[0.12em] text-[#8e8e8e]">
                <div>icon</div>
                <div>icon</div>
                <div>text</div>
                <div>arrow</div>
          
            </div>

            <div className="grid grid-cols-3 gap-3  mt-2 p-2">
              {posts.map((post) => (
                <div key={post.id} className=" aspect-square overflow-hidden border-2 border-dashed border-black">
                  <img src={post.image} alt="Instagram post" className=" bg-white  w-full h-full object-cover p-2" />
                </div>
              ))}
            </div>


          </div>
        </main>
          <div className="grid grid-cols-5 place-items-center w-full py-2">
            <div><TiHome className="h-24 w-24" /></div>
            <div><TbPig className="h-24 w-24" /></div>
            <div><ImInstagram className="h-24 w-24" /></div>
            <div><LuMessageCircleHeart className="h-24 w-24" /></div>
            <div><FaRegNewspaper className="h-24 w-24" /></div>
        </div>
      </div>
    </div>
  );
};

export default Instagram;