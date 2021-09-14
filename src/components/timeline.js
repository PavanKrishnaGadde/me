import React from 'react'

import { timelineData } from '../utils/constants';

export const  Timeline = () => (
  <div>
    <section className="colorlib-experience" data-section="timeline">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-md-pull-3">
            <span className="heading-meta">highlights</span>
            <h2 className="colorlib-heading">Timeline</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="timeline-centered">
              {timelineData && timelineData.map((data) => (
                <article key={data.id} className="timeline-entry">
                  <div className="timeline-entry-inner">
                    <div className={`timeline-icon color-${data.id}`}>
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>{data.position} <span>{data.time}</span></h2>
                      <p>{data.description}</p>
                    </div>
                  </div>
                </article>
              ))}
              <article className="timeline-entry begin" data-animate-effect="fadeInBottom">
                <div className="timeline-entry-inner">
                  <div className="timeline-icon color-none">
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)
