import './css/styles.css';
import Notiflix from 'notiflix';
// Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
// Notiflix.Notify.failure("Oops, there is no country with that name.");

import {fetchCountries} from "./js/fetchCountries";
import debounce from "lodash.debounce";
const DEBOUNCE_DELAY = 300;

const inputRef = document.querySelector("input#search-box");
// console.log("inputRef", inputRef);

inputRef.addEventListener("input", debounce(abracadabr, DEBOUNCE_DELAY));

function abracadabr(event){
    if(event.target.value === ''){
        console.log("pustooooooo");
        return;
    }
    console.log(event.target.value);
};

fetchCountries("swiss")

// function fetchCountries(){
// return fetch('https://pokeapi.co/api/v2/pokemon/2').then(response => {console.log(response.json())})}
// fetchCountries('peru');