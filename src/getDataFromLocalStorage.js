import fetchApi from "./fetchApi.js";

export default function getDataFromLocalStorage() {
    const url = 'https://cms-ca.bjeglerud.com/wp-json/wp/v2/posts/?per_page=30';

    try {
        const storedData = localStorage.getItem('games');
        if (!storedData) {
            return fetchApi(url);
        }

        const gameData = JSON.parse(storedData);
        return gameData;
    } catch (error) {
        console.error("Error in getDataFromLocalStorage:", error);
        return fetchApi(url);
    }
}
