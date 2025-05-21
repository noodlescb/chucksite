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

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <motion.a
              href="#signup"
              className="bg-gradient-to-r from-limoncello to-amp-yellow text-off-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
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