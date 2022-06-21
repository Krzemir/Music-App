import { select, templates } from './settings.js';

class Search {
  constructor() {
    const thisPage = this;
    thisPage.render();
  }

  render() {
    const generatedHTML = templates.searchPage();

    const pageContainer = document.querySelector(select.containerOf.searchPage);

    pageContainer.innerHTML = generatedHTML;
  }
}

export default Search;
