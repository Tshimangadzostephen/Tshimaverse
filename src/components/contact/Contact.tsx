import "./Contact.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    const formData = new FormData(form.current);
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const messageText = formData.get("message")?.toString().trim();

    if (!name && !email && !messageText) {
      setMessage("⚠️ Please fill in all fields before sending.");
      return;
    }

    emailjs
      .sendForm("service_tpyx75a", "template_zzwed5d", form.current, {
        publicKey: "_4mSo5h_Ruf9Y-Ts_",
      })
      .then(
        () => {
          setMessage("✅ Your message has been sent!");
          form.current?.reset();
        },
        (error) => {
          setMessage("❌ Failed to send message. Please try again.");
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact__container container">
        <h2 className="contact__title">Contact</h2>
        
        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <div className="contact__form-group">
            <label className="contact__form-label">Name</label>
            <input
              type="text"
              name="name"
              className="contact__form-input"
              required
            />
          </div>

          <div className="contact__form-group">
            <label className="contact__form-label">Email</label>
            <input
              type="email"
              name="email"
              className="contact__form-input"
              required
            />
          </div>

          <div className="contact__form-group">
            <label className="contact__form-label">Message</label>
            <textarea
              name="messageText"
              className="contact__form-input contact__form-textarea"
              rows={6}
              required
            ></textarea>
          </div>

          <button type="submit" className="contact__submit-btn">
            Send Message
          </button>
          
          {message && <p className="contact__message">{message}</p>}
        </form>

        <div className="contact__social">
          <a
            href="mailto:tshimangadzo.munzhelele@icloud.com"
            className="contact__social-link"
            title="Email"
          >
            <i className="bx bx-mail-send"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=+27799691833&text=Hello, from tshimaverse!"
            className="contact__social-link"
            title="WhatsApp"
          >
            <i className="bx bxl-whatsapp"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/tshimangadzo-munzhelele/"
            className="contact__social-link"
            title="LinkedIn"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;