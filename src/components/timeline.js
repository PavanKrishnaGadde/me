import { timelineData } from '../utils/constants';
import { Heading } from '../common/Heading';

export const  Timeline = () => (
  <div>
    <section className="colorlib-experience" data-section="timeline">
      <div className="colorlib-narrow-content">
        <Heading mainHeading={'Education and Experience'} subHeading={'Timeline'} />
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
              <article className="timeline-entry begin" >
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
