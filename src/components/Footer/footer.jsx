import React, { memo } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./footer.css";

const Footer = memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a
            href="https://www.linkedin.com/in/victor-wdfs"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2"
            aria-label="LinkedIn profile of Víctor Moreno García"
          >
            <FaLinkedin
              size={50}
              className="contact-icon p-2"
              aria-hidden="true"
            />
          </a>
          <a
            href="https://github.com/oliverio89"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2"
            aria-label="GitHub profile of Víctor Moreno García"
          >
            <FaGithub
              size={50}
              className="contact-icon p-2"
              aria-hidden="true"
            />
          </a>
        </section>
      </div>

      <div className="text-center p-3">
        © {currentYear} Copyright:{" "}
        <a href="https://www.linkedin.com/in/victor-wdfs/">
          Víctor Moreno García
        </a>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
