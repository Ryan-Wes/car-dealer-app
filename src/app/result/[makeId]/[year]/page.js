"use client";

import { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { use } from 'react';

const LoadingFallback = () => (
    <div className="text-center text-gray-500">Loading vehicles...</div>
);

const VehicleList = ({ vehicles }) => (
    <div className="bg-transparent p-6 rounded-lg shadow-lg w-full max-w-full flex flex-wrap justify-center gap-6">
        {vehicles.length > 0 ? (
            vehicles.map((vehicle) => (
                <div
                    key={vehicle.Model_ID}
                    className="bg-neutral-800 rounded text-gray-300 hover:bg-blue-700 transition duration-200 w-48 h-48 flex items-center justify-center"
                >
                    <div className="text-center">
                        <p className="font-semibold text-xl">{vehicle.Model_Name}</p><br />
                        <p>Make: {vehicle.Make_Name}</p>
                        <p>Model ID: {vehicle.Model_ID}</p>
                    </div>
                </div>
            ))
        ) : (
            <div className="text-gray-500 w-full text-center">No vehicles found for the given criteria.</div>
        )}
    </div>
);

export default function ResultPage({ params }) {

    const { makeId, year } = use(params); 

    const [vehicles, setVehicles] = useState([]);
    const [makeName, setMakeName] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchVehicles = async () => {
        setLoading(true);
        setError(null);
        try {
            console.log(`Fetching vehicles for Make ID: ${makeId} and Year: ${year}`);
            const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);

            if (data.Results && data.Results.length > 0) {
                const uniqueVehicles = [];
                const vehicleIds = new Set();

                data.Results.forEach(vehicle => {
                    if (!vehicleIds.has(vehicle.Model_ID)) {
                        uniqueVehicles.push(vehicle);
                        vehicleIds.add(vehicle.Model_ID);
                    }
                });

                setVehicles(uniqueVehicles);
                setMakeName(data.Results[0].Make_Name);
            } else {
                setVehicles([]);
            }
        } catch (error) {
            console.error('Error fetching vehicles:', error);
            setError('Simulated API error');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchVehicles();
    }, [makeId, year]);

    return (
        <div className="min-h-screen bg-black text-gray-200 flex flex-col items-center justify-center p-6 relative">
            <Link href="/" className="fixed top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-200">
                Back
            </Link>
            <h1 className="text-3xl font-bold mb-6">Cars from {makeName} of the year {year}</h1>
            {loading ? (
                <LoadingFallback />
            ) : error ? (
                <div className="text-center text-red-500">{error}</div>
            ) : (
                <Suspense fallback={<LoadingFallback />}>
                    <VehicleList vehicles={vehicles} />
                </Suspense>
            )}
        </div>
    );
}
