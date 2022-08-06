import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

import './contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kn6jm19', 'template_lkxhpmb', form.current, 'IKSmJTuayD6rD1zEv')
    e.target.reset()
    
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
         <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>saadzahid133204@gmail.com</h5>
          <a href='mailto:saadzahid133204@gmail.com'>Send a message</a>
          </article> 

          <article className="contact__option">
          <RiMessengerLine className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>Saad Zahid Qureshi</h5>
          <a href='https://m.me/Saad.Z.Qureshi'>Send a message</a>
          </article> 

          <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+92 313 047 6225</h5>
          <a href='https://api.whatsapp.com/send?phone+923130476225'>Send a message</a>
          </article> 
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required></input>
          <input type='email' name='email' placeholder='Your Email' required></input>
          <textarea typeof='message' name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section >
  )
}

export default Contact