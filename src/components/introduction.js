import React from "react";
import {introData} from '../utils/constants';

export const Introduction = () => (
  <div>
    <section id="colorlib-hero" className="js-fullheight" data-section="home">
      <div className="flexslider js-fullheight">
        <ul className="slides">
          {
            introData && introData.map((data) => (
              <li key={data.id} style={{ backgroundImage: data.backgroundImage }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <h1 className="intro-color">{data.introLine1}<br />{data.introLine2}</h1>
                        <p><a className="btn btn-primary btn-learn" href={data.buttonLink} target="_blank" rel="noopener noreferrer">{data.buttonLabel}<i className={data.buttonIcon  } /></a></p>
                      </div>
                    </div>
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
