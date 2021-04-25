import axios from 'axios'

import { OhJeezFactory } from "../factories/OhJeezFactory";
import { charactersMock } from "../../utils/mocks/characters";

function getAllCharacters() {
    return axios
        .get('https://rickandmortyapi.com/api/character')
        .then(response => response.data.results.map(OhJeezFactory))
}

function getAllCharactersMock() {
    return axios
        .get('')
        .then(() => {
            return [...charactersMock];
        })
}

export { getAllCharacters, getAllCharactersMock };