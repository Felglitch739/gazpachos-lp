import fachadaImg from '../fotos/FachadaGazpachos.png';
import ribeyeImg from '../fotos/ribeye_skillet_bueno.png';
import caldoImg from '../fotos/caldo_red.jpg';
import tuetanosImg from '../fotos/tuetanosbueno.png';
import lemonPieImg from '../fotos/lemon_pie.jpg';
import chevesImg from '../fotos/fotocheves.jpg';

const images = [
  {
    src: fachadaImg,
    alt: "Gazpacho's Facade",
    className: "col-span-2 row-span-2"
  },
  {
    src: ribeyeImg,
    alt: "Ribeye Skillet",
    className: "col-span-1 row-span-2"
  },
  {
    src: caldoImg,
    alt: "Pozole Rojo",
    className: "col-span-1 row-span-1"
  },
  {
    src: lemonPieImg,
    alt: "Lemon Pie",
    className: "col-span-1 row-span-1"
  },
  {
    src: tuetanosImg,
    alt: "Tuétanos (Bone Marrow)",
    className: "col-span-2 row-span-1"
  },
  {
    src: chevesImg,
    alt: "Ice cold beers",
    className: "col-span-2 row-span-1 md:col-span-2"
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

      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-6 md:grid-rows-3 gap-4 md:gap-6 h-[1000px] md:h-[700px]">
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
