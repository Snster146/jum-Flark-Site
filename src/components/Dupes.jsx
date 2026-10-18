
import React from "react";

import jumtubeImg from "../assets/jumtube.png";
import wikiImg from "../assets/wiki.png";
import flarkgramImg from "../assets/flarkgram.png";
import wordleImg from "../assets/wordle.png";

import TempImg from "../assets/Temp.png";
import JumArt1 from "../assets/JumArt1.png";
import JumArt2 from "../assets/JumArt2.png";

const Dupes = () =>{
    return(
        
        <div className='w-full min-h-[400px] overflow-x-hidden' style={{ zoom: 0.8 }}>


        <div style={{ background: 'linear-gradient(to bottom, #ffe7f0 4%, #ffbdd7 77%)' }}>
                    <div className='flex flex-col'>
                    <p className='font-shadows mt-9 text-[#68463e] font-bold text-6xl text-center'>Flark Dupes</p>
                    <h1 className='font-shadows mt-7 font-bold text-5xl text-center'>Fan Made Duplicates of Popular Websites - Flarkified!</h1>
                    <p className='mt-8 text-2xl text-[#552112] mx-auto text-center max-w-7xl'>Forever millions have been left longing to be able to be closer to the Flark family. People tell us that ignorance is kind, but our curious minds will always wonder.. where is Jum Flark? New and old members can't help but want a deeper look into Jum, but the question remains "Who.. is he?" Jum has been gone for years, but the task of finding him and the hope within our hearts keeps us faithful for his return. These fan made dupe webpages link us further to the Flark universe - through the Flark Wiki, dedicating precious resources to documenting the Flark family members and their relationships, to FlarkTube, enabling users to admire Flark media. These dupes are made by fans for fans, and we hope you enjoy them as much as we do.</p>
                    <p className='font-shadows text-[#7b574d] mt-16 font-bold text-5xl text-center'>WELCOME... TO THE FLARK ZONE</p>
                    <p className='font-shadows mt-16'></p>
                </div>
            </div>

<div
  className="relative w-full min-h-[400px] bg-[repeating-linear-gradient(45deg,#7b574d_0px,#7b574d_20px,#68463e_20px,#68463e_40px)] grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-7 p-6 pt-12">
<div className="absolute top-0 left-0 w-full h-[20px] bg-white z-20 pointer-events-none">
<img src={JumArt1} alt="Flark Art" style={{ position: 'absolute', top:-578, left:2, zIndex: 1, overflow: 'visible' }} width="260" height="200"/>
<img
  src={JumArt2}
  alt="Flark Art"
  className="absolute top-[-578px] right-0 w-[260px] min-w-[260px] max-w-none h-auto"/>
</div>
    <a href='/youtube'>
    <img src={jumtubeImg} alt="Flarktube" width="200" height="220"/>    </a>
    <a href='/wordle'>
    <img src={wordleImg} alt="Flarktube" mt-7 width="200" height="220"/>    </a>
    <a href='/instagram'>
    <img src={flarkgramImg} alt="Flarktube" mt-7 width="200" height="220"/>    </a>
    <a href='/wiki'>
    <img src={wikiImg} alt="Flarktube" mt-7 width="200" height="220"/>    </a>
    <a href='/TEMP'>
    <img src={TempImg} alt="Flarktube" mt-7 width="200" height="220"/>    </a>
    <a href='/TEMP'>
    <img src={TempImg} alt="Flarktube" mt-7 width="200" height="220"/>    </a>
    <a href='/TEMP'>
    <img src={TempImg} alt="Flarktube" mt-7 width="200" height="220"/>    </a>
    <a href='/TEMP'>
    <img src={TempImg} alt="Flarktube" mt-7 width="200" height="220"/>    </a>
    <a href='/TEMP'>
    <img src={TempImg} alt="Flarktube" mt-7 width="200" height="220"/>    </a>
    <a href='/TEMP'>
    <img src={TempImg} alt="Flarktube" mt-7 width="200" height="220"/>    </a>
    <a href='/TEMP'>
    <img src={TempImg} alt="Flarktube" mt-7 width="200" height="220"/>    </a>
    <a href='/TEMP'>
    <img src={TempImg} alt="Flarktube" mt-7 width="200" height="220"/>    </a>
    <a href='/TEMP'>
    <img src={TempImg} alt="Flarktube" mt-7 width="200" height="220"/>    </a>
    <a href='/TEMP'>
    <img src={TempImg} alt="Flarktube" mt-7 width="200" height="220"/>    </a>
    <a href='/TEMP'>
    <img src={TempImg} alt="Flarktube" mt-7 width="200" height="220"/>    </a>
    <a href='/TEMP'>
    <img src={TempImg} alt="Flarktube" mt-7 width="200" height="220"/>    </a>

<div className="absolute bottom-0 left-0 w-full h-[20px] bg-[#68463e] z-20 pointer-events-none">
</div></div></div>
    )

}
export default Dupes