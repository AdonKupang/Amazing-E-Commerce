import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const news = [
  {
    id: 1,
    title: 'TPID Gelar Rapat Koordinasi Pengendalian Inflasi',
    category: 'Kebijakan',
    date: '15 Feb 2024',
    image: 'https://source.unsplash.com/random/800x600?meeting',
    summary: 'Rapat koordinasi membahas strategi pengendalian inflasi dan evaluasi program yang telah berjalan.',
  },
  {
    id: 2,
    title: 'Harga Pangan Terpantau Stabil Menjelang Ramadan',
    category: 'Ekonomi',
    date: '14 Feb 2024',
    image: 'https://source.unsplash.com/random/800x600?market',
    summary: 'Hasil pemantauan menunjukkan harga bahan pokok masih dalam batas wajar di berbagai pasar tradisional.',
  },
  {
    id: 3,
    title: 'Sosialisasi Program Pasar Murah di 5 Kecamatan',
    category: 'Sosialisasi TPID',
    date: '13 Feb 2024',
    image: 'https://source.unsplash.com/random/800x600?seminar',
    summary: 'TPID melakukan sosialisasi program pasar murah yang akan dilaksanakan di 5 kecamatan prioritas.',
  },
  {
    id: 4,
    title: 'Kerjasama Antar Daerah untuk Stabilisasi Harga',
    category: 'Kebijakan',
    date: '12 Feb 2024',
    image: 'https://source.unsplash.com/random/800x600?cooperation',
    summary: 'Penandatanganan MoU kerjasama antar daerah dalam rangka stabilisasi harga dan pasokan.',
  },
];

const categories = ['Semua', 'Kebijakan', 'Ekonomi', 'Sosialisasi TPID'];

const News = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [currentSlide, setCurrentSlide] = useState(0);

  const filteredNews = news.filter(
    item => activeCategory === 'Semua' || item.category === activeCategory
  );

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === Math.ceil(filteredNews.length / 2) - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? Math.ceil(filteredNews.length / 2) - 1 : prev - 1
    );
  };

  return (
    <section className="py-16 bg-white" id="news">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Berita & Wawasan Terkini
          </h2>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{ x: `-${currentSlide * 100}%` }}
                transition={{ duration: 0.5 }}
              >
                {filteredNews.map((item) => (
                  <motion.div
                    key={item.id}
                    className="min-w-full md:min-w-[calc(50%-12px)]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="card h-full">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-medium text-primary-600">
                            {item.category}
                          </span>
                          <span className="text-sm text-gray-500">
                            {item.date}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {item.summary}
                        </p>
                        <button className="text-primary-600 hover:text-primary-700 font-medium">
                          Baca Selengkapnya
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {filteredNews.length > 2 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
                >
                  <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
                >
                  <ChevronRightIcon className="h-6 w-6 text-gray-600" />
                </button>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default News; 