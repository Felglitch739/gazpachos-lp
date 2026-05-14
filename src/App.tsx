import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import OurStory from './components/OurStory';
import InteractiveMenu from './components/InteractiveMenu';
import FooterLocation from './components/FooterLocation';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark flex flex-col relative overflow-hidden">
      {/* Decorative background gradients for glassmorphism pop */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-rusty/20 blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-amber/10 blur-[120px] pointer-events-none"></div>
      
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <OurStory />
        <InteractiveMenu />
      </main>
      <FooterLocation />
    </div>
  );
}

export default App;
