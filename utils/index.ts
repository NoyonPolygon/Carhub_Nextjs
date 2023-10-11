export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '10f9feb9d2mshc4b5f8ad544803ep1e7437jsn2acb9fd7ac2a',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });
    const result = await response.json();

    return result;

}

export const calculateCarRent = (city_mpg: number, year:number) => {
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;

    const mileagRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    const rentalRatePerDay = basePricePerDay + mileagRate + ageRate;
    return rentalRatePerDay.toFixed(0);
}