import './css/styles.css';
import countryCardTpl from './templates/country-card.hbs';
import Notiflix from 'notiflix';
// Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
// Notiflix.Notify.failure("Oops, there is no country with that name.");

import {fetchCountries} from "./js/fetchCountries";
import debounce from "lodash.debounce";
const DEBOUNCE_DELAY = 300;

const inputRef = document.querySelector("input#search-box");
// console.log("inputRef", inputRef);
const cardContainerRef = document.querySelector(".country-info"); // Куда добавляем разметку из шаблона
// console.log(cardContainerRef)

inputRef.addEventListener("input", debounce(renderList, DEBOUNCE_DELAY));

function renderList(event){
    const userRequest = event.target.value.trim();
    
    if(userRequest === ''){
        console.log("pustooooooo");
        return;
    }
    // console.log(userRequest);

    fetchCountries(userRequest)
    .then(country =>{
        // console.log(country);
        const markup = countryCardTpl(country);
        cardContainerRef.innerHTML = markup;
        console.log(markup)
    })
    .catch(error => console.log(error));
}