import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <footer class="text-center">
      <div class="container p-4 pb-0">
        <section class="mb-4">
          <a
            href="https://www.linkedin.com/in/victor-wdfs"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2"
          >
            <FaLinkedin size={50} className="contact-icon p-2" />
          </a>
          <a
            href="https://github.com/oliverio89"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2"
          >
            <FaGithub size={50} className="contact-icon p-2" />
          </a>
        </section>
      </div>

      <div class="text-center p-3">
        © 2023 Copyright <span>:</span> <span></span>
        <a href="https://www.linkedin.com/in/victor-wdfs/">
          Víctor Moreno García
        </a>
      </div>
    </footer>
  );
}

export default Footer;
