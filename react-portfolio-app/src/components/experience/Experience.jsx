import React from 'react'
import {BsPatchCheckFill } from 'react-icons/bs'

import './experience.css'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience_detials'>
            <BsPatchCheckFill className='experience_detials-icon'/>
            <div>
            <h4>HTML</h4>
            <small>Experienced</small>
            </div>
            </article>

            <article className='experience_detials'>
            <BsPatchCheckFill className='experience_detials-icon'/>
            <div>
            <h4>CSS</h4>
            <small>Experienced</small>
            </div>
            </article>

            <article className='experience_detials'>
            <BsPatchCheckFill className='experience_detials-icon'/>
            <div>
            <h4>JavaScript</h4>
            <small>Intermediate</small>
            </div>
            </article>

            <article className='experience_detials'>
            <BsPatchCheckFill className='experience_detials-icon'/>
            <div>
            <h4>Bootstrap</h4>
            <small>Experienced</small>
            </div>
            </article>

            <article className='experience_detials'>
            <BsPatchCheckFill className='experience_detials-icon'/>
            <div>
            <h4>React</h4>
            <small>Intermediate</small>
            </div>
            
            </article>

          </div>
        </div>
        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience_detials'>
            <BsPatchCheckFill className='experience_detials-icon'/>
            <div>
            <h4>NodeJS</h4>
            <small>Intermediate</small>
            </div>
            </article>

            <article className='experience_detials'>
            <BsPatchCheckFill className='experience_detials-icon'/>
            <div>
            <h4>MongoDB</h4>
            <small>Intermediate</small>
            </div>
            </article>

            <article className='experience_detials'>
            <BsPatchCheckFill className='experience_detials-icon'/>
            <div>
            <h4>PHP</h4>
            <small>Experienced</small>
            </div>
            </article>

            <article className='experience_detials'>
            <BsPatchCheckFill className='experience_detials-icon'/>
            <div>
            <h4>MySQL</h4>
            <small>Experienced</small>
            </div>
            </article>

            <article className='experience_detials'>
            <BsPatchCheckFill className='experience_detials-icon' />
            <div>
            <h4>Python</h4>
            <small>Experienced</small>
            </div>
            </article>

            
          </div>
        </div>
      </div>
    </section >
  )
}

export default Experience