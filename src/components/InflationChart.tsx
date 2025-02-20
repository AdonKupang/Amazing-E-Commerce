import { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { motion } from 'framer-motion';

// Mock data - replace with actual API data
const mockData = [
  { month: 'Jan', inflation: 3.15, food: 4.2, transport: 2.8 },
  { month: 'Feb', inflation: 3.23, food: 4.5, transport: 2.9 },
  { month: 'Mar', inflation: 3.47, food: 4.8, transport: 3.1 },
  { month: 'Apr', inflation: 3.56, food: 4.9, transport: 3.2 },
  { month: 'May', inflation: 3.32, food: 4.6, transport: 3.0 },
  { month: 'Jun', inflation: 3.28, food: 4.4, transport: 3.1 },
];

const regions = [
  'DKI Jakarta',
  'Jawa Barat',
  'Jawa Tengah',
  'Jawa Timur',
  'Sumatera Utara',
];

const InflationChart = () => {
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);

  return (
    <section className="py-16 bg-white" id="data">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Data Inflasi Daerah
          </h2>

          <div className="mb-6">
            <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2">
              Pilih Provinsi/Kota
            </label>
            <select
              id="region"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            >
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="inflation"
                  stroke="#0ea5e9"
                  strokeWidth={2}
                  name="Inflasi"
                />
                <Line
                  type="monotone"
                  dataKey="food"
                  stroke="#22c55e"
                  strokeWidth={2}
                  name="Pangan"
                />
                <Line
                  type="monotone"
                  dataKey="transport"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  name="Transportasi"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Inflasi Bulan Ini
              </h3>
              <p className="text-3xl font-bold text-primary-600">3.28%</p>
              <p className="text-sm text-gray-500">vs. 3.32% bulan lalu</p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Inflasi Pangan
              </h3>
              <p className="text-3xl font-bold text-secondary-600">4.4%</p>
              <p className="text-sm text-gray-500">Kontribusi terbesar</p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Proyeksi
              </h3>
              <p className="text-3xl font-bold text-yellow-600">3.1%</p>
              <p className="text-sm text-gray-500">Target akhir tahun</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InflationChart; 