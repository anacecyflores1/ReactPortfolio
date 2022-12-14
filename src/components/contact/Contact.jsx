import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nxwwtpg",
        "template_5eoh87w",
        form.current,
        "tzVVborwBB_OB8BOW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5> </h5>
      <h1>Contact Me</h1>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>anacecyflores1@gmail.com</h5>
            <a
              href="mailto:anacecyflores1@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send me a  message!
            </a>
          </article>
          <article className="contact__option">
            <CgWebsite className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Ana Cecy Flores</h5>
            <a
              href="https://www.linkedin.com/in/anacecyflores/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit my profile
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Me a Message!
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
