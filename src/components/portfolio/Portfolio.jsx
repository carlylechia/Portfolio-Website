import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/hotel.png';
import IMG2 from '../../assets/covid.png';
import IMG3 from '../../assets/movies.png';
import IMG4 from '../../assets/vsb.png';
import IMG5 from '../../assets/budget.png';
import IMG6 from '../../assets/rockets.png';
import useGAEventsTracker from '../../hooks/useGAEventsTracker';

const projects = [
  {
    id: 1,
    image: IMG1,
    title: 'Hotel Reservation App',
    github: 'https://github.com/carlylechia/hotel-reservation-frontend',
    demo: 'https://micro-hotel-reservation.netlify.app/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Covid 19 Tracking site',
    github: 'https://github.com/carlylechia/COVID911',
    demo: 'https://covid-cop.netlify.app/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Movies and shows site',
    github: 'https://github.com/carlylechia/movie-app',
    demo: 'https://saied2035.github.io/movie-app/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'VSB website',
    github: 'https://github.com/carlylechia/Vision-Straight',
    demo: 'https://carlylechia.github.io/Vision-Straight/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Budget management application',
    github: 'https://github.com/carlylechia/Budget_R',
    demo: 'https://budget-r.herokuapp.com/',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Space Travellers\' Hub',
    github: 'https://github.com/carlylechia/SPACE-TRAVELERS-HUB',
    demo: 'https://6262b54ee8f3d52d5200c258--tiny-bavarois-1b6015.netlify.app/',
  },
];


const Portfolio = () => {
  const GAEventsTracker = useGAEventsTracker('Project Visited.');
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          projects.map(({id, image, title, github, demo}) => {
            return (
              <article className="portfolio__item" key={id}>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className="btn" target='_blank' rel="noreferrer" onClick={e => GAEventsTracker('Project repository visited', github)}>Github</a>
            <a href={demo} className="btn btn-primary" target='_blank' rel="noreferrer" onClick={e => GAEventsTracker('project website visited', demo)}>Live Demo</a>
          </div>
        </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio
