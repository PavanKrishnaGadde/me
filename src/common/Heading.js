export const Heading = ({mainHeading, subHeading}) => (
    <div className="row">
        <div className="col-md-6 col-md-offset-3 col-md-pull-3">
            <span className="heading-meta">{mainHeading}</span>
            <h2 className="colorlib-heading">{subHeading}</h2>
        </div>
    </div>
)