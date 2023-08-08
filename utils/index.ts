export interface ProcessEnv {
    [key: string]: string | undefined
}

export async function fetchCars() {


    const rapidApiKey = process.env.RAPID_KEY;

    if (!rapidApiKey) {
        throw new Error('RapidAPI key is missing.');
    }


    const headers = {
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }

    const response =  await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`, {headers: headers});

    const result = await response.json();

    return result;

}