import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import user from '../../images/icons/user.png';
import email from '../../images/icons/email.png';
import phone from '../../images/icons/telephone.png';
import adress from '../../images/icons/adress.png';
import Button from "../../components/Button";

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
            <div className="container text-black">
                <div>
                    <h5 className="text-4xl font-medium text-center mb-20 title">Contact me</h5>
                </div>
                <div className="md:flex contact-main justify-between">
                    <div className="mb-8">
                        <h5 className="text-2xl font-semibold mb-5">Contact me to get your work done</h5>
                        <div className="flex items-center mb-3">
                            <img src={user} className="mr-7" alt="man" />
                            <div>
                                <h5 className="text-xl font-medium">Name</h5>
                                <h5 className="name text-xl">Muhammad Abu Bakar</h5>
                            </div>
                        </div>
                        <div className="flex items-center mb-3">
                            <img src={phone} className="mr-7" alt="man-" />
                            <div>
                                <h5 className="text-xl font-medium">Phone</h5>
                                <h5 className="phone">+880 1857-927912</h5>
                            </div>
                        </div>
                        <div className="flex items-center mb-3">
                            <img src={email} className="mr-7" alt="man-" />
                            <div>
                                <h5 className="text-xl font-medium">Email</h5>
                                <h5 className="email">abubakarsiddique7912 @gmail.com</h5>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <img src={adress} className="mr-7" alt="man" />
                            <div>
                                <h5 className="text-xl font-medium">Adress</h5>
                                <h5 className="adress">Fatickchari, Chattogram, Bangladesh</h5>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:max-w-[630px] contact">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="lg:flex gap-3 mb-3">
                                <div className="form-control w-full mb-3 lg:mb-0">
                                    <input type="text" name="name" placeholder="Your Name" />
                                </div>
                                <div className="form-control w-full">
                                    <input type="text" name="email" placeholder="Your Email" />
                                </div>
                            </div>
                            <div className="form-control mb-3">
                                <input type="text" name="name" placeholder="Subject" />
                            </div>
                            <div className="form-control">
                                <textarea className="h-36 pt-2" name="message" placeholder="Type a massage..."></textarea>
                            </div>
                            <div className="mt-4">
                                <Button type="submit">send message</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;