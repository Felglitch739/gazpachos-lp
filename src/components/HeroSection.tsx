const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2000&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-brand-dark/70 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl px-4 mx-auto text-center mt-16">
        <div className="glass-card p-10 md:p-14 rounded-2xl flex flex-col items-center transform transition-transform hover:scale-[1.01] duration-500">
          <span className="text-brand-amber text-sm md:text-base uppercase tracking-[0.3em] font-medium mb-4 block">
            Authentic Mexican Heritage
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-md">
            A Taste of <br/> <span className="text-brand-amber italic">Tradition</span>
          </h1>
          <p className="text-gray-300 mb-8 text-lg max-w-xl mx-auto font-light leading-relaxed">
            Experience the rich flavors of Mexico right here in Texas. 
            Wood-fired dishes, handcrafted margaritas, and unforgettable moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#menu" 
              className="bg-brand-amber hover:bg-brand-rusty text-white px-8 py-4 rounded-sm transition-colors uppercase text-sm font-semibold tracking-wider w-full sm:w-auto"
            >
              Explore Menu
            </a>
            <a 
              href="#location" 
              className="glass hover:bg-white/10 text-white px-8 py-4 rounded-sm transition-colors uppercase text-sm font-semibold tracking-wider w-full sm:w-auto"
            >
              Find Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
