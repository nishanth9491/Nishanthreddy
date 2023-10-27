import React from 'react';
import './contact.css'
import Twitter from '../../assests/Images/twitter.png';
import Instagram from '../../assests/Images/instagram.png';
import Github from '../../assests/Images/github.png';





const Contact = () => {
  return (
    
    <section id="contactPage">
            <span className='contactProgress'></span>


        <div id="contact">
          

        
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Wanna have a chat? <br />Then <br />Lets Begin...</span>

            <form className='contactForm'>
                <input type="text" className="name" placeholder='Your Name' />
                <input type="text" className="email" placeholder='Your Email' />
                <textarea name="message" rows="5" placeholder='Message' className='msg'></textarea>
                <button type='submit'  value="send" className="submitBtn">Submit</button>
                <div className="links">
                    <img src={Github} alt="" className='clientImg' />
                    
                    <img src={Instagram} alt="" className='clientImg' />
                    <img src={Twitter} alt="" className='clientImg' />

                </div>
              
            </form>

           

        </div>

    </section>
  )
}

export default Contact;
