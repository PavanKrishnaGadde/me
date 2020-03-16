import React from "react";

export default class ContactMe extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (
            <section className="colorlib-blog mb-4 contact-form" data-section="contactme">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-12 col-md-offset-9 col-md-pull-9 animate-box" data-animate-effect="fadeInRight">
                            <span className="heading-meta">Contact</span>
                            <h2 className="colorlib-heading">Contact Me</h2>
                            <p className="w-responsive mx-auto mb-5">Do you have any questions or suggestions? Please feel free to contact me.</p>
                            <div className="row">
                                <div className={`col-md-9 mb-md-0 mb-5 ${status === "ERROR" ? 'animated shake' : ''}`}>
                                    <form
                                        onSubmit={this.submitForm}
                                        action="https://formspree.io/mrglpqbg"
                                        method="POST"
                                        id="contact-form"
                                        name="contact-form"
                                        className="form-wrapper"
                                    >
                                        {status === "SUCCESS" && <p className="message-sucsess animated bounceIn">
                                            <i className="icomoon icon-checkmark-2"></i>
                                            <span>Thanks for contacting!</span>
                                        </p>}
                                        {status === "ERROR" && <p className="message-failure">Enter valid information.</p>}
                                        <div className="row">
                                            <div className="col-md-8">
                                                <div className="md-form mb-0">
                                                    <label for="subject" className="">Name</label>
                                                    <input type="text" id="name" name="name" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-8">
                                                <div className="md-form mb-0">
                                                    <label for="email" className="">Your email</label>
                                                    <input type="text" id="email" name="email" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="md-form">
                                                    <label for="message">Your message</label>
                                                    <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                                </div>

                                            </div>
                                        </div>
                                        <button className="submit-button">Send</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const request = new XMLHttpRequest();
        request.open(form.method, form.action);
        request.setRequestHeader("Accept", "application/json");
        request.onreadystatechange = () => {
            if (request.readyState !== XMLHttpRequest.DONE) return;
            if (request.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        request.send(data);
    }
}