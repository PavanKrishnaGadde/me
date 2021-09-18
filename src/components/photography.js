import { photographyData } from '../utils/constants';
import { Heading } from '../common/Heading';
import { Link } from "react-router-dom";

export const Photography = () => (
	<div>
		<section className="colorlib-work" data-section="photography">
			<div className="colorlib-narrow-content">
				<Heading mainHeading={'My Work'} subHeading={'Recent Clicks'} />
				<div className="row">
					{photographyData && photographyData.slice(3).map((data) => (
						<div key={data.id} className="col-md-4">
							<div className="project" style={{ backgroundImage: `url(${data.imageUrl})` }}>
								<div className="desc">
									<div className="con">
										<h3><a href="work.html">Click {data.id}</a></h3>
										<span>{data.name}</span>
										<p className="icon">
											<span><a href="https://www.instagram.com/illustrator.pk"><i className="icon-share3" /></a></span>
											<span><a href="https://www.instagram.com/illustrator.pk"><i className="icon-eye" /> 100</a></span>
											<span><a href="https://www.instagram.com/illustrator.pk"><i className="icon-heart" /> 49</a></span>
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="row">
					<div className="col-md-4">
						<Link to="/photography"><button className="btn btn-primary btn-lg btn-load-more">Load More<i className="icon-reload" /></button></Link>
					</div>
				</div>
			</div>
		</section>
	</div>
)
