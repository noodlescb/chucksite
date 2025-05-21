import { motion } from 'framer-motion';
import Image from 'next/image';

const CTA = () => {
  return (
    <section id="signup" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ocean/50 to-transparent"></div>
        <div className="absolute top-[10%] right-[10%] w-72 h-72 bg-deep-purple opacity-20 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-[20%] left-[5%] w-96 h-96 bg-deep-green opacity-10 blur-[120px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="bg-gradient-to-br from-midnight to-dusk p-10 md:p-16 rounded-2xl border border-ocean/30 shadow-xl relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 opacity-20">
              <svg width="300" height="300" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 40L80 40L80 80L40 80L40 40Z" fill="#54D3DE" fillOpacity="0.6" />
                <path d="M100 40L140 40L140 80L100 80L100 40Z" fill="#54D3DE" fillOpacity="0.6" />
                <path d="M160 40L200 40L200 80L160 80L160 40Z" fill="#EDFF95" fillOpacity="0.6" />
                <path d="M40 100L80 100L80 140L40 140L40 100Z" fill="#54D3DE" fillOpacity="0.6" />
                <path d="M100 100L140 100L140 140L100 140L100 100Z" fill="#EDFF95" fillOpacity="0.6" />
                <path d="M160 100L200 100L200 140L160 140L160 100Z" fill="#54D3DE" fillOpacity="0.6" />
                <path d="M40 160L80 160L80 200L40 200L40 160Z" fill="#EDFF95" fillOpacity="0.6" />
                <path d="M100 160L140 160L140 200L100 200L100 160Z" fill="#54D3DE" fillOpacity="0.6" />
                <path d="M160 160L200 160L200 200L160 200L160 160Z" fill="#54D3DE" fillOpacity="0.6" />
              </svg>
            </div>
            
            <div className="relative flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Ready to Transform Your <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-limoncello to-amp-yellow">
                    Data Engineering?
                  </span>
                </h2>
                
                <p className="text-xl text-gray-300 mb-8">
                  Join innovative teams who are building better data models and workflows with Chuck. 
                  Create your free account today and experience the future of data engineering.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="#subscribe"
                    className="bg-gradient-to-r from-limoncello to-amp-yellow text-off-black px-8 py-4 rounded-lg font-medium text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Create Free Account
                  </motion.a>
                  
                  <motion.a
                    href="#demo"
                    className="bg-transparent border border-ocean text-white px-8 py-4 rounded-lg font-medium text-center hover:bg-ocean/10 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Watch a Demo
                  </motion.a>
                </div>
              </div>
              
              <div className="md:w-1/3 flex-shrink-0">
                <div className="relative w-64 h-64">
                  <Image
                    src="/images/Chuck_Mascot.svg"
                    alt="Chuck Mascot"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;