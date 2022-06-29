import { select, classNames, db } from './settings.js';
import Home from './home.js';
import Search from './search.js';
import Discover from './discover.js';
import Join from './join.js';

const app = {
  initPages: function () {
    const thisApp = this;
    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    console.log(thisApp.pages);
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    console.log(thisApp.navLinks);

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
        console.log('clickedLink');
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

  initData() {
    const thisPage = this;
    const url = db.url + '/' + db.songs;

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        thisPage.data = data;

        new Home(thisPage.data);
        new Search(thisPage.data);
        new Discover(thisPage.data);
        new Join(thisPage.data);
        thisPage.initPages();
      });
  },

  init: function () {
    this.initData();
  },
};

app.init();
