import './css/style.css';
import imgCards from './hbs/foo.hbs';
import ImgApiService from './js/apiService';

const refs = {
    searchForm: document.querySelector(`.search-form`),
    galleryImg: document.querySelector(`.gallery`),
    sentinel: document.querySelector('.sentinel'),
};

const imgApiService = new ImgApiService();

refs.searchForm.addEventListener(`submit`, onSearch);

function onSearch(e) {
    e.preventDefault();

    clearArticlesContainer();
    imgApiService.img = e.currentTarget.elements.query.value;
    imgApiService.resetPage();
    imgApiService.fetchArticles().then(appendArticlesContainer);
}

function appendArticlesContainer(hits) {
    refs.galleryImg.insertAdjacentHTML('beforeend', imgCards
        (hits));
}

function clearArticlesContainer() {
    refs.galleryImg.innerHTML = '';   
}

const onEntry = entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting && imgApiService.query !=='') {
         imgApiService.fetchArticles().then(appendArticlesContainer);
      }
  });
}

const option = {rootMargin: '150px',};
const observer = new IntersectionObserver(onEntry, option);
observer.observe(refs.sentinel);
