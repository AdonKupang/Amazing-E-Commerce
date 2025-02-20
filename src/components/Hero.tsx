import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const scrollToContent = () => {
    const contentSection = document.getElementById('content');
    contentSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500 opacity-90" />
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:50px_50px]" />
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Tim Pengendali Inflasi Daerah
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-100 mb-8">
            Mewujudkan Stabilitas Harga untuk Kesejahteraan Masyarakat
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn bg-white text-primary-600 hover:bg-gray-100"
            onClick={scrollToContent}
          >
            Pelajari Lebih Lanjut
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDownIcon
          className="h-8 w-8 text-white cursor-pointer"
          onClick={scrollToContent}
        />
      </motion.div>
    </div>
  );
};

export default Hero; 