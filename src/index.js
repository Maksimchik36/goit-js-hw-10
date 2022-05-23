import './css/styles.css';
import countryCardTpl from './templates/country-card.hbs';
import countryCardsTpl from './templates/list-country-cards.hbs';

import Notiflix from 'notiflix';
import {fetchCountries} from "./js/fetchCountries";
import debounce from "lodash.debounce";
const DEBOUNCE_DELAY = 300;

const inputRef = document.querySelector("input#search-box");
const countryInfoRef = document.querySelector(".country-info"); 
const countriesListRef = document.querySelector(".country-list");

inputRef.addEventListener("input", debounce(renderList, DEBOUNCE_DELAY));

function renderList(event){
    const userRequest = event.target.value.trim();
    
    if (userRequest === '') {
        countryInfoRef.innerHTML = "";
        countriesListRef.innerHTML ="";
        return;
    }
 
    fetchCountries(userRequest)
        .then(array => {
            if (array.length >10) {
                countryInfoRef.innerHTML = "";
                countriesListRef.innerHTML ="";
                Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
            } else if (array.length >= 2) {
                countryInfoRef.innerHTML = "";                
                const markup = countryCardsTpl(array);
                countriesListRef.innerHTML = markup;
            } else {
                countriesListRef.innerHTML ="";                
                const markup = countryCardTpl(array);
                countryInfoRef.innerHTML = markup;
            }
    })
        .catch(error => {
            countryInfoRef.innerHTML = "";
            countriesListRef.innerHTML ="";
            Notiflix.Notify.failure("Oops, there is no country with that name.")
        });
}