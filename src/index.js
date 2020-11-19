//import './css/style.css';
import imgCards from './hbs/imgCards.hbs';
import ImgApiService from './js/apiService';

const refs = {
    searchForm: document.querySelector(`.search-form`),
    galleryImg: document.querySelector(`.gallery`),
    buttonLoad: document.querySelector(`.button-load`),
};

const imgApiService = new ImgApiService();

refs.searchForm.addEventListener(`submit`, onSearch);
refs.buttonLoad.addEventListener(`click`, onLoadMore);

function onSearch(e) {
    e.preventDefault();

    clearArticlesContainer();
    imgApiService.img = e.target.value;
    imgApiService.resetPage();
    imgApiService.fetchArticles().then(appendArticlesContainer);
}

function onLoadMore() { 
    imgApiService.fetchArticles().then(appendArticlesContainer);
}

function appendArticlesContainer(hits) {
    refs.galleryImg.insertAdjacentHTML('beforeend', imgCards
        (hits));
}

function clearArticlesContainer() {
    refs.galleryImg.innerHTML = '';   
}

