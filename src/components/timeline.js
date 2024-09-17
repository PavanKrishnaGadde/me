import { Heading } from '../common/Heading';

export const  Timeline = ({timelineData, mainHeading, subHeading, sectionId, start=0}) => (
  <div>
    <section className="colorlib-experience" id={sectionId} data-section={sectionId}>
      <div className="colorlib-narrow-content">
        <Heading mainHeading={mainHeading} subHeading={subHeading} />
        <div className="row">
          <div className="col-md-12">
            <div className="timeline-centered">
              {timelineData && timelineData.map((data) => (
                <article key={data.id} className="timeline-entry">
                  <div className="timeline-entry-inner">
                    <div className={`timeline-icon color-${start + data.id}`}>
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>{data.position} <span>{data.time}</span></h2>
                      <>{data.descriptions.map((description, index) => <p key={index}>{description}</p>)}</>
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
