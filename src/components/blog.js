import { blogData } from '../utils/constants';
import { Heading } from '../common/Heading';
import { Link } from "react-router-dom";

export const Blog = () => (
	<div>
		<section className="colorlib-blog" data-section="blog">
			<div className="colorlib-narrow-content">
				<Heading mainHeading={'Read'} subHeading={'Recent Blogs'} />
				<div className="row">
					{blogData && blogData.map((data) => (
						<div key={data.id} className="col-md-4 col-sm-6">
							<div className="blog-entry">
								<a href={data.refUrl} className="blog-img"><img src={data.imageUrl} className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
								<div className="desc">
									<span><small>{data.data}</small> | <small> {data.blogName} </small> | <small> <i className="icon-bubble3" /> 4</small></span>
									<h3><a href={data.refUrl}>{data.name}</a></h3>
									<p>{data.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="row">
					<div className="col-md-4">
						<Link to="/blog"><button className="btn btn-primary btn-lg btn-load-more">Load More<i className="icon-reload" /></button></Link>
					</div>
				</div>
			</div>
		</section>
	</div>
)
