export const select = {
  containerOf: {
    pages: '#pages',
    homePage: '.home-wrapper',
    searchPage: '.search-wrapper',
    discoverPage: '.discover-wrapper',
    playerHome: '.player-wrapper-home',
    selectorPlayerHome: '.player-wrapper-home .player',
    playerSearch: '.player-wrapper-search',
    selectorPlayerSearch: '.player-wrapper-search .player',
    playerDiscover: '.player-wrapper-discover',
    selectorPlayerDiscover: '.player-wrapper-discover .player',
    searchResultsNumber: '.search-results-number',
  },

  templateOf: {
    homePage: '#template-home-page',
    searchPage: '#template-search-page',
    discoverPage: '#template-discover-page',
    player: '#template-player',
  },

  nav: {
    links: '.nav__links a',
  },

  search: {
    form: '.search-form',
    input: '#search_input',
  },
};

export const classNames = {
  pages: {
    active: 'active',
  },
  nav: {
    active: 'active',
  },
};

export const db = {
  //url: '//' + window.location.hostname + (window.location.hostname == 'localhost' ? ':3131' : ''),
  url: '//localhost:3131',
  songs: 'songs',
};

export const templates = {
  homePage: Handlebars.compile(document.querySelector(select.templateOf.homePage).innerHTML),
  searchPage: Handlebars.compile(document.querySelector(select.templateOf.searchPage).innerHTML),
  discoverPage: Handlebars.compile(document.querySelector(select.templateOf.discoverPage).innerHTML),
  player: Handlebars.compile(document.querySelector(select.templateOf.player).innerHTML),
};
