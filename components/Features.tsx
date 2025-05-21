import Image from 'next/image';
import { motion } from 'framer-motion';

// Feature card component
const FeatureCard = ({ title, description, icon, delay = 0 }) => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-dusk to-off-black p-6 rounded-xl border border-ocean/30"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="bg-gradient-to-br from-ocean to-prime-teal p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      title: "Automated PII Detection",
      description: "Identify and classify personally identifiable information in your data automatically using advanced AI models.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
    },
    {
      title: "Unity Catalog Integration",
      description: "Seamlessly browse and work with your Unity Catalog resources including catalogs, schemas, and tables.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="M18.4 7.8L18.4 7.8"></path><path d="M15.4 10.8L15.4 10.8"></path><path d="M12.4 9.8L12.4 9.8"></path><path d="M9.4 14.8L9.4 14.8"></path><path d="M6.4 12.8L6.4 12.8"></path></svg>
    },
    {
      title: "Customer-Centric Models",
      description: "Build data models focused on your customer journey with powerful AI-assisted workflows.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    },
    {
      title: "Databricks Warehouses",
      description: "Manage SQL warehouses directly from Chuck with optimized performance and resource allocation.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
    },
    {
      title: "Identity Keychains",
      description: "Create and manage customer identity graphs across your data ecosystem with simple commands.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
    },
    {
      title: "Interactive CLI Experience",
      description: "Work efficiently with a modern command-line interface designed specifically for data engineering tasks.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-dusk/30 to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-prime-teal to-limoncello">
                Powerful Features
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Chuck Data transforms how you build and manage data models in Databricks with intelligent, 
              customer-focused tools and workflows.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="bg-gradient-to-br from-midnight to-dusk p-8 rounded-2xl border border-ocean/40 max-w-3xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-40 h-40 flex-shrink-0">
                <Image
                  src="/images/Chuck_Mascot.svg"
                  alt="Chuck Mascot"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">Meet Chuck, Your Data Agent</h3>
                <p className="text-gray-300 mb-4">
                  Chuck is your AI-powered assistant for Databricks, helping you build amazing 
                  customer-centric data models and workflows through simple, conversational commands.
                </p>
                <a href="#signup" className="text-limoncello hover:underline font-medium flex items-center">
                  Get started with Chuck
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;