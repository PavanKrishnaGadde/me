import {useState} from 'react';
import { Heading } from '../common/Heading';

export const ContactMe = () => {
    
    const [status, setStatus] = useState('');

    const getFromInput = (label, id, type, isTextArea = false) => {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="contact-input">
                        <label className="label" htmlFor={type} >{label}</label>
                        {isTextArea ? <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                    : <input type="text" id={id} name={id} className="form-control" />}
                    </div>
                </div>
            </div>
        )
    };

    const getMessage = (status) => {
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
    };

    const submitForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        const request = new XMLHttpRequest();
        request.open(form.method, form.action);
        request.setRequestHeader("Accept", "application/json");
        request.onreadystatechange = () => {
            if (request.readyState !== XMLHttpRequest.DONE) return;
            if (request.status === 200) {
                form.reset();
                setStatus('SUCCESS');
            } else {
                setStatus('ERROR');
            }
        };
        request.send(data);
    };

    return (
        <section className="colorlib-blog mb-4 contact-form" data-section="contactme">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-12 col-md-offset-9 col-md-pull-9" >
                        <Heading mainHeading={'Contact'} subHeading={'Contact Me'} />
                        <p className="w-responsive mx-auto mb-5">Do you have any questions or suggestions? Please feel free to contact me.</p>
                        <div className="row">
                            <div className={`col-md-9 mb-md-0 mb-5 ${status === "ERROR" ? 'animated shake' : ''}`}>
                                <form
                                    onSubmit={submitForm}
                                    action="https://formspree.io/mrglpqbg"
                                    method="POST"
                                    id="contact-form"
                                    name="contact-form"
                                    className="form-wrapper"
                                >
                                    {getMessage(status)}
                                    {getFromInput('Name', 'name', 'subject')}
                                    {getFromInput('Your email', 'email', 'email')}
                                    {getFromInput('Your message', 'message', 'message', true)}
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