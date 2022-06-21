export const select = {
  containerOf: {
    pages: '#pages',
    homePage: '.home-wrapper',
  },

  templateOf: {
    homePage: '#template-home-page',
    searchPage: '#template-search-page',
    discoverPage: '#template-discover-page',
  },

  nav: {
    links: '.nav__links a',
  },
};

export const classNames = {
  pages: {
    active: 'active',
  },
};

export const templates = {
  homePage: Handlebars.compile(document.querySelector(select.templateOf.homePage).innerHTML),
  searchPage: Handlebars.compile(document.querySelector(select.templateOf.searchPage).innerHTML),
  discoverPage: Handlebars.compile(document.querySelector(select.templateOf.discoverPage).innerHTML),
};
