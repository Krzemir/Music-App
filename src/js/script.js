import { select, classNames } from './settings.js';
import Home from './home.js';

const log = console.log;

const app = {
  initPages: function () {
    const thisApp = this;
    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    // thisApp.activatePage(thisApp.pages[0].id);

    log(thisApp.pages);
    log(thisApp.navLinks);

    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function () {
        const clickedLink = this;

        log('clicked', link);
        const id = clickedLink.getAttribute('href').replace('#', '');
        log(id);
        thisApp.activatePage(id);
      });
    }
  },

  //   activatePage: function (pageId) {
  //     const thisApp = this;
  //     for (let page of thisApp.pages) {
  //       page.classList.toogle(classNames.pages.active);
  //     }
  //   },

  initHome: function () {
    new Home();
  },

  init: function () {
    this.initPages();
    this.initHome();
  },
};

app.init();
