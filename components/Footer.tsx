import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-off-black border-t border-ocean/20 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/images/Chuck_Logo_White.svg"
                width={150}
                height={50}
                alt="Chuck Data Logo"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Chuck Data is an agentic data engineering tool built for Databricks that helps you build amazing customer-centric data models and workflows.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-limoncello transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-limoncello transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-limoncello transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-limoncello transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link href="#features" className="text-gray-400 hover:text-prime-teal transition-colors">Features</Link></li>
              <li><Link href="#how-it-works" className="text-gray-400 hover:text-prime-teal transition-colors">How It Works</Link></li>
              <li><Link href="#use-cases" className="text-gray-400 hover:text-prime-teal transition-colors">Use Cases</Link></li>
              <li><Link href="#pricing" className="text-gray-400 hover:text-prime-teal transition-colors">Pricing</Link></li>
              <li><Link href="#demo" className="text-gray-400 hover:text-prime-teal transition-colors">Watch Demo</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="https://docs.amperity.com" className="text-gray-400 hover:text-prime-teal transition-colors">Documentation</a></li>
              <li><a href="https://amperity.com/blog" className="text-gray-400 hover:text-prime-teal transition-colors">Blog</a></li>
              <li>
                <a href="https://discord.gg/amperity-chuck-data" target="_blank" rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-prime-teal transition-colors flex items-center gap-2">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.385-.39.77-.531 1.143a16.212 16.212 0 0 0-4.823 0 9.34 9.34 0 0 0-.54-1.143.077.077 0 0 0-.079-.036c-1.714.29-3.354.8-4.884 1.49a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 18.183 18.183 0 0 0 5.34 2.654.077.077 0 0 0 .083-.026c.456-.608.856-1.251 1.195-1.92a.074.074 0 0 0-.04-.104 11.95 11.95 0 0 1-1.681-.794.076.076 0 0 1-.007-.126c.11-.083.223-.17.33-.258a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .078.009c.108.088.22.175.33.258a.076.076 0 0 1-.006.126c-.535.313-1.095.576-1.682.795a.075.075 0 0 0-.04.103c.35.668.748 1.31 1.195 1.92a.075.075 0 0 0 .083.028 18.153 18.153 0 0 0 5.346-2.655.077.077 0 0 0 .032-.055c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.33c-1.051 0-1.919-.957-1.919-2.133 0-1.175.859-2.132 1.919-2.132 1.069 0 1.937.948 1.92 2.132 0 1.176-.86 2.133-1.92 2.133zm7.096 0c-1.05 0-1.92-.957-1.92-2.133 0-1.175.86-2.132 1.92-2.132 1.069 0 1.937.948 1.92 2.132 0 1.176-.851 2.133-1.92 2.133z" />
                  </svg>
                  Discord Community
                </a>
              </li>
              <li>
                <a href="https://github.com/amperity/chuck-data" target="_blank" rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-prime-teal transition-colors flex items-center gap-2">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub Repository
                </a>
              </li>
              <li><a href="https://github.com/amperity/chuck-data/issues" className="text-gray-400 hover:text-prime-teal transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="https://amperity.com/company" className="text-gray-400 hover:text-prime-teal transition-colors">About Us</a></li>
              <li><a href="https://amperity.com/careers" className="text-gray-400 hover:text-prime-teal transition-colors">Careers</a></li>
              <li><a href="https://amperity.com/contact" className="text-gray-400 hover:text-prime-teal transition-colors">Contact</a></li>
              <li><a href="https://amperity.com/legal" className="text-gray-400 hover:text-prime-teal transition-colors">Privacy Policy</a></li>
              <li><a href="https://amperity.com/legal" className="text-gray-400 hover:text-prime-teal transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-ocean/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">© {new Date().getFullYear()} Chuck Data. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex items-center gap-6">
            <a 
              href="https://www.databricks.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <span className="text-gray-400">Built for</span>
              <Image 
                src="/images/databricks/primary-lockup-one-color-white-rgb.svg"
                width={100}
                height={24}
                alt="Databricks"
              />
            </a>
            <a 
              href="https://www.amperity.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2"
            >
              <span className="text-gray-400">Powered by</span>
              <Image 
                src="/images/amperity/Amperity_Logo_Primary_Horiz_Dark_Bgs.svg"
                width={100}
                height={24}
                alt="Amperity"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;