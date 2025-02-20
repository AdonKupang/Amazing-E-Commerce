import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  ShoppingCartIcon,
  TruckIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const initiatives = [
  {
    id: 1,
    title: 'Pemantauan Harga Pangan',
    icon: ChartBarIcon,
    description: 'Monitoring harga pangan di pasar tradisional dan modern untuk memastikan stabilitas harga dan ketersediaan barang.',
    details: 'Tim TPID melakukan pemantauan rutin terhadap harga-harga komoditas pangan strategis di berbagai pasar. Data yang dikumpulkan digunakan untuk mengidentifikasi tren harga dan potensi gangguan pasokan. Hasil pemantauan menjadi dasar pengambilan kebijakan pengendalian inflasi.',
  },
  {
    id: 2,
    title: 'Program Pasar Murah',
    icon: ShoppingCartIcon,
    description: 'Menyelenggarakan pasar murah secara berkala untuk memastikan akses masyarakat terhadap bahan pokok dengan harga terjangkau.',
    details: 'Program pasar murah dilaksanakan di lokasi-lokasi strategis dengan melibatkan pedagang dan distributor lokal. Harga jual ditetapkan lebih rendah dari harga pasar melalui subsidi dan kerjasama dengan berbagai pihak.',
  },
  {
    id: 3,
    title: 'Optimalisasi Distribusi',
    icon: TruckIcon,
    description: 'Perbaikan rantai distribusi untuk mengurangi disparitas harga antar wilayah.',
    details: 'Mengidentifikasi dan mengatasi bottleneck dalam rantai distribusi, memperbaiki infrastruktur logistik, dan mengembangkan sistem informasi distribusi barang untuk memperlancar arus barang antar wilayah.',
  },
  {
    id: 4,
    title: 'Kerjasama Antar Daerah',
    icon: UserGroupIcon,
    description: 'Menjalin kerjasama dengan daerah lain untuk menjamin pasokan dan stabilitas harga.',
    details: 'Membangun kesepakatan kerjasama antar daerah dalam hal penyediaan dan distribusi komoditas strategis. Termasuk pertukaran informasi pasar dan koordinasi kebijakan pengendalian inflasi.',
  },
];

const Initiatives = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50" id="initiatives">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Program & Kebijakan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {initiatives.map((initiative) => (
              <motion.div
                key={initiative.id}
                className="card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <initiative.icon className="h-8 w-8 text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {initiative.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {initiative.description}
                      </p>
                      <button
                        onClick={() => setExpandedId(
                          expandedId === initiative.id ? null : initiative.id
                        )}
                        className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                      >
                        {expandedId === initiative.id ? 'Tutup' : 'Baca Selengkapnya'}
                      </button>
                      
                      {expandedId === initiative.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 text-gray-600"
                        >
                          {initiative.details}
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Initiatives; 