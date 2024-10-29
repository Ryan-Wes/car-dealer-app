export async function generateStaticParams() {
    const makesResponse = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json');
    
    if (!makesResponse.ok) {
        throw new Error(`Error fetching makes: ${makesResponse.statusText}`);
    }

    const makesData = await makesResponse.json();
    const paths = [];

    if (makesData.Results) {
        for (const make of makesData.Results) {
            for (let year = 2015; year <= new Date().getFullYear(); year++) {
                paths.push({ makeId: make.MakeId, year });
            }
        }
    }

    return paths;
}
