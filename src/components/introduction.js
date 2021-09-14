import React from "react";

export const Introduction = () => (
  <div>
    <section id="colorlib-hero" className="js-fullheight" data-section="home">
      <div className="flexslider js-fullheight">
        <ul className="slides">
          <li style={{ backgroundImage: 'url(images/pavan32.PNG)' }}>
            <div className="overlay" />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                  <div className="slider-text-inner js-fullheight">
                    <div className="desc">
                      <h1 className="intro-color">Hi! <br />I'm Pavan</h1>
                      <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/168vIxEhan6dr0wkqBEl0K32bcxnrIS1l/view?usp=sharing" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li style={{ backgroundImage: 'url(images/pavan6.PNG)' }}>
            <div className="overlay" />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                  <div className="slider-text-inner">
                    <div className="desc">
                      <h1 className="text-white">I love building<br /> THINGS !!</h1>
                      <p><a className="btn btn-primary btn-learn" href="https://github.com/PavanKrishnaGadde" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li style={{ backgroundImage: 'url(images/pavan22.PNG)' }}>
            <div className="overlay" />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                  <div className="slider-text-inner">
                    <div className="desc">
                      <h1>I often <br />Write ... </h1>
                      <p><a className="btn btn-primary btn-learn" href="https://snhblog.home.blog/" target="_blank" rel="noopener noreferrer">View Blog <i className="icon-book" /></a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
)
