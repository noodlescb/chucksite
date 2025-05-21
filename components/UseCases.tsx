import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const useCases = [
  {
    id: 'identity-resolution',
    title: 'Customer Identity Resolution',
    description: 
      'Create a unified view of your customers by connecting identifiers across multiple systems and touchpoints. Chuck builds identity keychains that link customer data from various sources using advanced matching algorithms.',
    benefits: [
      'Connect customer data across disparate systems',
      'Create unified customer profiles',
      'Enable personalized customer experiences',
      'Support compliance with data privacy regulations'
    ],
    command: 'chuck > build identity keychain catalog.customer_data'
  },
  {
    id: 'pii-detection',
    title: 'Automated PII Detection',
    description: 
      'Automatically identify, classify, and tag personally identifiable information in your data lake. Chuck uses advanced AI models to detect sensitive customer data that may be subject to privacy regulations.',
    benefits: [
      'Reduce manual effort in PII tagging',
      'Support compliance with GDPR, CCPA, and other regulations',
      'Create automated data governance processes',
      'Enable data minimization and protection strategies'
    ],
    command: 'chuck > profile catalog.schema.users --detect-pii'
  },
  {
    id: 'data-modeling',
    title: 'AI-Assisted Data Modeling',
    description: 
      'Leverage Chuck\'s AI capabilities to create optimal data models based on your business requirements and existing data structures. Build customer-centric models that support your analytics and operational needs.',
    benefits: [
      'Accelerate data model development',
      'Ensure models follow best practices',
      'Create customer-centric schemas',
      'Improve data accessibility for analysis'
    ],
    command: 'chuck > design customer dimension from catalog.customer_data.profiles'
  },
  {
    id: 'workflow-automation',
    title: 'Data Workflow Automation',
    description: 
      'Automate repetitive data engineering tasks with simple, conversational commands. Chuck can create, schedule, and monitor data workflows that transform, clean, and prepare your data.',
    benefits: [
      'Reduce manual coding for common data tasks',
      'Ensure consistent execution of data pipelines',
      'Document data transformations automatically',
      'Free up engineering time for higher-value work'
    ],
    command: 'chuck > create daily workflow to update customer profiles'
  }
];

const UseCases = () => {
  const [activeCase, setActiveCase] = useState(useCases[0]);

  return (
    <section id="use-cases" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-radial from-deep-purple/10 to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-radial from-deep-green/10 to-transparent opacity-20"></div>
      
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
                Use Cases
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Discover how Chuck Data streamlines complex data engineering tasks and unlocks new capabilities for your Databricks environment.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-dusk/50 rounded-xl p-4">
              {useCases.map((useCase) => (
                <motion.button
                  key={useCase.id}
                  className={`w-full text-left p-4 rounded-lg mb-2 transition-all ${
                    activeCase.id === useCase.id
                      ? 'bg-gradient-to-r from-limoncello/20 to-amp-yellow/10 border-l-4 border-limoncello'
                      : 'hover:bg-ocean/10'
                  }`}
                  onClick={() => setActiveCase(useCase)}
                  whileHover={{ x: activeCase.id === useCase.id ? 0 : 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className={`font-semibold ${
                    activeCase.id === useCase.id
                      ? 'text-limoncello'
                      : 'text-white'
                  }`}>
                    {useCase.title}
                  </h3>
                </motion.button>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-dusk to-midnight p-8 rounded-xl border border-ocean/40 h-full"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">{activeCase.title}</h3>
                <p className="text-gray-300 mb-6">{activeCase.description}</p>
                
                <h4 className="text-lg font-semibold text-prime-teal mb-3">Key Benefits</h4>
                <ul className="mb-6 space-y-2">
                  {activeCase.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-limoncello mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-200">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-prime-teal mb-3">Example Command</h4>
                  <div className="bg-off-black rounded-lg p-4 font-mono text-gray-300 overflow-x-auto">
                    {activeCase.command}
                  </div>
                </div>
                
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <a 
                    href="#demo" 
                    className="inline-block bg-gradient-to-r from-ocean to-prime-teal px-6 py-3 rounded-lg font-medium text-white hover:opacity-90 transition-opacity"
                  >
                    See it in action
                  </a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;