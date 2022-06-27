import { select, templates } from './settings.js';
import Player from './player.js';

//const log = console.log;
class Home {
  constructor(allSongs) {
    const thisPage = this;
    thisPage.initPlayer(allSongs);
    thisPage.renderPage();
  }

  initPlayer(allSongs) {
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

      const playerContainer = document.querySelector(select.containerOf.playerHome);

      const generatedHTML = templates.player(templateData);

      playerContainer.innerHTML += generatedHTML;
    }

    new Player(select.containerOf.selectorPlayerHome);
  }

  renderPage() {
    const generatedHTML = templates.homePage();

    const pageContainer = document.querySelector(select.containerOf.homePage);

    pageContainer.innerHTML += generatedHTML;
  }
}

export default Home;
