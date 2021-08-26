const API_KEY = '6175642-0178aa6b85454b63af0eb865e'
const BASE_URL='https://pixabay.com/api/'

function fetchImagesAPI(searchInput, pageNumber ) {
   
    return (
        fetch(`${BASE_URL}?q=${searchInput}&page=${pageNumber}&key=${API_KEY}
        &image_type=photo&orientation=horizontal&per_page=12`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                return Promise.reject
                    (new Error(`По запросу ${searchInput} ничего не найдено`));
            }))
}

const api = {
    fetchImagesAPI,
}

export default api