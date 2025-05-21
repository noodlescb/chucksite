import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-off-black bg-opacity-95 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/Chuck_Logo_White.svg"
              width={150}
              height={50}
              alt="Chuck Data Logo"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link href="#features" className="text-white hover:text-prime-teal transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-white hover:text-prime-teal transition-colors">
              How It Works
            </Link>
            <Link href="#use-cases" className="text-white hover:text-prime-teal transition-colors">
              Use Cases
            </Link>
            <Link href="#pricing" className="text-white hover:text-prime-teal transition-colors">
              Pricing
            </Link>
          </nav>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-5">
            <a href="https://github.com/amperity/chuck-data" target="_blank" rel="noopener noreferrer" className="text-white hover:text-limoncello transition-colors">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://discord.gg/amperity-chuck-data" target="_blank" rel="noopener noreferrer" className="text-white hover:text-limoncello transition-colors">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.385-.39.77-.531 1.143a16.212 16.212 0 0 0-4.823 0 9.34 9.34 0 0 0-.54-1.143.077.077 0 0 0-.079-.036c-1.714.29-3.354.8-4.884 1.49a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 18.183 18.183 0 0 0 5.34 2.654.077.077 0 0 0 .083-.026c.456-.608.856-1.251 1.195-1.92a.074.074 0 0 0-.04-.104 11.95 11.95 0 0 1-1.681-.794.076.076 0 0 1-.007-.126c.11-.083.223-.17.33-.258a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .078.009c.108.088.22.175.33.258a.076.076 0 0 1-.006.126c-.535.313-1.095.576-1.682.795a.075.075 0 0 0-.04.103c.35.668.748 1.31 1.195 1.92a.075.075 0 0 0 .083.028 18.153 18.153 0 0 0 5.346-2.655.077.077 0 0 0 .032-.055c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.33c-1.051 0-1.919-.957-1.919-2.133 0-1.175.859-2.132 1.919-2.132 1.069 0 1.937.948 1.92 2.132 0 1.176-.86 2.133-1.92 2.133zm7.096 0c-1.05 0-1.92-.957-1.92-2.133 0-1.175.86-2.132 1.92-2.132 1.069 0 1.937.948 1.92 2.132 0 1.176-.851 2.133-1.92 2.133z" />
              </svg>
            </a>

            {/* CTA Button */}
            <motion.a
              href="#signup"
              className="bg-gradient-to-r from-limoncello to-amp-yellow text-off-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity ml-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-dusk"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <Link href="#features" className="text-white hover:text-prime-teal py-2" onClick={toggleMenu}>
              Features
            </Link>
            <Link href="#how-it-works" className="text-white hover:text-prime-teal py-2" onClick={toggleMenu}>
              How It Works
            </Link>
            <Link href="#use-cases" className="text-white hover:text-prime-teal py-2" onClick={toggleMenu}>
              Use Cases
            </Link>
            <Link href="#pricing" className="text-white hover:text-prime-teal py-2" onClick={toggleMenu}>
              Pricing
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <a href="https://github.com/amperity/chuck-data" target="_blank" rel="noopener noreferrer" className="text-white hover:text-limoncello transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://discord.gg/amperity-chuck-data" target="_blank" rel="noopener noreferrer" className="text-white hover:text-limoncello transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.385-.39.77-.531 1.143a16.212 16.212 0 0 0-4.823 0 9.34 9.34 0 0 0-.54-1.143.077.077 0 0 0-.079-.036c-1.714.29-3.354.8-4.884 1.49a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 18.183 18.183 0 0 0 5.34 2.654.077.077 0 0 0 .083-.026c.456-.608.856-1.251 1.195-1.92a.074.074 0 0 0-.04-.104 11.95 11.95 0 0 1-1.681-.794.076.076 0 0 1-.007-.126c.11-.083.223-.17.33-.258a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .078.009c.108.088.22.175.33.258a.076.076 0 0 1-.006.126c-.535.313-1.095.576-1.682.795a.075.075 0 0 0-.04.103c.35.668.748 1.31 1.195 1.92a.075.075 0 0 0 .083.028 18.153 18.153 0 0 0 5.346-2.655.077.077 0 0 0 .032-.055c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.33c-1.051 0-1.919-.957-1.919-2.133 0-1.175.859-2.132 1.919-2.132 1.069 0 1.937.948 1.92 2.132 0 1.176-.86 2.133-1.92 2.133zm7.096 0c-1.05 0-1.92-.957-1.92-2.133 0-1.175.86-2.132 1.92-2.132 1.069 0 1.937.948 1.92 2.132 0 1.176-.851 2.133-1.92 2.133z" />
                </svg>
              </a>
            </div>
            
            <motion.a
              href="#signup"
              className="bg-gradient-to-r from-limoncello to-amp-yellow text-off-black px-6 py-3 rounded-lg font-medium text-center"
              whileTap={{ scale: 0.98 }}
              onClick={toggleMenu}
            >
              Get Started
            </motion.a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;