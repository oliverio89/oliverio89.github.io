import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";
import "./contact.css";

function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Reemplazar con tu Service ID de EmailJS
        "YOUR_TEMPLATE_ID", // Reemplazar con tu Template ID de EmailJS
        e.target,
        "YOUR_USER_ID" // Reemplazar con tu User ID de EmailJS
      )
      .then(
        (result) => {
          alert("¡Mensaje enviado con éxito!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          alert("Error al enviar el mensaje: " + error.text);
        }
      );
  }

  return (
    <div className="contact-links border d-flex align-items-center justify-content-center">
      <section id="contact" className="relative">
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <form
            onSubmit={handleSubmit}
            className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
          >
            <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
              ¡Contrátame!
            </h2>
            <p className="leading-relaxed mb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
              suscipit officia aspernatur veritatis. Asperiores, aliquid?
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-400"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>

      <a
        href="https://www.linkedin.com/in/victor-wdfs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="contact-icon" />
      </a>
      <a
        href="https://github.com/oliverio89"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="contact-icon" />
      </a>
      <a
        href="mailto:victor.rmngarcia@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelope className="contact-icon" />
      </a>
    </div>
  );
}

export default Contact;
