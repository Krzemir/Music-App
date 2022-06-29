export const select = {
  containerOf: {
    pages: '#pages',
    homePage: '.home-wrapper',
    searchPage: '.search-wrapper',
    discoverPage: '.discover-wrapper',
    joinPage: '.join-wrapper',
    playerHome: '.player-wrapper-home',
    selectorPlayerHome: '.player-wrapper-home .player',
    playerSearch: '.player-wrapper-search',
    selectorPlayerSearch: '.player-wrapper-search .player',
    playerDiscover: '.player-wrapper-discover',
    selectorPlayerDiscover: '.player-wrapper-discover .player',
    searchResultsNumber: '.search-results-number',
    categories: '.categories-list',
    searchCategories: 'search_select',
  },

  templateOf: {
    homePage: '#template-home-page',
    searchPage: '#template-search-page',
    discoverPage: '#template-discover-page',
    joinPage: '#template-join-page',
    player: '#template-player',
  },

  nav: {
    links: '.nav__links a, .button-container a',
  },

  categories: {
    link: 'categories-list a',
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
  categories: {
    active: 'active',
  },
};

export const db = {
  url: '//localhost:3131',
  songs: 'songs',
};

export const templates = {
  homePage: Handlebars.compile(document.querySelector(select.templateOf.homePage).innerHTML),
  searchPage: Handlebars.compile(document.querySelector(select.templateOf.searchPage).innerHTML),
  discoverPage: Handlebars.compile(document.querySelector(select.templateOf.discoverPage).innerHTML),
  joinPage: Handlebars.compile(document.querySelector(select.templateOf.joinPage).innerHTML),
  player: Handlebars.compile(document.querySelector(select.templateOf.player).innerHTML),
};
