import React, { Component } from 'react'

export default class Blog extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-blog" data-section="blog">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">Read</span>
								<h2 className="colorlib-heading">Recent Blogs</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="https://blog.technozion.org/the-future/" className="blog-img"><img src="images/blog1.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
									<div className="desc">
										<span><small>September 22, 2018 </small> | <small> TECHNOZION </small> | <small> <i className="icon-bubble3" /> 4</small></span>
										<h3><a href="https://blog.technozion.org/the-future/">THE FUTURE</a></h3>
										<p>What it is to meet the future? Do you think it's doing space travel in a time machine, meeting future self and feeling astounding? It is all fictional which is not the engineer's perspective. Meeting the future is not going in search of it, it's essentially creating it</p>
									</div>
								</div>
							</div>
							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
								<div className="blog-entry">
									<a href="https://blog.technozion.org/guest-blog-going-for-gold/" className="blog-img"><img src="images/blog2.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
									<div className="desc">
										<span><small>October 6, 2017 </small> | <small> TECHNOZION </small> | <small> <i className="icon-bubble3" /> 4</small></span>
										<h3><a href="https://blog.technozion.org/guest-blog-going-for-gold/">GOING FOR GOLD</a></h3>
										<p>"GOLD IS A VALUABLE METAL.". Yes, we all know that.But whom should we appreciate for that metal? If we just rejoinder it as Mother Earth then we will be called as biased.</p>
									</div>
								</div>
							</div>
							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="https://snhblog.home.blog/2018/12/09/science-as-a-hobby-art-of-life/" className="blog-img"><img src="images/blog3.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
									<div className="desc">
										<span><small>December 9, 2018 </small> | <small> SNH BLOG </small> | <small> <i className="icon-bubble3" /> 4</small></span>
										<h3><a href="https://snhblog.home.blog/2018/12/09/science-as-a-hobby-art-of-life/">Science as a hobby</a></h3>
										<p>Science isn’t just a subject in College. It’s a part of our everyday lives. Science may be an integral part of your life and you may not even realize it. Science is all around us – it’s in our homes, the vehicles we drive, outside in nature and in the foods we eat. </p>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}
