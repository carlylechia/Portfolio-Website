import React from 'react';
import './testimonials.css';
import AVR1 from '../../assets/avatar1.jpeg';
import AVR2 from '../../assets/avatar2.jpeg';
import AVR3 from '../../assets/avatar3.jpeg';
import AVR4 from '../../assets/avatar4.jpeg';

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const reviewData = [
  {
    avatar: AVR1,
    name: 'Zahra Arshia',
    review: "It gives me great pleasure to recommend Chia Carlyle for the position of software developer. I have known him as one of my teammates during an internship in web development. He was not only a colleague but also a very good teammate and even a better friend. He has good communication skills and a teamwork manner. I have found him very polite and respectful, also very smart and skilled. He is always ready to help teammates and juniors, and he is good at mentorship and leadership. I give Chia Carlyle my highest recommendation for the position that he is applying for."
  },
  {
    avatar: AVR2,
    name: 'Stanley SIMEON',
    review: "This is a great pleasure to recommend Chia Carlyle for the position of software developer. This is one of the best coding partner I was worked with during the the Microverse program. not only a colleague but also a very good teammate and even a better friend. Know how to communicate, good understanding, respectful, very smart and skilled. Always ready to help and growing his skills by helping too. Honestly I give you, Chia Carlyle my highest recommendation for every position..."
  },
  {
    avatar: AVR3,
    name: 'Nemwel Nyandoro',
    review: "Chia is an amazing friend and a very smart software developer. He is usually very willing to offer help to any team member who faced any technical blockers and when he himself faced them he would always reach out for help to avoid time wastage. Chia always challenges himself to tackle tough challenges which is something that I noticed about him. He is the perfect team player who has project leader abilities but gives other people that chance so that they too can learn that invaluable soft skill. I highly recommend Chia and I would like to work with him again."
  },
  {
    avatar: AVR4,
    name: 'Moïse Mulungu',
    review: "Chia Carlyle is the kind of software developer any company would love. I built with him several Single Page Applications (SPA) using JavaScript, and React-Redux within several consecutive weeks. Anytime I got struggling with a tough data structures problem, within a few hours, He'd managed to explain a concept I'd been struggling with for days. He has a great way of simplifying complex problems into bite-sized pieces, and as a junior developer, that was really valuable for me. He's also just a fun person to chat with! If you need to get a job done simply and efficiently, Chia Carlyle is the right person for you."
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews From Clients And Teammates</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
      {
        reviewData.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials