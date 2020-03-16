import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img animated pulse" style={{ backgroundImage: 'url(images/pavan.jpg)' }} />
              <h1 id="colorlib-logo" className="animated headShake"><a href="index.html">Pavan Krishna Gadde</a></h1>
              <span className="email"><i className="icon-mail"></i><a href="mailto:pgadde@student.nitw.ac.in" target="_top">pgadde@student.nitw.ac.in</a></span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                  <li><a href="#" data-nav-section="projects">Photography</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>
                  <li><a href="#" data-nav-section="contactme">Contact Me</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu" className="animated flipInX contact-icons">
              <ul>
                <li><a href="https://www.facebook.com/G.P.Krishna.18" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://twitter.com/secularkrishna" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                <li><a href="https://www.instagram.com/_pavan_krishna_/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/pavankrishnagadde/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/PavanKrishnaGadde" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    )
  }
}
