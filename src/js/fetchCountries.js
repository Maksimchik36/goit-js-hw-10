const BASE_URL = "https://restcountries.com/v3.1/name";

// https://restcountries.com/v2/all?fields=name,capital,population,flag,languages


export function fetchCountries(name){
    // console.log(name);
    return fetch(`${BASE_URL}/${name}?fields=name,capital,population,flag,languages`).then(response => {
        if (!response.ok){
            throw new Error('Error fetching data');
        }
        return response.json();
    })
        
    
}