import gsap from 'gsap';
import React, { useEffect } from 'react';
import BlogPage from "./blog/BlogPage";
import { GiWorld } from 'react-icons/gi';


function App() {

  useEffect(() => {
    gsap.from(".header", {
      duration: 1,
      scale: 1.5,
    });
  }, [])

  return (
    <>
      <h2 className="header"><GiWorld className='world-icon' />my travel journal.</h2>
      <BlogPage />
    </>
  );
}

export default App;
