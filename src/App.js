import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow w-full fixed top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-500">Dhiraj Portfolio</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:text-blue-500">About</a></li>
              <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white"
      >
        <h2 className="text-4xl font-bold">Hi, I'm Dhiraj Pramod Badgujar</h2>
        <p className="mt-4 text-lg">Software Engineer | Web Developer</p>
        <a
          href="#contact"
          className="mt-6 px-6 py-3 bg-white text-blue-500 font-semibold rounded shadow hover:bg-gray-100"
        >
          Contact Me
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-6">About Me</h3>
          <p className="text-center text-gray-700">
            I'm a Software Engineer with expertise in developing enterprise-level applications using React, Spring Boot, and more. 
            Passionate about building efficient, user-friendly web applications.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-6">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded shadow">
              <h4 className="font-bold">Project 1</h4>
              <p className="text-sm text-gray-600">Description of the project.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded shadow">
              <h4 className="font-bold">Project 2</h4>
              <p className="text-sm text-gray-600">Description of the project.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded shadow">
              <h4 className="font-bold">Project 3</h4>
              <p className="text-sm text-gray-600">Description of the project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-6">Contact Me</h3>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com"
              className="text-gray-700 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-700 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="mailto:dhiraj@example.com"
              className="text-gray-700 hover:text-blue-500"
            >
              <FaEnvelope size={30} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-gray-800 text-white text-center">
        <p>© {new Date().getFullYear()} Dhiraj Pramod Badgujar. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
