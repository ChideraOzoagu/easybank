import React, { useEffect, useRef } from 'react'
import mockups from "../assets/images/image-mockups.png";
import gsap from 'gsap';

const Intro = () => {
const introRef = useRef(null)

// useEffect(()=>{
//     gsap.fromTo(introRef.current, {
//         autoAlpha: 0,
//     }, {
//         duration: 2,
//         ease: 'none',
//         autoAlpha: 1,
//     })
// },[])
  return (
    <div>
       <div className="flex-1" ref={introRef}>
        <section className="mockups">
          <img src={mockups} alt="mockups" className="mockups-img" />
        </section>
        <section className="registration-section">
          <h1>Next generation digital banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button>Request Invite</button>
        </section>
      </div>
    </div>
  )
}

export default Intro
