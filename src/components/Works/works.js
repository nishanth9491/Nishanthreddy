import React from 'react';
import './works.css';
import portfolio1 from '../../assests/Images/portfolio1.jpeg';
import portfolio2 from '../../assests/Images/portfolio2.jpeg';
import portfolio3 from '../../assests/Images/portfolio3.jpeg';
import portfolio4 from '../../assests/Images/portfolio4.jpeg';
import portfolio5 from '../../assests/Images/portfolio5.jpeg';
import portfolio6 from '../../assests/Images/portfolio6.jpeg';





const Works = () => {
  return (
    <section id="works">
        <h2 className="workstitle">My Portfolio</h2>
        <span className='worksDesc'>Unwavering computer enthusiast with a relentless drive for learning, problem-solving, and innovation. I actively engage in the tech community while maintaining a pioneering spirit, seeking to  contribute to the ever-evolving world of computing</span>
        <div className="worksImgs">
            <img src={portfolio1} alt="" className="worksImg" />
            <img src={portfolio2} alt="" className="worksImg" />
            <img src={portfolio3} alt="" className="worksImg" />
            <img src={portfolio4} alt="" className="worksImg" />
            <img src={portfolio5} alt="" className="worksImg" />
            <img src={portfolio6} alt="" className="worksImg" />

        </div>
        <p className='workBtnText'></p>
        <button className="workBtn" id='workBtn' onClick={()=>{
       
       document.querySelector('.workBtnText').innerHTML = "Hey! projects that are Launching soon";
      }}>See More</button>

       
    </section>
  )
}

export default Works;
