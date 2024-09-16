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
                                    <p>Accomplished Full-Stack Developer with 5+ years of experience contributing to end-to-end product lifecycles, from design and development to thorough unit testing. Skilled in leveraging a wide range of technologies including React, JavaScript, HTML, CSS, Java, Oracle ATG, Spring Boot, Jest, Junit, Mockito and Git to deliver scalable and high-performance solutions.</p>
                                    <p>With a strong foundation in engineering and a passion for software development, my career reflects a dedication to building innovative solutions and delivering impactful results. I have successfully contributed to various projects, leading initiatives that improve system functionality, optimize performance, and enhance user experience across different domains.</p>
                                    <p>Passionate about continuous learning and staying ahead of emerging technologies, I bring analytical expertise and a collaborative approach to solving complex challenges, optimizing workflows, and enhancing user experiences. I thrive in dynamic, team-oriented environments where I can contribute to ambitious projects and drive both technical and functional success.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="colorlib-about" data-section="skills">
            <div className="colorlib-narrow-content">
                <Heading mainHeading={'What I do?'} subHeading={'Here are some of my expertise'} />
                <div className="row row-pt-md">
                    {
                        aboutData.slice(0,3).map((data) => (
                            <div key={data.id} className="col-md-4 text-center">
                                <div className={`services ${data.iconColour}`}>
                                    <span className="icon"><i className={data.iconName} /></span>
                                    <div className="desc">
                                        <h3>{data.heading}</h3>
                                        <>{data.descriptions.map((description, index) => <p key={index}>{description}</p>)}</>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="row row-pt-md">
                    {
                        aboutData.slice(3).map((data) => (
                            <div key={data.id} className="col-md-4 text-center">
                                <div className={`services ${data.iconColour}`}>
                                    <span className="icon"><i className={data.iconName} /></span>
                                    <div className="desc">
                                        <h3>{data.heading}</h3>
                                        <>{data.descriptions.map((description, index) => <p key={index}>{description}</p>)}</>
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
