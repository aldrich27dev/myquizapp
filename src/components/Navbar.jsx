import React from 'react'

export const Navbar = () => {
  return (
    



<nav className=" backdrop-filter backdrop-blur-lg bg-opacity-30 bg-cyan-600 fixed w-full z-20 top-0 start-0">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://aldrich27dev.github.io/aldrich" className="flex items-center space-x-3 rtl:space-x-reverse">

      <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Aldrich Quiz</span>
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
     <a href="https://aldrich27dev.github.io/aldrich"> <button type="button" className="text-white bg-cyan-600 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Back to Portfolio</button>
</a>
  </div>

  </div>
</nav>


  )
}
