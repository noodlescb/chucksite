import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background graphic elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[10%] right-[5%] w-64 h-64 rounded-full bg-lagoon opacity-20 blur-3xl"></div>
        <div className="absolute top-[40%] left-[10%] w-96 h-96 rounded-full bg-deep-purple opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[600px] h-[600px] rounded-full bg-deep-green opacity-5 blur-3xl"></div>
        
        {/* Code-like background elements */}
        <div className="absolute top-[20%] left-[5%] text-ocean opacity-20 font-mono text-sm hidden lg:block">
          {`>> connect to databricks`} <br />
          {`>> select model`} <br />
          {`>> list tables`} <br />
          {`>> profile my_database.customers`} <br />
        </div>
        
        <div className="absolute bottom-[20%] right-[5%] text-prime-teal opacity-20 font-mono text-sm hidden lg:block">
          {`"pii_columns": [`} <br />
          {`  "customer_email",`} <br />
          {`  "phone_number",`} <br />
          {`  "address",`} <br />
          {`  "ip_address"`} <br />
          {`]`} <br />
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-prime-teal to-amp-yellow">
                Build Better Data <br className="hidden md:block" /> with Chuck
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                The agentic data engineering tool for Databricks that builds amazing customer-centric data models and workflows.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a
                  href="#signup"
                  className="bg-gradient-to-r from-limoncello to-amp-yellow text-off-black px-8 py-4 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started Free
                </motion.a>
                
                <motion.a
                  href="#demo"
                  className="bg-transparent border-2 border-ocean text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-ocean hover:bg-opacity-20 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request Demo
                </motion.a>
              </div>
              
              <div className="mt-8 text-gray-400">
                <p>Built for Databricks | Trusted by data teams</p>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative bg-gradient-to-br from-dusk to-off-black p-2 rounded-2xl border border-ocean/30 shadow-xl">
              <Image 
                src="/images/chuckscreenshot.png"
                width={800}
                height={500}
                quality={90}
                alt="Chuck Data CLI Interface" 
                className="rounded-lg w-full"
                priority
              />
              <div className="absolute -bottom-5 -right-5 z-20">
                <a href="https://www.amperity.com" target="_blank" rel="noopener noreferrer" 
                   className="bg-gradient-to-r from-limoncello to-amp-yellow text-off-black py-2 px-4 rounded-full font-semibold text-sm flex items-center gap-2">
                  Powered by 
                  <Image 
                    src="/images/amperity/2022_Amperity_Logo_YellowAvatar.svg"
                    width={20}
                    height={20}
                    alt="Amperity"
                  />
                  Amperity
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;