const BASE_URL = 'http://api.thenounproject.com';

function fetchJSON(url) {
  return fetch(url).then(response => response.json());
}

function renderSearchResults(iconsList) {
  console.log('iconsList', iconsList);

  const outputDiv = document.querySelector('#searchResults');
  outputDiv.innerHTML = '';

  for (const icon of iconsList) {
    const iconDiv = document.createElement('div');
    iconDiv.classList.add('search-result-icon');
    iconDiv.innerHTML = `<h4>${icon.Title}</h4>`;
    outputDiv.appendChild(iconDiv);

    iconDiv.addEventListener('click', () => showMovieDetail(icon));
  }
}

function renderIcons(icon) {
  const searchQuery = BASE_URL + '&plot=full&i=' + icons.year;

  fetchJSON(searchQuery).then(data => {
    renderMovieDetail(data);
  });
}

function resetView() {
  const resultsDiv = document.querySelector('#searchResults');
  resultsDiv.innerHTML = '';

  const detailDiv = document.querySelector('#detailView');
  detailDiv.innerHTML = '';
}

function renderIconDetail(icon) {
  console.log('icon', icon);

  // const outputDiv = document.querySelector('#detailView');
  // outputDiv.innerHTML = '';

  // outputDiv.innerHTML = `
  // <h1>${icon.Title}</h1>
  // <div><img src="${icon.url}"></div>
  // `;
}

const searchForm = document.querySelector('#searchForm');
searchForm.addEventListener('submit', e => {
  e.preventDefault();

  // console.log(new FormData(searchForm));

  // const searchQuery = 'harry potter';
  const searchQuery = document.querySelector('#searchInput').value;
  console.log(searchQuery);

  const searchUrl = BASE_URL + '&s=' + searchQuery;

  resetView();

  fetchJSON(searchUrl).then(data => {
    renderSearchResults(data.Search);
  });
});
