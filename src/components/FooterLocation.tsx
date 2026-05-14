import { MapPin, Phone, Clock } from 'lucide-react';

const FooterLocation = () => {
  return (
    <footer id="location" className="relative z-10 glass border-t-0 mt-12 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Info Column */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-serif mb-8 text-brand-amber">Visit Gazpacho's</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-brand-amber mt-1 mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-lg mb-1">Address</h4>
                <p className="text-gray-300 font-light">2451 Pablo Kisel Blvd, Suite B -1<br/>Brownsville, TX 78526</p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="w-6 h-6 text-brand-amber mt-1 mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-lg mb-1">Hours</h4>
                <p className="text-gray-300 font-light leading-relaxed">
                  <span className="inline-block w-28">Mon - Wed:</span> 11:00 AM - 9:00 PM<br/>
                  <span className="inline-block w-28">Thu - Sat:</span> 11:00 AM - 10:00 PM<br/>
                  <span className="inline-block w-28">Sunday:</span> 11:00 AM - 5:00 PM
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="w-6 h-6 text-brand-amber mt-1 mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-lg mb-1">Contact</h4>
                <p className="text-gray-300 font-light">(956) 546-9200</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand-amber transition-colors text-white font-medium text-sm">
              IG
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand-amber transition-colors text-white font-medium text-sm">
              FB
            </a>
          </div>
        </div>

        {/* Map Column */}
        <div className="h-[400px] w-full rounded-2xl overflow-hidden glass-card p-2 relative">
          {/* Iframe Placeholder - Ready for actual Google Maps embed link */}
          <iframe 
            src="https://www.google.com/maps?q=2451+Pablo+Kisel+Blvd+suite+B+-1,+Brownsville,+TX+78526&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0, borderRadius: '0.75rem' }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-brand-glass-border text-center text-sm text-gray-400 font-light">
        <p>&copy; {new Date().getFullYear()} Gazpacho's Restaurant & Bar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterLocation;
