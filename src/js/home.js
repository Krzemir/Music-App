import { classNames, select, templates } from './settings.js';
import Player from './player.js';
const log = console.log;

class Home {
  constructor(allSongs) {
    const activeCategories = [];
    const thisPage = this;
    thisPage.renderPage();
    thisPage.generateCategory(allSongs);

    thisPage.initPlayer(allSongs, activeCategories);
  }

  initPlayer(allSongs, activeCategories) {
    const playerContainer = document.querySelector(select.containerOf.playerHome);
    // log('active categories', activeCategories);
    // log('lengtd', activeCategories.length);
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
          // log(chosenCategory);
          const indexOfInactiveCategory = activeCategories.indexOf(chosenCategory);
          activeCategories.splice(indexOfInactiveCategory, 1);
        }
        playerContainer.innerHTML = '';
        thisPage.initPlayer(allSongs, activeCategories);
      });
    }
  }

  renderPage() {
    const generatedHTML = templates.homePage();
    const pageContainer = document.querySelector(select.containerOf.homePage);
    pageContainer.innerHTML += generatedHTML;
  }
}

export default Home;
