import React from 'react'
import AVATAR1 from '../../assets/avatars/avatar1.jpg';
import AVATAR2 from '../../assets/avatars/avatar2.jpg';
import AVATAR3 from '../../assets/avatars/avatar3.jpg';
import AVATAR4 from '../../assets/avatars/avatar4.jpg';

import './testimonials.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


const data = [
  {
    avatar : AVATAR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima sint maxime harum quasi, nesciunt laudantium voluptatibus ducimus dolorem rerum quis libero debitis ea, doloremque atque optio? Illo laudantium ipsum error'
  },
  {
    avatar : AVATAR2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima sint maxime harum quasi, nesciunt laudantium voluptatibus ducimus dolorem rerum quis libero debitis ea, doloremque atque optio? Illo laudantium ipsum error'
  },
  {
    avatar : AVATAR3,
    name: 'Kawame Depite',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima sint maxime harum quasi, nesciunt laudantium voluptatibus ducimus dolorem rerum quis libero debitis ea, doloremque atque optio? Illo laudantium ipsum error'
  },
  {
    avatar : AVATAR4,
    name: 'Nana Ama McBrown',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima sint maxime harum quasi, nesciunt laudantium voluptatibus ducimus dolorem rerum quis libero debitis ea, doloremque atque optio? Illo laudantium ipsum error'
  },
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
      spaceBetween={40}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
       className="container testimonial__container">
        
        {
          data.map(({avatar,name,review},index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
          <div className="clien__avatar">
            <img src={avatar} alt="" />
          </div>
          <h5 className='client__name'>{name}</h5>
          <small className='client__review'>
            {review}
          </small>
        </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials