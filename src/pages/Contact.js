import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const sendEmail = e => {
        e.preventDefault();
        emailjs.sendForm('service_u2iu2je', 'template_5ryfkeg', form.current, 'Wr5blfc57T2kF-y4f')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <section id="contact">
            <div className="container">
                <div className="hero bg-base-200 py-10">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Message</span>
                                    </label>
                                    <textarea className="input input-bordered h-28" name="message" placeholder="type massage"></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary" type="submit">Send Massage</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;