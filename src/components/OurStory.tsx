import { motion } from 'framer-motion';

const OurStory = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-8">
            <span className="text-brand-amber text-sm uppercase tracking-[0.3em] font-medium mb-4 block">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">Our Story</h2>
            <div className="w-16 h-1 bg-brand-amber rounded-full"></div>
          </div>
          
          <div className="space-y-6 text-gray-300 font-light leading-relaxed">
            <p>
              Gazpacho's has been a part of the Brownsville and Matamoros community for many years. 
              The cuisine of this wonderful place is serving dishes from exquisite parts of the world, 
              including Spain, Italy, Mexico and France.
            </p>
            <p>
              The international cuisine and the quality of the food make of this restaurant a unique 
              culinary experience at a reasonable price. Our fine wine and beer selection will be perfect 
              to complement the list of international dishes we offer. Our staff is here to provide you 
              with the most wonderful dining experience and dishes with fresh ingredients.
            </p>
            <p>
              Our restaurant provides an atmosphere that is chill and elegant, which is great for a family 
              reunion, a perfect date night with that special someone, or just a perfect for a quality night 
              out with friends.
            </p>
            <p>
              We in Gazpacho's have been involved in the Brownsville and Matamoros community through out 
              the years and hope to continue serving a variety of dishes with an outstanding quality. 
              We hope to see you here soon.
            </p>
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="glass-card p-3 rounded-2xl rotate-2 hover:rotate-0 transition-transform duration-500 z-10 relative">
            <img 
              src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1000&auto=format&fit=crop" 
              alt="Elegant restaurant interior" 
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
          
          <div className="absolute -bottom-10 -left-10 w-2/3 glass-card p-2 rounded-2xl -rotate-3 hover:rotate-0 transition-transform duration-500 z-20">
            <img 
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop" 
              alt="Craft cocktail" 
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
          
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-brand-amber/5 blur-[100px]"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default OurStory;
