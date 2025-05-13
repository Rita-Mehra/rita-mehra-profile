"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white" : "bg-gradient-to-br from-white via-gray-100 to-white text-black"}`}>
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-opacity-80 backdrop-blur-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Rita Mehra</h1>
        <div className="flex gap-4 items-center">
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-8 sm:p-24 flex flex-col items-center text-center gap-12">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Image
            src="/images/portfolio-img.jpg"
            alt="Rita Mehra photo"
            width={200}
            height={200}
            className="rounded-full border-4 border-blue-500 shadow-xl hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse" />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
        >
          Rita Mehra
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl sm:text-2xl max-w-3xl leading-relaxed"
        >
          Full-Stack Developer & UI Specialist | 8+ Years of Experience in Building Scalable, Responsive, and Intuitive Web Applications Using React.js, Next.js, Node.js, and Modern UI Frameworks

Skilled in delivering pixel-perfect interfaces and end-to-end solutions for enterprise, SaaS, and AI-driven platforms. Proven expertise in both client-side and server-side development with a strong focus on performance, scalability, and user experience.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            className="px-6 py-3 text-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:scale-105 transition-transform shadow-lg"
            href="mailto:mehra.work24@gmail.com"
          >
            Contact Me
          </a>
          <a
            className="px-6 py-3 text-lg border border-blue-500 rounded-full hover:bg-blue-500/10 hover:scale-105 transition-all"
            href="/Rita_Mehra_Resume.pdf"
            target="_blank"
          >
            View Resume
          </a>
          <a
            className="px-6 py-3 text-lg border border-blue-500 rounded-full hover:bg-blue-500/10 hover:scale-105 transition-all"
            href="https://github.com/rita-mehra"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="px-6 py-3 text-lg border border-blue-500 rounded-full hover:bg-blue-500/10 hover:scale-105 transition-all"
            href="https://linkedin.com/in/rita-mehra"
            target="_blank"
          >
            LinkedIn
          </a>
        </motion.div>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id="skills"
          className="mt-16 w-full max-w-5xl"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8">Technical Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {["React.js", "Next.js", "AngularJS", "TypeScript", "Tailwind CSS", "Framer Motion", "JavaScript", "Jquery", "Cypress", "Node JS", "MongoDB", "Vercel", "Github/Git"].map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="p-4 bg-blue-500/10 rounded-lg text-center shadow-md"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Featured Brands Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 w-full max-w-5xl"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8">Featured Brands I've Worked With</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center bg-gray-200 rounded-md p-2">
            {["philips", "sobeys", "agilus", "beerstore", "disney", "logocuisine"].map((brand) => (
              <motion.div key={brand} whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                <Image src={`/images/${brand}.png`} alt={brand} width={100} height={40} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id="projects"
          className="mt-16 w-full max-w-5xl"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 bg-blue-500/10 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold">Enterprise SaaS Dashboard</h3>
              <p className="mt-2">Developed a responsive dashboard using React.js and Tailwind CSS for real-time data visualization.</p>
              {/* <a href="https://example.com" target="_blank" className="text-blue-400 hover:underline mt-4 block">View Project</a> */}
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 bg-blue-500/10 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold">AI-Powered Web App</h3>
              <p className="mt-2">Built a scalable web application with Next.js and GraphQL, integrating AI-driven features.</p>
              {/* <a href="https://example.com" target="_blank" className="text-blue-400 hover:underline mt-4 block">View Project</a> */}
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer id="contact" className="mt-24 p-8 bg-gray-900/50 text-gray-400 text-center">
        <h2 className="text-2xl font-semibold text-white mb-4">Get in Touch</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          />
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:scale-105 transition-transform">
            Send Message
          </button>
        </div>
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/rita-mehra" target="_blank" className="hover:text-blue-400 transition">GitHub</a>
          <a href="https://linkedin.com/in/rita-mehra" target="_blank" className="hover:text-blue-400 transition">LinkedIn</a>
          <a href="mailto:mehra.work24@gmail.com" className="hover:text-blue-400 transition">Email</a>
        </div>
        <p>© {new Date().getFullYear()} Rita Mehra. All rights reserved.</p>
      </footer>
    </div>
  );
}