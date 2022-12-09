import { useState } from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';
import {BsChevronUp} from 'react-icons/bs';
import {BsChevronDown} from 'react-icons/bs';

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
              <p>Gather and evaluate user requirements in collaboration with product managers and engineers.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Illustrate design ideas using storyboards, process flows and sitemaps.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design graphic user interface elements, like menus, tabs and widgets.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Identify and troubleshoot UX problems (e.g. responsiveness).</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Adhere to style standards on fonts, colors and images.</p>
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
              <BiCheck className='service__list-icon' />
              <span>
                <p className={details === 'first' ? 'title' : ''}>Custom Website Development</p>
                <small className={details === 'first' ? 'show' : 'no-show'}>I can build your website from scratch. All you need to do is provide me all the data I need, and consider it done. To start from scratch, you will need a complete and comprehensive SWOT analysis of your business and your competitors. Find out what makes your rival website stand out and compare this to your strengths and weaknesses. On top of that, you will also need the logo, design, color branding, and images.
                <BsChevronUp className='service__arrows' title='show less' onClick={() => {setDetails('');}}/></small>
              </span>
              <BsChevronDown className={details === 'first' ? 'no-show' : 'show service__arrows'} title='show more' onClick={() => {setDetails('first');}}/>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <span>
                <p className={details === 'second' ? 'title' : ''}>Thorough Website Maintenance</p>
                <small className={details === 'second' ? 'show' : 'no-show'}>Already have a website? Great! Your customers would not want to stay on a stale homepage. So, you have to keep your website fresh, trendy, and updated; and I can help you do that. Thorough website maintenance can potentially increase traffic, generate more leads, rank your website better, and build a more reliable brand.
                <BsChevronUp className='service__arrows' title='show less' onClick={() => {setDetails('');}}/></small>
              </span>
              <BsChevronDown className={details === 'second' ? 'no-show' : 'show service__arrows'} title='show more' onClick={() => {setDetails('second');}}/>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <span>
                <p className={details === 'third' ? 'title' : ''}>E-commerce Website Development</p>
                <small className={details === 'third' ? 'show' : 'no-show'}> Do you have a local business and are seeking to go digital? I am available to build your eCommerce site, which will be your online shop, and the online home of your business.
                <BsChevronUp className='service__arrows' title='show less' onClick={() => {setDetails('');}}/></small>
              </span>
              <BsChevronDown className={details === 'third' ? 'no-show' : 'show service__arrows'} title='show more' onClick={() => {setDetails('third');}}/>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <span>
                <p className={details === 'fourth' ? 'title' : ''}>Systems and Database Management</p>
                <small className={details === 'fourth' ? 'show' : 'no-show'}> Does your company deal in heavy data which constantly has to be managed, updated, and evaluated? Do you want to constantly improve your website's queries so as to make your site faster, and improve general user experience? I am your guy.
                <BsChevronUp className='service__arrows' title='show less' onClick={() => {setDetails('');}}/></small>
              </span>
              <BsChevronDown className={details === 'fourth' ? 'no-show' : 'show service__arrows'} title='show more' onClick={() => {setDetails('fourth');}}/>
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
              <p>Research industry-related topics.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Prepare well-structured drafts using digital publishing platforms.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create and distribute marketing copy to advertise our company and products.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Edit and proofread written pieces before publication.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Conduct keyword research and use SEO guidelines to optimize content.</p>
            </li>
          </ul>
        </article>

        {/* ========== END OF CONTENT CREATION ========== */}

      </div>
    </section>
  )
}

export default Services
