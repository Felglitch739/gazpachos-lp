import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { menuData, categories } from '../data/menuData';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const InteractiveMenu = () => {
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section id="menu" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Menu</h2>
        <div className="w-24 h-1 bg-brand-amber mx-auto rounded-full"></div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-6 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 ${
              activeTab === category 
                ? 'bg-brand-amber text-white shadow-lg shadow-brand-amber/20' 
                : 'glass text-gray-300 hover:text-white hover:border-brand-amber/50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <motion.div 
        key={activeTab} // This key triggers the animation again when the tab changes
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
      >
        {menuData[activeTab].map((item) => (
          <motion.div 
            variants={itemVariants}
            key={item.id} 
            className="glass-card p-6 md:p-8 rounded-xl hover:border-brand-amber/30 transition-colors group"
          >
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-serif text-brand-amber group-hover:text-white transition-colors">{item.name}</h3>
              <span className="text-lg font-medium text-white">{item.price}</span>
            </div>
            <p className="text-gray-400 font-light leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default InteractiveMenu;
