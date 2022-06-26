import { select, classNames, db } from './settings.js';
import Home from './home.js';
import Search from './search.js';
import Discover from './discover.js';

//const log = console.log;

const app = {
  initPages: function () {
    const thisApp = this;
    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;

    for (let page of thisApp.pages) {
      if (page.id == idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }
    thisApp.activatePage(pageMatchingHash);

    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function (event) {
        const clickedLink = this;
        event.preventDefault();

        const id = clickedLink.getAttribute('href').replace('#', '');
        thisApp.activatePage(id);

        window.location.hash = '#/' + id;
      });
    }
  },

  activatePage: function (pageId) {
    const thisApp = this;
    for (let page of thisApp.pages) {
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }
    for (let link of thisApp.navLinks) {
      link.classList.toggle(classNames.nav.active, link.getAttribute('href') == '#' + pageId);
    }
  },

  // initHome: function (allSongs) {
  //   new Home(allSongs);
  // },

  // initSearch: function (allSongs) {
  //   new Search(allSongs);
  // },

  initDiscover: function () {
    new Discover();
  },

  initData() {
    const thisPage = this;
    // thisPage.data = [];
    const url = db.url + '/' + db.songs;

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        thisPage.data = data;

        // const allSongs = Object.assign(thisPage.data, data);

        //thisPage.initHome(thisPage.data);
        new Home(thisPage.data);
        new Search(thisPage.data);

        //thisPage.initSearch(thisPage.data);
      });
  },

  init: function () {
    this.initData();
    // this.initHome();
    //this.initSearch();
    //this.initDiscover();
    this.initPages();
  },
};

app.init();
