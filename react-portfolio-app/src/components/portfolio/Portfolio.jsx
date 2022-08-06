import React from 'react'
import IMG1 from '../../assets/portfolio/portfolio1.jpg'
// import IMG2 from '../../assets/portfolio/portfolio2.jpg'
// import IMG3 from '../../assets/portfolio/portfolio3.jpg'
import IMG4 from '../../assets/portfolio/portfolio4.jpg'
import IMG5 from '../../assets/portfolio/portfolio5.png'
import IMG6 from '../../assets/portfolio/portfolio6.jpg'

import './portfolio.css'

const data = [
  {
    id: 1,
    image: IMG6,
    title: 'e-Ticketing MVC Webapp',
    github: 'https://github.com/saadzahidqureshi',
    demo: 'https://dribbble.come/'
  },
  {
    id: 2,
    image: IMG4,
    title: 'E-shope Android App',
    github: 'https://github.com/saadzahidqureshi',
    demo: 'https://dribbble.come/'
  },
  {
    id: 3,
    image: IMG1,
    title: 'Investment Calculator JS',
    github: 'https://github.com/saadzahidqureshi',
    demo: 'https://dribbble.come/'
  },
  {
    id: 4,
    image: IMG5,
    title: 'Voice Authentication System',
    github: 'https://github.com/saadzahidqureshi',
    demo: 'https://dribbble.come/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Voice Authentication System',
    github: 'https://github.com/saadzahidqureshi',
    demo: 'https://dribbble.come/'
  },
  {
    id: 6,
    image: IMG5,
    title: 'Voice Authentication System',
    github: 'https://github.com/saadzahidqureshi',
    demo: 'https://dribbble.come/'
  },

]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
        data.map(({id, image, title, github, demo})=>{
          return(
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt="portfolio-image" />
            </div>
            <h3>{title}</h3>
            <div className='portfolio__iten-cta'>
            <a href={github} alt='github link' className='btn' target='_blank'>Github</a>
            <a href={demo} alt='Live Demo' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
          )
        }
        )
       }
 
      </div>
    </section>
  )
}

export default Portfolio