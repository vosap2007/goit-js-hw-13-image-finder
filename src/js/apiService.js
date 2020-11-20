export default class ImgApiService {
    constructor() {
        this.searchImg = '';
        this.page = 1;
    }

    fetchArticles() {
        const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal
                 &q=${this.searchImg}&page=${this.page}&per_page=12&key=19156356-c40e703531fee6556ca92e5f2`;

   return fetch(url)
    .then(r => r.json())
       .then(data => {
           console.log(data);
           this.incrementPage();   
           
           return data.hits;
        }
    );
    }

    incrementPage() {
     this.page += 1;   
    }

    resetPage() {
     this.page = 1;   
    }

    get img() {
        return this.searchImg;
    }

    set img(newImg) {
        this.searchImg = newImg;
    }
}