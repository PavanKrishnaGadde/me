import React from "react";

export default class ContactMe extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    getFromInput(label, id, type, isTextArea = false) {
        return (
            <div className="row">
                <div className="col-md-8">
                    <div className="md-form">
                        <label htmlFor={type} >{label}</label>
                        {isTextArea ? <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                    : <input type="text" id={id} name={id} className="form-control" />}
                    </div>
                </div>
            </div>
        )
    }

    getMessage(status) {
        if(status === "SUCCESS") {
            return (
                <p className="message-sucsess animated bounceIn">
                    <i className="icomoon icon-checkmark-2"></i>
                    <span>Thanks for contacting!</span>
                </p>
            );
        }
        if(status === "ERROR") {
            return <p className="message-failure">Enter valid information.</p>
        }
        return null;
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

    render() {
        const { status } = this.state;
        return (
            <section className="colorlib-blog mb-4 contact-form" data-section="contactme">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-12 col-md-offset-9 col-md-pull-9" >
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
                                        {this.getMessage(status)}
                                        {this.getFromInput('Name', 'name', 'subject')}
                                        {this.getFromInput('Your email', 'email', 'email')}
                                        {this.getFromInput('Your message', 'message', 'message', true)}
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
}