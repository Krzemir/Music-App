import Player from './player.js';
import { select, templates } from './settings.js';
//const log = console.log;

class Search {
  constructor(allSongs) {
    const thisPage = this;
    thisPage.searchInputRender();
    thisPage.search(allSongs);
  }

  search(allSongs) {
    const form = document.querySelector(select.search.form);
    const search = document.querySelector(select.search.input);
    const playerContainer = document.querySelector(select.containerOf.playerSearch);

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      playerContainer.innerHTML = '';

      const searchData = search.value.toLowerCase();

      for (const song of allSongs) {
        const templateData = {
          title: song.title,
          author: song.author,
          categories: song.categories,
          ranking: song.ranking,
          file: song.filename,
          fileUrl: '<source src="./songs/' + song.filename + '" type="audio/mpeg">',
        };
        const songToDisplay = song.title.toLowerCase().includes(searchData) || song.author.toLowerCase().includes(searchData);
        if (songToDisplay == true) {
          const generatedHTML = templates.player(templateData);
          playerContainer.innerHTML += generatedHTML;
        }
      }
      new Player();
    });
  }

  searchInputRender() {
    const generatedHTML = templates.searchPage();

    const pageContainer = document.querySelector(select.containerOf.searchPage);

    pageContainer.innerHTML = generatedHTML;
  }
}

export default Search;

/* Wyszukiwarka w Search powinna działać bardzo prosto. Klient chce, aby po kliknięciu przycisku “search” aplikacja wyrenderowała odtwarzacze dla każdej piosenki, która w tytule lub autorze ma zawartą frazę z pola tekstowego. Czyli np. jeśli ktoś wpisze w wyszukiwarce frazę at, to powinny wyświetlić się wszystkie piosenki, które gdzieś w tytule mają właśnie taką zbitkę liter (Np. dla at mogłaby pokazać się piosenka Panic! at the Disco – High Hopes). */
