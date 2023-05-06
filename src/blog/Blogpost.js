import React, { useEffect } from 'react';
import './blogpost.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function BlogPost() {

    useEffect(() => {
        gsap.to(".hero",
            {
                scrollTrigger: {
                    trigger: ".hero",
                    scrub: true,
                    pin: true,
                    start: "center center",
                    end: "bottom 20%",
                    toggleClass: "active",
                    ease: "power2"
                }
            });
    }, [])

    return (
        <>
            <div className='hero '>
                <div className='sol_header'>
                    <p>No worries,</p>
                </div>
                <div className='hero__headline' >
                    <h2>We</h2>
                </div>
                <div className='hero__headline'>
                    <h2>Understand </h2>
                </div>
                <div className=' hero__headline'>
                    <h2>Your&nbsp;Power</h2>
                </div>
            </div>
        </>
    )
}

export default BlogPost
