import React from 'react';
import {Link} from 'react-router-dom';
const Home = () => {
  return (
    <>
    <div className="border-5">
    <span className="border-5 border-style-dotted bg-black">
      <ul className="nav-link">
        <Link><li>Java</li></Link>
        <Link><li>JavaScript</li></Link>
      </ul>
    </span>
    </div>
    </>
  );
}

export default Home;