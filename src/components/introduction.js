import { useState, useEffect } from 'react';
import {introData} from '../utils/constants';

export const Introduction = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex(prev => (prev + 1)%introData.length+1);
    }, [2000])

    return () => {
      clearTimeout(timer);
    }

  })

  return (
  <div>
    <section id="colorlib-hero" className="js-fullheight" data-section="home">
      <div className="flexslider js-fullheight">
        <ul className="slides">
          {
            introData && introData.map((data) => (
              <li key={data.id} style={{ display:  data.id === currentIndex ? 'block' : 'none', backgroundImage: data.backgroundImage, height: '100vh' }}>
                <div style={{opacity: data.id === currentIndex ? 1 : 0}} className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                <div className="slider-text-inner js-fullheight">
                <h1 className="intro-color">{data.introLine1}<br />{data.introLine2}</h1>
                <p><a className="btn btn-primary btn-learn" href={data.buttonLink} target="_blank" rel="noopener noreferrer">{data.buttonLabel}<i className={data.buttonIcon  } /></a></p> 
                </div>
                </div>   
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  </div>
)
}
