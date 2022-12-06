import { useState } from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';
import {AiFillCloseCircle} from 'react-icons/ai';

const Services = () => {
  const [details, setDetails] = useState('');
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
          </ul>
        </article>

          {/* =========== END OF UI/UX ========== */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' onClick={() => {setDetails('first');}}/>
              <span>
                <p>Custom Website Development</p>
                <small className={details === 'first' ? 'show' : 'no-show'}>I can build your website from scratch. All you need to do is provide me all the data I need, and consider it done.
                <AiFillCloseCircle onClick={() => {setDetails('');}}/></small>
              </span>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
          </ul>
        </article>

        {/* ========= END OF WEB-DEVELOPMENT ========== */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
          </ul>
        </article>

        {/* ========== END OF CONTENT CREATION ========== */}

      </div>
    </section>
  )
}

export default Services
