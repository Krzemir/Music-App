import { select, templates } from './settings.js';
import Player from './player.js';

class Discover {
  constructor(allSongs, userFavorites) {
    const thisPage = this;
    thisPage.render();
    thisPage.randomSong(allSongs, userFavorites);
  }

  randomSong(allSongs, userFavorites) {
    const numberOfSongs = allSongs.length;

    const randomSong = Math.floor(Math.random() * numberOfSongs) + 1;

    for (const song of allSongs) {
      const templateData = {
        id: song.id,
        title: song.title,
        author: song.author,
        categories: song.categories,
        ranking: song.ranking,
        file: song.filename,
        fileUrl: '<source src="./songs/' + song.filename + '" type="audio/mpeg">',
      };

      if (song.id == randomSong) {
        const playerContainer = document.querySelector(select.containerOf.playerDiscover);

        const generatedHTML = templates.player(templateData);

        playerContainer.innerHTML = generatedHTML;
      }
    }

    new Player(select.containerOf.selectorPlayerDiscover);
  }

  render() {
    const generatedHTML = templates.discoverPage();

    const pageContainer = document.querySelector(select.containerOf.discoverPage);

    pageContainer.innerHTML = generatedHTML;
  }
}

export default Discover;
