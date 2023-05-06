import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import splitType from "split-type";
import Blogpost from './Blogpost';
import './blog.css';

function TextAnimation() {
  const ourTextRef = useRef(null);
  // const ourText1Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
    const ourText = new splitType(ourTextRef.current, { types: "chars" });
    const chars = ourText.chars;

    // const ourText1 = new splitType(ourText1Ref.current, { types: "chars1" });
    // const chars1 = ourText1.chars;

    tl.from(
      "span",
      {
        top: -100,
        opacity: 0,
        delay: 0.5,
        ease: "elastic.out(0.9, 0.45)",
        stagger: 0.6,
        duration: 1.5,
      }
    );
    tl.to(
      "span",
      {
        top: 200,
        opacity: 0,
        delay: 2,
        ease: "power4.in",
        stagger: 0.1,
        duration: 1,
      }
    );

    gsap.fromTo(
      chars,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 2,
        delay: 2,
        ease: "power4.out",
      }
    );

    // gsap.fromTo(
    //   chars1,
    //   {
    //     x: 100,
    //     opacity: 0,
    //   },
    //   {
    //     y: 0,
    //     opacity: 1,
    //     stagger: 0.05,
    //     duration: 4,
    //     delay: 4,
    //     ease: "power4.out",
    //   }
    // );

  }, []);

  return (
    <>
      <div id="wrapper">
        <div id="bg"></div>
        <div id="text">
          <h1>
            <span className="words">My</span>&nbsp;
            <span className="words">Travel</span>&nbsp;
            <span className="words">Journal</span>
          </h1>
          <p className="our-text" ref={ourTextRef}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sequi accusamus
            distinctio assumenda repudiandae libero explicabo laudantium temporibus dignissimos provident.
          </p>
          {/* <p className="our-text1" ref={ourText1Ref}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sequi accusamus
            distinctio assumenda repudiandae dignissimos provident.
          </p> */}
        </div>
      </div>
      <Blogpost />
    </>
  );
}

export default TextAnimation;