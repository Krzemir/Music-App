import { select, templates } from './settings.js';
import Player from './player.js';

//const log = console.log;
class Home {
  constructor(allSongs) {
    //log(allSongs);
    const thisPage = this;
    //thisPage.initData();
    thisPage.initPlayer(allSongs);
    thisPage.renderPage();

    // thisPage.initPlayer(thisPage.data);
  }

  // initData() {
  //   const thisPage = this;
  //   // thisPage.data = [];
  //   const url = db.url + '/' + db.songs;

  //   fetch(url)
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (data) {
  //       thisPage.data = data;

  //       // const allSongs = Object.assign(thisPage.data, data);

  //       thisPage.initPlayer(thisPage.data);
  //     });
  // }

  initPlayer(allSongs) {
    // log(allSongs);
    for (let song of allSongs) {
      // const songData = allSongs[song];
      // const songId = songData.id;
      // const songAuthor = songData.author;
      // const songTitle = songData.title;
      // const songFileName = songData.filename;
      // const songCategories = songData.categories;
      // const songRanking = songData.ranking;
      const songFileUrl = '<source src="./songs/' + song.filename + '" type="audio/mpeg">';

      const templateData = {
        title: song.title,
        author: song.author,
        categories: song.categories,
        ranking: song.ranking,
        file: song.filename,
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
