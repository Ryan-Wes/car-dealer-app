"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import carImage from '/public/logo.png';

export default function Home() {
  const [makes, setMakes] = useState([]);
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const fetchMakes = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/vehicles/GetMakesForVehicleType/car?format=json`);
        const data = await response.json();
        
        const sortedMakes = data.Results.sort((a, b) => a.MakeName.localeCompare(b.MakeName));
        setMakes(sortedMakes);
      } catch (error) {
        console.error('Error fetching vehicle makes:', error);
      }
    };
    fetchMakes();
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center pt-16">
      <div className="flex items-center mb-4 gap-x-2 -mt-40">
        <h1 className="text-5xl mt-2 font-extrabold text-white" style={{ fontFamily: 'Smooch' }}>Car Dealer</h1>
        <Image src={carImage} alt="Logo Image" width={50} height={50} className="rounded-lg" />
      </div>
      <div className="bg-neutral-900 p-6 rounded-lg shadow-lg w-full max-w-md mt-20">
        <h1 className="text-2xl font-bold mb-4 text-gray-200">Filter Vehicles</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-200">Vehicle Type</label>
            <select
              className="w-full mt-1 p-2 bg-neutral-950 text-gray-200 border border-gray-900 rounded focus:ring-indigo-600"
              onChange={(e) => setSelectedMake(e.target.value)}
            >
              <option className="bg-neutral-900 text-gray-500">Select type</option>
              {makes.map((make) => (
                <option key={make.MakeId} value={make.MakeId} className="bg-neutral-900 text-gray-300">
                  {make.MakeName}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-200">Model Year</label>
            <select
              className="w-full mt-1 p-2 bg-neutral-950 text-gray-200 border border-gray-900 rounded focus:ring-indigo-600"
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option className="bg-neutral-900 text-gray-500">Select year</option>
              {Array.from({ length: currentYear - 2015 + 1 }, (_, i) => (
                <option key={2015 + i} value={2015 + i} className="bg-neutral-900 text-gray-300">
                  {2015 + i}
                </option>
              ))}
            </select>
          </div>
          {selectedMake && selectedYear ? (
            <Link
              href={`/result/${selectedMake}/${selectedYear}`}
              className="block w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-500 transition duration-200 text-center"
            >
              Next
            </Link>
          ) : (
            <button
              className="block w-full bg-gray-700 text-gray-500 p-2 rounded cursor-not-allowed"
              disabled
            >
              Next
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
