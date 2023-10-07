// import React from 'react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import tekri from './image/takri.png'
import bhojpur from './image/bhojpur.png'
import cafe1 from './image/cafe1.jpeg'
import cafe2 from './image/cafe2.avif'
import cafe3 from './image/cafe3.jpg'
import mall from './image/mall.png'
import cafe4 from './image/cafe4.jpg'
import CAFE5 from './image/CAFE5.jpg'
import CAFE6 from './image/CAFE6.jpg'
import bhimbetka from './image/bhimbetka.jpg'
import sanchi from './image/sanchi.jpg'
import birla from './image/birla.jpg'
import Amargarh from './image/Amargarh.png'
import mahadevpani from './image/mahadevpani.webp'
import pachmarhi from './image/pachmarhi.webp'

const Main = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribeClick = () => {
    // Your subscription logic here
    // For demonstration, we'll toggle the subscription status
    setIsSubscribed(!isSubscribed);
  };

 
  
  return (
    <>
    {/* ----------------------Header start-------------------- */}
    <header className='bg-blue-700'>
      <ul className='flex space-x-7 text-white text-2xl font-serif justify-center mt-5'>
        <li>
          <Link to='/Picnic'>Picnic spot</Link>
        </li>
        <li>
          <Link to='/Mountain'>Cafe</Link> </li>
        <li>
          <Link to='/Waterfall'>Water fall </Link>
        </li>
        <li>
          <Link to='/Cafe'>Temple</Link>
        </li>
      </ul>
    </header>
    {/* -----------------Header end------------------------- */}

 {/* --------------------First section start------------------ */}
    <div className='h-[200px] bg-blue-600 mt-4 py-16'>
    <h1 className='text-6xl font-bold text-white text-center'>GHOOMNE CHALO</h1> </div>
    <h2 className='text-center text-xl mt-5 text-blue-900'>Let's Visit Amazing Places of <b>"City of Lakes"</b> </h2>  
    
   <div className='flex justify-center space-x-10 mt-10'>
    <div>  
      <Link to='/Details'>
    <img  className='w-[400px] hover:-scale-x-105' src={bhojpur} alt="" />
    </Link>
    <h2 className='font-bold text-center text-blue-800 text-xl mt-2'>BHOJPUR TEMPLE </h2>
    </div>
    <div>
      <Link to='/Details'>
    <img className='w-[360px] hover:-scale-x-105' src={tekri} alt="" />

      </Link>
    <h2 className='font-bold text-center text-blue-800 text-xl mt-2'>MANUBHAN TEKRI </h2>

    </div>
    <div>
    <img className='w-[370px] hover:-scale-x-105' src={mall} alt="" />
    <h2 className='font-bold text-center text-blue-800 text-xl mt-2'>PEOPLES MALL </h2>

     </div>
     {/* --------------------First section end-------------------- */}


 
 {/* --------------------second section start------------------ */}
   
   </div>
   <div className='flex justify-center space-x-10 mt-10'>
    <div>
    <img  className='w-[400px] h-[240px] hover:-scale-x-105' src={bhimbetka} alt="" />
    <h2 className='font-bold text-center text-blue-800 text-xl mt-2'>BHIMBETKA CAVES</h2>
    </div>
    <div>
    <img className='w-[370px] h-[240px] hover:-scale-x-105' src={birla} alt="" />
    <h2 className='font-bold text-center text-blue-800 text-xl mt-2'>BIRLA MANDIR</h2>

    </div>
    <div>
    <img className='w-[370px] h-[240px] hover:-scale-x-105' src={sanchi} alt="" />
    <h2 className='font-bold text-center text-blue-800 text-xl mt-2'>SANCHI</h2>

     </div>

   </div>

 {/* --------------------second section start------------------ */}
   
    {/* ------------------Heading section start------------------ */}
    <div className='mt-20 ml-[500px] mr-[500px] '>
   <h1 className='text-center bg-blue-600 h-9 text-white text-2xl rounded-t-3xl' >Famous Cafe</h1>
   </div>
 {/* ------------------Heading section end------------------ */}


 {/* --------------------third section start------------------ */}
 

 <div className='flex justify-center space-x-10 mt-10'>
    <div>
    <img  className='w-[400px] h-[240px] hover:-scale-x-105' src={cafe1} alt="" />
    <h2 className='font-bold text-center text-blue-800 text-xl mt-2'>SOCIALITE SEVEN S7</h2>
    </div>
    <div>
    <img className='w-[370px] h-[240px] hover:-scale-x-105' src={cafe2} alt="" />
    <h2 className='font-bold text-center text-blue-800 text-xl mt-2'>GREEEN HOUSE BISTRO</h2>

    </div>
    <div>
    <img className='w-[370px] hover:-scale-x-105 sm:h-[240px]' src={cafe3} alt="" />
    <h2 className='font-bold text-center text-blue-800 text-xl mt-2 '>WINDZ CAFE & RESTAURANT</h2>

     </div>

   </div>


   <div className='flex justify-center space-x-10 mt-10'>
    <div>
    <img  className='w-[400px] h-[240px] hover:-scale-x-105' src={cafe4} alt="" />
    <h2 className='font-bold text-center text-blue-800 text-xl mt-2'>BIRTHDAY PARTY CELEBERTAION</h2>
    </div>
    <div>
    <img className='w-[370px] h-[250px] hover:-scale-x-105' src={CAFE5} alt="" />
    <h2 className='font-bold text-center text-blue-800 text-xl mt-2'>OVER THE MOON</h2>

    </div>
    <div>
    <img className='w-[370px] h-[240px] hover:-scale-x-105' src={CAFE6} alt="" />
    <h2 className='font-bold text-center text-blue-800 text-xl mt-2'>MOMENTS CAFE & RESTAURANT</h2>

     </div>

   </div>

 {/* --------------------third section start------------------ */}

 {/* ------------------Heading section start------------------ */}
   <div className='mt-20 ml-[500px] mr-[500px] '>
   <h1 className='text-center bg-blue-600 h-9 text-white text-2xl rounded-t-3xl' >Famous Waterfall</h1>
   </div>
 {/* ------------------Heading section end------------------ */}


 {/* --------------------Fouth section start------------------ */}

   <div className='flex justify-center space-x-10 mt-10'>
    <div>
    <img  className='w-[400px] hover:-scale-x-105 sm:h-[250px]'  src={pachmarhi} alt="" />
    <h2 className='font-bold text-center text-blue-800 text-xl mt-2'>PACHMARHI WATERFALL</h2>
    </div>
    <div>
    <img className='w-[360px] h-[250px] hover:-scale-x-105' src={Amargarh} alt="" />
    <h2 className='font-bold text-center text-blue-800 text-xl mt-2'>AMARGARH WATERFALL</h2>

    </div>
    <div>
    <img className='w-[370px] h-[250px] hover:-scale-x-105' src={mahadevpani} alt="" />
    <h2 className='font-bold text-center text-blue-800 text-xl mt-2'>MAHADEVPANI WATERFALL </h2>

     </div>

   </div>
 {/* --------------------Fouth section end------------------ */}
    

   {/* ---------------------footer area Start-------------------- */}
   <footer className="bg-blue-800 text-white mt-20 py-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-1/4 md:ml-20 sm:-ml-8">
          {/* Your Logo or Footer Content */}
          <h1 className="text-2xl ">About Viator</h1>
          <h1 className="text-2xl ">Privacy and Statement</h1>
          <h1 className="text-2xl ">Help Center</h1>
        </div>
        <div className="w-1/4 sm:-ml-16">
          {/* Social Media Links */}
          <h2 className="text-lg font-semibold mb-2">Career</h2>
          <h2 className="text-lg font-semibold mb-2">Traveler Agent</h2>
          <h2 className="text-lg font-semibold mb-2">Supplier Signup</h2>
          {/* <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white hover:text-blue-400">
                <i className="fab fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-400">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-400">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul> */}
        </div>
        <div className="w-1/4 md:mr-16 sm:mr-1">
          {/* Email Signup */}
          <h2 className="text-2xl font-semibold mb-2 ">Keep with me</h2>
          <div className="flex justify-center text-black items-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="border p-2 mr-2"
        />
        <button
          onClick={handleSubscribeClick}
          className={`bg-blue-500 text-white p-2 rounded ${isSubscribed ? 'cursor-not-allowed opacity-50' : 'hover:bg-blue-600'}`}
          disabled={isSubscribed}
        >
          {isSubscribed ? 'Subscribed' : 'Subscribe'}
        </button>
      </div>
        </div>
      </div>
    </footer>
   {/* ----------------------------footer area end------------------------ */}
    </>
  )
}

export default Main;