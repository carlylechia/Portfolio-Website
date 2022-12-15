import React from 'react';
import CV from '../../assets/CV.pdf';
import useGAEventsTracker from '../../hooks/useGAEventsTracker';

const CTA = () => {
  const GAEventsTracker = useGAEventsTracker('CV downloaded.');
  return (
    <div className="cta">
      <a href={CV} download className='btn' onClick={e => GAEventsTracker(CV)}>Download Resumé</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA;
