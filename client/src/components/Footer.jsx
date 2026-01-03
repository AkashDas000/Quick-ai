import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-600 px-6 md:px-16 lg:px-24 xl:px-32 pt-14 mt-24 border-t border-gray-200">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-14 pb-12 border-b border-gray-300">
        
        {/* Brand */}
        <div className="max-w-md">
          <img src={assets.logo} alt="QuickAi logo" className="h-10" />
          <p className="mt-6 text-sm leading-relaxed">
            <strong>QuickAi</strong> empowers creators and businesses with
            intelligent AI-driven tools. From content writing to image
            generation, our platform helps you work smarter, faster, and more
            efficiently.
          </p>
        </div>

        {/* Links & Newsletter */}
        <div className="flex flex-col sm:flex-row gap-14 flex-1 justify-end">
          
          {/* Company Links */}
          <div>
            <h2 className="text-gray-900 font-semibold mb-4">Company</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="max-w-sm">
            <h2 className="text-gray-900 font-semibold mb-4">
              Subscribe to our newsletter
            </h2>
            <p className="text-sm mb-5">
              Get the latest updates, AI insights, and product announcements
              delivered straight to your inbox.
            </p>
            <form className="flex items-center gap-2">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary text-white text-sm px-4 py-2 rounded hover:opacity-90 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-xs md:text-sm mt-8 pb-6 text-gray-500 space-y-2">
        <p>
          © 2025{" "}
          <a
            href="https://www.linkedin.com/in/md-sumon9897/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary font-medium"
          >
            Akash Das
          </a>
          . All rights reserved.
        </p>

        <p>
          Portfolio:{" "}
          <a
            href="https://mohammadsumon.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            {/* mohammadsumon.vercel.app */}
          </a>{" "}
          | GitHub:{" "}
          <a
            href="https://github.com/sumu9897"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            {/* sumu9897 */}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;