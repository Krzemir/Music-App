import Player from './player.js';
import { select, templates } from './settings.js';

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
      let searchResultsNumber = 0;
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
          searchResultsNumber += 1;
        }
      }
      const searchResultsNumberContainter = document.querySelector(select.containerOf.searchResultsNumber);

      if (searchResultsNumber == 0) {
        searchResultsNumberContainter.innerText = 'We have found nothing';
      } else if (searchResultsNumber > 1) {
        searchResultsNumberContainter.innerText = 'We have found ' + searchResultsNumber + ' songs';
      } else {
        searchResultsNumberContainter.innerText = 'We have found 1 song';
      }

      new Player(select.containerOf.selectorPlayerSearch);
    });
  }

  searchInputRender() {
    const generatedHTML = templates.searchPage();

    const pageContainer = document.querySelector(select.containerOf.searchPage);

    pageContainer.innerHTML = generatedHTML;
  }
}

export default Search;
