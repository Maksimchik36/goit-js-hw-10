const BASE_URL = "https://restcountries.com/v3.1/name";

// https://restcountries.com/v2/all?fields=name,capital,population,flag,languages


export function fetchCountries(name, options){
    console.log(name);
    return fetch(`${BASE_URL}/${name}`).then(response => {
        return response.json()
        })
        .then(country => console.log(country)).catch(error => console.log(error));
        
    
}