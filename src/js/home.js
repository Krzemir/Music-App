import { classNames, select, templates } from './settings.js';
import Player from './player.js';
import Discover from './discover.js';

class Home {
  constructor(allSongs) {
    const activeCategories = [];
    const thisPage = this;
    thisPage.renderPage();
    thisPage.generateCategory(allSongs);

    thisPage.initPlayer(allSongs, activeCategories);
    thisPage.userData(allSongs);
  }

  initPlayer(allSongs, activeCategories) {
    const playerContainer = document.querySelector(select.containerOf.playerHome);
    for (let song of allSongs) {
      const songFileUrl = '<source src="./songs/' + song.filename + '" type="audio/mpeg">';

      const templateData = {
        title: song.title,
        author: song.author,
        categories: song.categories,
        ranking: song.ranking,
        file: song.filename,
        fileUrl: songFileUrl,
      };

      if (activeCategories.length != 0) {
        for (let activeCategory of activeCategories) {
          const songToDisplay = song.categories.includes(activeCategory);
          if (songToDisplay == true) {
            const generatedHTML = templates.player(templateData);
            playerContainer.innerHTML += generatedHTML;
          }
        }
      } else {
        const generatedHTML = templates.player(templateData);
        playerContainer.innerHTML += generatedHTML;
      }
    }

    new Player(select.containerOf.selectorPlayerHome);
  }

  generateCategory(allSongs) {
    const thisPage = this;
    const categoriesContainer = document.querySelector(select.containerOf.categories);
    let html = '';

    const songsCategories = [];

    for (const song of allSongs) {
      for (const category of song.categories) {
        if (!songsCategories.includes(category)) {
          songsCategories.push(category);
        }
      }
    }
    for (let songCategory of songsCategories) {
      const linkHTML = '<li><a href="#category-' + songCategory + '">' + songCategory + '</a></li>';
      html = html + ' ' + linkHTML;
    }
    categoriesContainer.innerHTML = html;

    thisPage.initCategory(allSongs);
  }

  initCategory(allSongs) {
    const thisPage = this;
    const activeCategories = [];
    const playerContainer = document.querySelector(select.containerOf.playerHome);

    const links = document.querySelectorAll('li');
    for (let link of links) {
      link.addEventListener('click', function (event) {
        const categoryLink = event.target;

        categoryLink.classList.toggle(classNames.categories.active);
        const chosenCategory = categoryLink.textContent;

        if (categoryLink.classList.contains(classNames.categories.active) & !activeCategories.includes(chosenCategory)) {
          activeCategories.push(chosenCategory);
        } else if (!categoryLink.classList.contains(classNames.categories.active) & activeCategories.includes(chosenCategory)) {
          const indexOfInactiveCategory = activeCategories.indexOf(chosenCategory);
          activeCategories.splice(indexOfInactiveCategory, 1);
        }
        playerContainer.innerHTML = '';
        thisPage.initPlayer(allSongs, activeCategories);
      });
    }
  }

  userData(allSongs) {
    const players = document.querySelectorAll('.player');

    let userFavorites = [];

    for (let player of players) {
      player.addEventListener('click', function (event) {
        const clickedPlayer = event.currentTarget;
        const file = clickedPlayer.querySelector('source');

        const fileName = file.getAttribute('src').substr(8);

        for (const song of allSongs) {
          const songCategories = song.categories;

          const songFilename = song.filename;

          if (songFilename == fileName) {
            for (let category of songCategories) {
              if (!userFavorites.includes(category)) {
                userFavorites.push(category);
              }
            }
          }
        }
        new Discover(allSongs, userFavorites);
        console.log(userFavorites);
      });
    }

    console.log('fav', userFavorites);
  }

  renderPage() {
    const generatedHTML = templates.homePage();
    const pageContainer = document.querySelector(select.containerOf.homePage);
    pageContainer.innerHTML += generatedHTML;
  }
}

export default Home;
