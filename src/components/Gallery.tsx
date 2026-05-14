const images = [
  {
    src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop",
    alt: "Wood-fired steak",
    className: "col-span-1 row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=800&auto=format&fit=crop",
    alt: "Burger with fries",
    className: "col-span-1 row-span-2 md:col-span-1 md:row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=800&auto=format&fit=crop",
    alt: "Craft cocktail",
    className: "col-span-1 row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
    alt: "Elegant drink",
    className: "col-span-1 row-span-2 md:col-span-2 md:row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
    alt: "Gourmet dish",
    className: "col-span-1 row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    alt: "Restaurant interior",
    className: "col-span-2 row-span-1 md:col-span-1 md:row-span-1"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <span className="text-brand-amber text-sm uppercase tracking-[0.3em] font-medium mb-4 block">
          Follow us on Facebook
        </span>
        <h2 className="text-4xl md:text-5xl font-serif mb-4">Gallery</h2>
        <div className="w-24 h-1 bg-brand-amber mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 md:grid-rows-3 gap-4 md:gap-6 h-[800px] md:h-[600px]">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`glass-card overflow-hidden rounded-xl group relative ${image.className}`}
          >
            <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a 
          href="https://www.facebook.com/GazpachosRestaurant" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-gray-300 hover:text-brand-amber transition-colors uppercase text-sm font-medium tracking-wide"
        >
          <span>See more on Facebook</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </a>
      </div>
    </section>
  );
};

export default Gallery;
