const option = {rootMargin: '100px',};
const callback = entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          console.log(entry);
      }
  });
}

const observer = new IntersectionObserver(callback, option);

const sentinel = document.querySelector('.sentinel');
observer.observe(sentinel);