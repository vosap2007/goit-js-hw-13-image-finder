import InfiniteScroll from 'infinite-scroll';

const infScroll = new InfiniteScroll('.container', {
    history: false,
  responseType: 'text',
    path() {
        return '....'
    }
});

infScroll.loadNextPage();

infScroll.on('load', (response, pach) => {
    console.log(JSON.parse(response));
});