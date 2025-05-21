import { motion } from 'framer-motion';

interface StepCardProps {
  number: string | number;
  title: string;
  description: string;
  isActive?: boolean;
}

const StepCard = ({ number, title, description, isActive = false }: StepCardProps) => {
  return (
    <motion.div 
      className={`relative p-6 rounded-xl transition-all ${
        isActive 
          ? 'bg-gradient-to-br from-dusk to-midnight border border-ocean/40' 
          : 'bg-anvil/50 hover:bg-dusk/50'
      }`}
      whileHover={{ scale: isActive ? 1 : 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 ${
        isActive 
          ? 'bg-gradient-to-r from-limoncello to-amp-yellow text-off-black' 
          : 'bg-ocean/30 text-white'
      }`}>
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

const CodeBlock = () => {
  return (
    <motion.div 
      className="bg-off-black rounded-xl border border-ocean/40 p-4 font-mono text-sm overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex items-center gap-2 mb-4 text-xs text-gray-400">
        <div className="w-3 h-3 rounded-full bg-deep-red"></div>
        <div className="w-3 h-3 rounded-full bg-deep-orange"></div>
        <div className="w-3 h-3 rounded-full bg-deep-green"></div>
        <span className="ml-2">chuck-data-cli</span>
      </div>
      
      <div className="space-y-2 text-gray-300">
        <div>
          <span className="text-ocean">chuck &gt;</span> connect to databricks
        </div>
        <div className="text-gray-400">Connected to Databricks workspace: my-workspace.cloud.databricks.com</div>
        
        <div>
          <span className="text-ocean">chuck &gt;</span> list tables catalog.customer_data
        </div>
        <div className="text-gray-400">Found 3 tables in customer_data:</div>
        <div className="text-gray-400 pl-2">- customer_profiles</div>
        <div className="text-gray-400 pl-2">- transactions</div>
        <div className="text-gray-400 pl-2">- web_events</div>
        
        <div>
          <span className="text-ocean">chuck &gt;</span> build identity keychain
        </div>
        <div className="text-gray-400">Building identity keychain...</div>
        <div className="text-gray-400">Analyzing table schemas and relationships</div>
        <div className="text-gray-400">Detecting potential identity columns</div>
        <div className="text-prime-teal">✓ Identity keychain created with 4 identity keys</div>
        <div className="text-gray-400">- customer_id</div>
        <div className="text-gray-400">- email (PII detected)</div>
        <div className="text-gray-400">- device_id</div>
        <div className="text-gray-400">- account_number</div>
        
        <div className="mt-4">
          <span className="text-ocean">chuck &gt;</span> <span className="text-limoncello">_</span>
        </div>
      </div>
    </motion.div>
  );
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-off-black to-midnight">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-prime-teal to-limoncello">
                How Chuck Works
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Simplify your data engineering workflow with a conversational AI agent that understands your Databricks environment.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <StepCard 
              number="1"
              title="Connect to Databricks"
              description="Authentication with Databricks using personal access tokens or SSO, connecting Chuck directly to your workspace."
              isActive={true}
            />
            
            <StepCard 
              number="2"
              title="Explore Your Data Resources"
              description="Browse Unity Catalog resources, list available tables, schemas, and SQL warehouses with simple commands."
            />
            
            <StepCard 
              number="3"
              title="Build Data Models"
              description="Use natural language to ask Chuck to build customer-centric data models and identity keychains."
            />
            
            <StepCard 
              number="4"
              title="Automate PII Detection"
              description="Automatically tag and classify personally identifiable information in your tables using advanced AI."
            />
            
            <StepCard 
              number="5"
              title="Generate Workflows"
              description="Create data transformation pipelines and workflows based on your requirements and best practices."
            />
          </div>
          
          <div className="lg:sticky lg:top-32">
            <CodeBlock />
            
            <motion.div 
              className="mt-8 bg-gradient-to-br from-dusk to-midnight p-6 rounded-xl border border-ocean/40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-xl font-bold mb-3 text-white">Built for Data Engineering Teams</h3>
              <p className="text-gray-300 mb-4">
                Chuck integrates seamlessly with your existing Databricks infrastructure, providing an intuitive interface for complex data operations without requiring extensive setup or configuration.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-6">
                <div className="px-4 py-2 rounded-full bg-ocean/20 text-prime-teal text-sm">Unity Catalog</div>
                <div className="px-4 py-2 rounded-full bg-ocean/20 text-prime-teal text-sm">SQL Warehouses</div>
                <div className="px-4 py-2 rounded-full bg-ocean/20 text-prime-teal text-sm">PII Detection</div>
                <div className="px-4 py-2 rounded-full bg-ocean/20 text-prime-teal text-sm">Identity Resolution</div>
                <div className="px-4 py-2 rounded-full bg-ocean/20 text-prime-teal text-sm">Workflow Automation</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;