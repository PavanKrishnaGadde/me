import { Heading } from '../common/Heading';
import {aboutData} from '../utils/constants';

export const About = () => (
    <div>
        <section className="colorlib-about" data-section="about">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row row-bottom-padded-sm">
                            <div className="col-md-12">
                                <div className="about-desc">
                                    <Heading mainHeading={'About Me'} subHeading={'Who Am I?'} />
                                    <p>I'm a full-stack developer and computer programmer with an avid interest in Data Structures, Algorithms and Optimization. As a core programmer, I love taking challenges and love being part of the solution. </p>
                                    <p>Hands-on experience in Analysis, Development and Implementation. Solid Programming expertise in Java, JavaScript, Object Oriented analysis/methodologies. Enthusiastic team player, a fast learner with creative problem solving skills, good coding and communication skills. My Tech Stack includes - React/Redux, Springboot/Hibernate, Java/JavaScript/Html/CSS.</p>
                                    <p>Would be interested in getting exposure to domains providing intellectually challenging work in the field of computers for proving and enriching my knowledge and skills.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="colorlib-about">
            <div className="colorlib-narrow-content">
                <Heading mainHeading={'What I do?'} subHeading={'Here are some of my expertise'} />
                <div className="row row-pt-md">
                    {
                        aboutData.map((data) => (
                            <div key={data.id} className="col-md-4 text-center">
                                <div className={`services ${data.iconColour}`}>
                                    <span className="icon"><i className={data.iconName} /></span>
                                    <div className="desc">
                                        <h3>{data.heading}</h3>
                                        <p>{data.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    </div>
)
