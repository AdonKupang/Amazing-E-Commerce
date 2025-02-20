import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InflationChart from './components/InflationChart';
import Initiatives from './components/Initiatives';
import News from './components/News';
import Partners from './components/Partners';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Preload images for better performance
    const images = [
      // Add your critical images here
      'https://source.unsplash.com/random/800x600?meeting',
      'https://source.unsplash.com/random/800x600?market',
      'https://source.unsplash.com/random/800x600?seminar',
      'https://source.unsplash.com/random/800x600?cooperation',
    ];

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Hero />
        <div id="content">
          <InflationChart />
          <Initiatives />
          <News />
          <Partners />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
