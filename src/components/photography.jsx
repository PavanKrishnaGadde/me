import React, { Component } from 'react'
import { photographyData } from '../utils/constants';


export default class Photography extends Component {
	constructor(props) {
        super(props);
        this.state = {
            visiblePhotoCount: 3
        };
    }

	onLoadMore = () => {
		this.setState({visiblePhotoCount: this.state.visiblePhotoCount+3});
	}
	render() {
		return (
			<div>
				<section className="colorlib-work" data-section="photography">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Clicks</h2>
							</div>
						</div>
						<div className="row">
							{
								photographyData && photographyData.filter(d => d.id <= this.state.visiblePhotoCount).map((data) => (
									<div key={data.id} className={`col-md-4 ${data.id<=3 ? 'animate-box':''}`} data-animate-effect={data.animation}>
										<div className="project" style={{ backgroundImage: `url(${data.imageUrl})` }}>
											<div className="desc">
												<div className="con">
													<h3><a href="work.html">Click {data.id}</a></h3>
													<span>{data.name}</span>
													<p className="icon">
														<span><a href="https://www.instagram.com/illustrator.pk"><i className="icon-share3" /></a></span>
														<span><a><i className="icon-eye" /> 100</a></span>
														<span><a><i className="icon-heart" /> 49</a></span>
													</p>
												</div>
											</div>
										</div>
									</div>
								))
							}
						</div>
						{this.state.visiblePhotoCount<photographyData.length && <div className="row">
							<div className="col-md-4 animate-box">
								<button onClick={this.onLoadMore} className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></button>
							</div>
						</div>}
					</div>
				</section>
			</div>
		)
	}
}
