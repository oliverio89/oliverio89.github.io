import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail, FiSend, FiArrowRight } from "react-icons/fi";
import { LanguageContext } from "../../contexts/LanguageContext.js";
import "./contact.css";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Contact() {
  const { language, translations } = useContext(LanguageContext);
  const t = translations[language];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => {
        setStatus("done");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(() => setStatus("error"));
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        {/* Header */}
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">{t.contactEyebrow}</span>
          <h2 className="section-title">
            {t.contactTitle}
            <br />
            <span className="gradient-text">{t.contactTitleGradient}</span>
          </h2>
          <p className="section-desc">{t.contactDesc}</p>
        </motion.div>

        <div className="contact__grid">
          {/* Form */}
          <motion.div
            className="contact__form-wrap"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {status === "done" ? (
              <div className="contact__success">
                <FiSend size={32} className="contact__success-icon" />
                <h3>{t.contactSuccessTitle}</h3>
                <p>{t.contactSuccessDesc}</p>
                <button className="btn-ghost" onClick={() => setStatus("idle")}>
                  {t.contactAnotherMessage}
                </button>
              </div>
            ) : (
              <form
                name="contact"
                onSubmit={handleSubmit}
                className="contact__form"
              >
                <div className="contact__field">
                  <label htmlFor="name">{t.contactNameLabel}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.contactNamePlaceholder}
                    required
                    autoComplete="off"
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="email">{t.contactEmailLabel}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.contactEmailPlaceholder}
                    required
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="message">{t.contactMessageLabel}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.contactMessagePlaceholder}
                    rows={5}
                    required
                  />
                </div>

                {status === "error" && (
                  <p className="contact__error">{t.contactError}</p>
                )}

                <button
                  type="submit"
                  className="btn-primary contact__submit"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    t.contactSending
                  ) : (
                    <>
                      {t.contactSend} <FiArrowRight />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Side info */}
          <motion.div
            className="contact__side"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact__info-card">
              <h3 className="contact__info-title">{t.contactConnect}</h3>
              <p className="contact__info-text">{t.contactConnectDesc}</p>

              <div className="contact__links">
                <a
                  href="https://www.linkedin.com/in/victor-wdfs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <FaLinkedin size={20} />
                  <span>LinkedIn</span>
                  <FiArrowRight size={14} className="contact-link__arrow" />
                </a>
                <a
                  href="https://github.com/oliverio89"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <FaGithub size={20} />
                  <span>GitHub</span>
                  <FiArrowRight size={14} className="contact-link__arrow" />
                </a>
                <a
                  href="mailto:oliverio89@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <FiMail size={20} />
                  <span>oliverio89@gmail.com</span>
                  <FiArrowRight size={14} className="contact-link__arrow" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
