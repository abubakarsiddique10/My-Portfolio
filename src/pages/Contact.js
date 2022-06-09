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
        <section>
            <div className="container">
                <div class="hero bg-base-200 py-10">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <form ref={form} onSubmit={sendEmail}>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Your Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Your Name" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="text" name="email" placeholder="email" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Your Message</span>
                                    </label>
                                    <textarea className="input input-bordered h-28" name="message" placeholder="type massage"></textarea>
                                </div>
                                <div class="form-control mt-6">
                                    <button class="btn btn-primary" type="submit">Send Massage</button>
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