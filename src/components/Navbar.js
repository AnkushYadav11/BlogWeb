import React from 'react';
import Logo from '../images/logo.svg'
import Search from '../images/search.svg'
export default function Navbar(props) {  
  return(
  <>
    <div className='pl-8 pr-8 p-1 flex justify-between rounded bg-linear-to-t from-gray-100 to-white-100 shadow-lg shadow-gray-200'>
     
      <div className='p-1 flex *:w-7 hover:shadow-lg rounded-xl'>
        <img src={Logo} alt="Logo" />
      </div>
     
      <div className='flex'>
        <ul className='flex gap-8 m-2 *:hover:underline'>
          <li>LifeStyle</li>
          <li>Travaling</li>
          <li>Food</li>
          <li>Study</li>
          <li>Work</li>
        </ul>
      </div>
     
      <div>
        <img src={Search} alt="Search" className='m-2 w-5 hover:shadow-lg hover:shadow-blue-2xl rounded' />
      </div>
    </div>
  </>
  );
}
