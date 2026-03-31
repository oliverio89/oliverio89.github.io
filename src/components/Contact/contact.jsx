import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMail, FiSend, FiArrowRight } from 'react-icons/fi';
import './contact.css';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | done | error

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', name, email, message }),
    })
      .then(() => {
        setStatus('done');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch(() => setStatus('error'));
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
          <span className="section-eyebrow">Contacto</span>
          <h2 className="section-title">
            ¿Tienes un proyecto?
            <br />
            <span className="gradient-text">Hablemos.</span>
          </h2>
          <p className="section-desc">
            Estoy disponible para proyectos freelance, colaboraciones o posiciones senior.
            Escríbeme y te respondo en 24 horas.
          </p>
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
            {status === 'done' ? (
              <div className="contact__success">
                <FiSend size={32} className="contact__success-icon" />
                <h3>¡Mensaje enviado!</h3>
                <p>Te responderé lo antes posible. Gracias por contactarme.</p>
                <button className="btn-ghost" onClick={() => setStatus('idle')}>
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form
                name="contact"
                onSubmit={handleSubmit}
                className="contact__form"
              >
                <div className="contact__field">
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    required
                    autoComplete="off"
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="email">Correo electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Cuéntame en qué puedo ayudarte..."
                    rows={5}
                    required
                  />
                </div>

                {status === 'error' && (
                  <p className="contact__error">
                    Algo salió mal. Escríbeme directamente a oliverio89@gmail.com
                  </p>
                )}

                <button
                  type="submit"
                  className="btn-primary contact__submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Enviando...' : (
                    <>Enviar <FiArrowRight /></>
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
              <h3 className="contact__info-title">Conectemos</h3>
              <p className="contact__info-text">
                Siempre abierto a nuevas oportunidades, proyectos interesantes
                y conversaciones sobre tecnología.
              </p>

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
