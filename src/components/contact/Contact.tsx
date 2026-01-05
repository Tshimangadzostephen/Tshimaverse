import "./Contact.css";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState<string | null>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    const formData = new FormData(form.current);
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const messageText = formData.get("messageText")?.toString().trim();

    if (!name || !email || !messageText) {
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

  useEffect(() => {
    const isDesktop = window.innerWidth > 1024;

    if (!isDesktop) return;

    const ctx = gsap.context(() => {
      // Hero text animation
      gsap.fromTo(
        heroTextRef.current,
        { opacity: 0, x: -80, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroTextRef.current,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Form animation
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: 80, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Form groups stagger
      gsap.fromTo(
        ".contact__form-group",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 75%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Submit button
      gsap.fromTo(
        ".contact__submit-btn",
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.7,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 70%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Social icons
      gsap.fromTo(
        ".contact__social-link",
        { opacity: 0, scale: 0, rotation: -180 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: socialRef.current,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="contact section" id="contact">
      <div className="contact__container container">
        <h2 className="section__title">Contact Me</h2>
        <span className="section__subtitle">Let's work together</span>
        
        <div className="contact__content">
          {/* Left: Hero Text - Desktop Only */}
          <div className="contact__hero" ref={heroTextRef}>
            <h2 className="contact__hero-text">
              <span className="contact__hero-light">Say Hi!</span> and tell me
              about your idea.
            </h2>
            <p className="contact__hero-subtitle">
              Got a project in mind? 
              <br/>
              Reach out and let’s chat.
            </p>
          </div>

          {/* Right: Form */}
          <div className="contact__form-wrapper">
            <form className="contact__form" ref={formRef} onSubmit={sendEmail}>
              <div className="contact__form-group">
                <label className="contact__form-label">Name*</label>
                <input
                  type="text"
                  name="name"
                  className="contact__form-input"
                  placeholder="Hello..."
                  required
                />
              </div>

              <div className="contact__form-group">
                <label className="contact__form-label">Email*</label>
                <input
                  type="email"
                  name="email"
                  className="contact__form-input"
                  placeholder="Where can I reply?"
                  required
                />
              </div>

              <div className="contact__form-group">
                <label className="contact__form-label">Message*</label>
                <textarea
                  name="messageText"
                  className="contact__form-input contact__form-textarea"
                  rows={6}
                  placeholder="I want to build some..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact__submit-btn">
                Submit →
              </button>

              {message && <p className="contact__message">{message}</p>}
            </form>

            <div className="contact__social" ref={socialRef}>
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
        </div>
      </div>
    </section>
  );
};

export default Contact;