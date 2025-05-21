import { motion } from 'framer-motion';

// Pricing feature indicator component
import Image from 'next/image';

interface FeatureItemProps {
  text: string;
  included?: boolean;
  specialText?: boolean;
}

const FeatureItem = ({ text, included = true, specialText = false }: FeatureItemProps) => {
  return (
    <div className="flex items-start py-2">
      {included ? (
        <svg className="h-6 w-6 text-limoncello mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="h-6 w-6 text-gray-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      )}
      {specialText && text.includes("Databricks") ? (
        <span className={`${included ? 'text-gray-200' : 'text-gray-500'} flex items-center`}>
          <span>
            {text.split("Databricks")[0]}
          </span>
          <span className="inline-flex items-center mx-1">
            <Image 
              src="/images/databricks/databricks-symbol-light.svg"
              width={16}
              height={16}
              alt="Databricks"
              className="mx-1"
            />
            Databricks
          </span>
          <span>
            {text.split("Databricks")[1] || ""}
          </span>
        </span>
      ) : (
        <span className={`${included ? 'text-gray-200' : 'text-gray-500'}`}>{text}</span>
      )}
    </div>
  );
};

// Pricing card component
interface FeatureType {
  text: string;
  included: boolean;
  specialText?: boolean;
}

interface CTAType {
  text: string;
  link: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: FeatureType[];
  cta: CTAType;
  popular?: boolean;
  delay?: number;
}

const PricingCard = ({ title, price, description, features, cta, popular = false, delay = 0 }: PricingCardProps) => {
  return (
    <motion.div
      className={`rounded-2xl border ${
        popular ? 'border-limoncello bg-gradient-to-br from-dusk to-midnight' : 'border-ocean/30 bg-anvil/70'
      } p-8 relative`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-limoncello text-off-black px-4 py-1 rounded-full font-medium">
          Most Popular
        </div>
      )}
      
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      
      <div className="mb-6">
        <span className="text-4xl font-bold text-white">{price}</span>
        {price !== 'Custom' && <span className="text-gray-400 ml-2">/month</span>}
      </div>
      
      <p className="text-gray-300 mb-6 min-h-[60px]">{description}</p>
      
      <div className="space-y-1 mb-8">
        {features.map((feature, i) => (
          <FeatureItem 
            key={i} 
            text={feature.text} 
            included={feature.included}
            specialText={feature.specialText} 
          />
        ))}
      </div>
      
      <motion.a
        href={cta.link}
        className={`block text-center py-3 px-8 rounded-lg font-medium ${
          popular
            ? 'bg-gradient-to-r from-limoncello to-amp-yellow text-off-black'
            : 'bg-ocean/70 text-white hover:bg-ocean'
        } transition-colors`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {cta.text}
      </motion.a>
    </motion.div>
  );
};

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Free Tier",
      price: "$0",
      description: "Try Chuck Data with limited features to see how it can transform your data workflows.",
      features: [
        { text: "Databricks connectivity", included: true, specialText: true },
        { text: "Unity Catalog browsing", included: true },
        { text: "Basic data exploration", included: true },
        { text: "Semantic tagging framework", included: true },
        { text: "PII detection", included: true },
        { text: "Customer-centric modeling", included: true },
        { text: "Identity keychains (up to 1M records)", included: true },
        { text: "Stable ID algorithm", included: false },
        { text: "Advanced security features", included: false },
        { text: "Enterprise support", included: false }
      ],
      cta: {
        text: "Signup for free",
        link: "#signup"
      }
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for organizations with advanced data engineering needs.",
      features: [
        { text: "All features of the Free Tier", included: true },
        { text: "Stable ID algorithm", included: true },
        { text: "Unlimited Stitch records (1 credit per 100k records above 1M)", included: true },
        { text: "SSO & SAML integration", included: true },
        { text: "Dedicated account manager", included: true },
        { text: "Enterprise support", included: true },
        { text: "SLA guarantees", included: true }
      ],
      cta: {
        text: "Contact Sales",
        link: "#contact"
      },
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-midnight to-off-black">
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
                Simple, Transparent Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that's right for your data engineering needs
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              cta={plan.cta}
              popular={plan.popular}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-gray-400">
            All plans include access to regular feature updates and the Chuck Data community.
            <br />Need a custom solution? <a href="#contact" className="text-prime-teal hover:underline">Contact our sales team</a> for personalized pricing.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;