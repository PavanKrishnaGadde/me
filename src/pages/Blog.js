import React, { Component } from 'react';
import { blogData } from '../utils/constants';
import { Link } from "react-router-dom";

export default class Blog extends Component {
	constructor(props) {
        super(props);
        this.state = {
            visibleBlogsCount: 3
        };
    }

	onLoadMore = () => {
		this.setState({visibleBlogsCount: this.state.visibleBlogsCount+3});
	}
	render() {
		return (
			<div>
				<section className="colorlib-blog" data-section="blog">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3" data-animate-effect="fadeInLeft">
								<span className="heading-meta">Read</span>
								<h2 className="colorlib-heading">Recent Blogs</h2>
							</div>
						</div>
						<div className="row">
							{
								blogData && blogData.filter(d => d.id <= this.state.visibleBlogsCount).map((data) => (
									<div className="col-md-4 col-sm-6" >
										<div className="blog-entry">
											<a href={data.refUrl} className="blog-img"><img src={data.imageUrl} className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
											<div className="desc">
												<span><small>{data.data}</small> | <small> {data.blogName} </small> | <small> <i className="icon-bubble3" /> 4</small></span>
												<h3><a href={data.refUrl}>{data.name}</a></h3>
												<p>{data.description}</p>
											</div>
										</div>
									</div>
								))
							}
						</div>
						{this.state.visibleBlogsCount<blogData.length || <div className="row">
							<div className="col-md-4">
								<Link to="/blog"><button onClick={this.onLoadMore} className="btn btn-primary btn-lg btn-load-more">Load More<i className="icon-reload" /></button></Link>
							</div>
						</div>}
					</div>
				</section>
			</div>
		)
	}
}
