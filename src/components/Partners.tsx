import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Image from './Image';

const partners = [
  {
    id: 1,
    name: 'Bank Indonesia',
    logo: 'https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?ixlib=rb-1.2.1',
    role: 'Koordinasi kebijakan moneter dan pengendalian inflasi nasional',
  },
  {
    id: 2,
    name: 'Otoritas Jasa Keuangan',
    logo: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1',
    role: 'Pengawasan sektor jasa keuangan dan stabilitas sistem keuangan',
  },
  {
    id: 3,
    name: 'Pemerintah Daerah',
    logo: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1',
    role: 'Implementasi kebijakan dan program pengendalian inflasi di tingkat daerah',
  },
  {
    id: 4,
    name: 'Badan Pusat Statistik',
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1',
    role: 'Penyediaan data statistik inflasi dan indikator ekonomi',
  },
];

const Partners = () => {
  const controls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      await controls.start({
        x: [0, -100 * partners.length],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      });
    };

    animate();
  }, [controls]);

  return (
    <section className="py-16 bg-gray-50" id="partners">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-fluid-3xl font-bold text-gray-900 mb-8 text-center">
            Mitra Kerja
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner) => (
              <motion.div
                key={partner.id}
                className="card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-6">
                  <div className="aspect-[2/1] relative mb-4">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain"
                      breakpoints={[
                        { min: 1024, width: '25vw' },
                        { min: 768, width: '50vw' },
                        { min: 0, width: '100vw' },
                      ]}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {partner.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Berkolaborasi untuk mewujudkan stabilitas harga dan kesejahteraan masyarakat
            </p>
            <div className="relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10" />
              <div className="flex items-center gap-8 py-4 overflow-hidden">
                <motion.div
                  className="flex items-center gap-8"
                  animate={controls}
                >
                  {[...partners, ...partners].map((partner, index) => (
                    <Image
                      key={`${partner.id}-${index}`}
                      src={partner.logo}
                      alt={partner.name}
                      className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-200"
                      breakpoints={[{ min: 0, width: '100px' }]}
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners; 