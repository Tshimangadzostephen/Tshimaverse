import "./Contact.css";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState<string | null>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    // Only run animations on desktop
    const isDesktop = window.innerWidth > 1024;

    if (!isDesktop) return; // Skip animations on mobile/tablet

    const ctx = gsap.context(() => {
      // Title animation - fade and slide down
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            end: "top 30%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Form animation - slide from left with fade
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: -80, scale: 0.95 },
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

      // Form groups animation - stagger from bottom
      gsap.fromTo(
        ".contact__form-group",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 75%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Input fields animation - slide from right
      gsap.fromTo(
        ".contact__form-input",
        {
          opacity: 0,
          x: 30,
        },
        {
          opacity: 1,
          x: 0,
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

      // Submit button animation - pop in with bounce
      gsap.fromTo(
        ".contact__submit-btn",
        {
          opacity: 0,
          scale: 0.5,
          y: 30,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 70%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Social links container animation - slide from right
      gsap.fromTo(
        socialRef.current,
        {
          opacity: 0,
          x: 80,
          scale: 0.9,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: socialRef.current,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Individual social icons - stagger rotate and scale
      gsap.fromTo(
        ".contact__social-link",
        {
          opacity: 0,
          scale: 0,
          rotation: -180,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: socialRef.current,
            start: "top 75%",
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
        <h2 className="contact__title" ref={titleRef}>Contact Me</h2>
        
        <form className="contact__form" ref={formRef} onSubmit={sendEmail}>
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
    </section>
  );
};

export default Contact;