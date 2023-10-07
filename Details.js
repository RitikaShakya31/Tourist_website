import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bhojpur from './image/bhojpur.png'
import b2 from './image/b2.jpeg'
import b3 from './image/b3.jpeg'

const Details = () => {

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
    <div>
    <h1 className='text-blue-700 text-4xl text-center mt-20 underline'>More Details</h1>
        
       
    </div>
    <div className='flex'>
        <img className='h-[500px] w-[500px] ml-10 mt-20' src={bhojpur} alt="" />
      <div className='ml-28 mt-20 '>
        <h1 className='text-3xl'>Bhojpur temple</h1>
        <h1 className='mt-5 text-xl underline'>History</h1>
            <p className='mt-5 mr-5 text-lg '>Bhojpur takes its name from king Bhoja (reg. c. 1000–1055 CE), the most celebrated ruler of the Paramāra dynasty. There is no archaeological evidence from Bhojpur before the eleventh century, a fact confirmed by local legends which recount how Bhoja made a vow to build a series of dams "to arrest the streams of nine rivers and ninety-nine rivulets". A location was found in the kingdom that allowed the king to fulfil this vow and the dams were duly built at Bhojpur.</p>
            <h1 className='mt-3 text-lg'>Location - Bhopal</h1>
            <h1 className='mt-3 text-lg'>State - Madhya Pradesh</h1>
            <h1 className='mt-3 text-lg'>Country - India</h1>
      </div>
    </div>
    <div className='mt-20 flex space-x-10 ml-20 mb-20'>
        <img className='h-[250px] w-[300px] hover:-scale-x-105'  src={b2} alt="" />
        <img className='h-[250px] w-[300px] hover:-scale-x-105 '  src={b3} alt="" />
        <img className='h-[250px] w-[300px] hover:-scale-x-105'  src={b2} alt="" />
        <img className='h-[250px] w-[300px] hover:-scale-x-105'  src={b3} alt="" />


    </div>
     {/* ---------------------footer area Start-------------------- */}
   <footer className="bg-blue-800 text-white mt-20 py-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-1/4 ml-20">
          {/* Your Logo or Footer Content */}
          <h1 className="text-2xl ">About Viator</h1>
          <h1 className="text-2xl ">Privacy and Statement</h1>
          <h1 className="text-2xl ">Help Center</h1>
        </div>
        <div className="w-1/4">
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
        <div className="w-1/4 mr-16">
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

export default Details