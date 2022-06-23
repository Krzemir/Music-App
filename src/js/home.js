import { select, templates, db } from './settings.js';
import Player from './player.js';

const log = console.log;
class Home {
  constructor() {
    const thisPage = this;
    thisPage.initData();
    // thisPage.renderPlayer();
    thisPage.renderPage();

    // thisPage.initPlayer(thisPage.data);
  }

  initData() {
    const thisPage = this;
    thisPage.data = {};
    const url = db.url + '/' + db.songs;

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const allSongs = Object.assign(thisPage.data, data);

        thisPage.initPlayer(allSongs);
      });
  }

  initPlayer(allSongs) {
    const thisPage = this;

    for (let song in allSongs) {
      const songData = allSongs[song];
      const songId = songData.id;
      const songAuthor = songData.author;
      const songTitle = songData.title;
      const songFileName = songData.filename;
      const songCategories = songData.categories;
      const songRanking = songData.ranking;
      const songFileUrl = '<source src="./songs/' + songFileName + '" type="audio/mpeg">';

      const templateData = {
        title: songTitle,
        categories: songCategories,
        ranking: songRanking,
        file: songFileName,
        fileUrl: songFileUrl,
      };

      const playerContainer = document.querySelector(select.containerOf.player);

      const generatedHTML = templates.player(templateData);

      playerContainer.innerHTML += generatedHTML;
    }

    new Player();
  }

  renderPage() {
    const generatedHTML = templates.homePage();

    const pageContainer = document.querySelector(select.containerOf.homePage);

    pageContainer.innerHTML += generatedHTML;
  }
}

export default Home;
