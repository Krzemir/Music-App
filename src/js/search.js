import Player from './player.js';
import { select, templates } from './settings.js';

class Search {
  constructor(allSongs) {
    const thisPage = this;
    thisPage.searchInputRender();
    thisPage.generateCategory(allSongs);
    //thisPage.search(allSongs);
  }

  generateCategory(allSongs) {
    const thisPage = this;
    const categoriesContainer = document.getElementById(select.containerOf.searchCategories);
    let html = '<option value="clean"></option>';

    const songsCategories = [];

    for (const song of allSongs) {
      for (const category of song.categories) {
        if (!songsCategories.includes(category)) {
          songsCategories.push(category);
        }
      }
    }
    for (let songCategory of songsCategories) {
      const linkHTML = '<option value="' + songCategory + '">' + songCategory + '</option>';

      html = html + ' ' + linkHTML;
    }
    categoriesContainer.innerHTML = html;

    thisPage.search(allSongs);
  }

  search(allSongs) {
    const form = document.querySelector(select.search.form);
    const search = document.querySelector(select.search.input);
    let selectedCategory;
    const searchCategories = document.getElementById(select.containerOf.searchCategories);
    const playerContainer = document.querySelector(select.containerOf.playerSearch);

    searchCategories.addEventListener('input', function (event) {
      event.preventDefault();
      selectedCategory = event.target.value;
      //console.log(selectedCategory);
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      //console.log(selectedCategory);

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

        console.log(selectedCategory);
        console.log(song.categories.includes(selectedCategory));

        if (song.categories.includes(selectedCategory)) {
          console.log('tru');
        }

        const songToDisplay = (song.title.toLowerCase().includes(searchData) || song.author.toLowerCase().includes(searchData)) & (song.categories.includes(selectedCategory) || selectedCategory == undefined || selectedCategory.includes('clean'));

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
