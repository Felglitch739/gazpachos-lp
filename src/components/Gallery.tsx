import { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import fachadaImg from '../fotos/FachadaGazpachos.png';
import ribeyeImg from '../fotos/ribeye_skillet_bueno.png';
import caldoImg from '../fotos/caldo_red.jpg';
import tuetanosImg from '../fotos/tuetanosbueno.png';
import lemonPieImg from '../fotos/lemon_pie.jpg';
import chevesImg from '../fotos/fotocheves.jpg';

const images = [
  { src: fachadaImg, alt: "Gazpacho's Facade" },
  { src: ribeyeImg, alt: "Ribeye Skillet" },
  { src: caldoImg, alt: "Pozole Rojo" },
  { src: tuetanosImg, alt: "Tuétanos (Bone Marrow)" },
  { src: lemonPieImg, alt: "Lemon Pie" },
  { src: chevesImg, alt: "Ice cold beers" }
];

const Gallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <span className="text-brand-amber text-sm uppercase tracking-[0.3em] font-medium mb-4 block">
          Follow us on Facebook
        </span>
        <h2 className="text-4xl md:text-5xl font-serif mb-4">Gallery</h2>
        <div className="w-24 h-1 bg-brand-amber mx-auto rounded-full"></div>
      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
        {images.map((image, i) => (
          <motion.div 
            key={i} 
            className="glass-card overflow-hidden rounded-xl relative break-inside-avoid mb-6 cursor-pointer"
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "0 20px 40px rgba(0,0,0,0.8)",
              borderColor: "rgba(255,255,255,0.2)"
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={() => setIndex(i)}
          >
            <div className="absolute inset-0 bg-brand-dark/20 hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-auto block"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={images.map(img => ({ src: img.src, alt: img.alt }))}
        styles={{ 
          container: { backgroundColor: "rgba(0, 0, 0, 0.85)", backdropFilter: "blur(8px)" } 
        }}
      />
      
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
