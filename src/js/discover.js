import { select, templates } from './settings.js';

class Discover {
  constructor() {
    const thisPage = this;
    thisPage.render();
  }

  render() {
    const generatedHTML = templates.discoverPage();

    const pageContainer = document.querySelector(select.containerOf.discoverPage);

    pageContainer.innerHTML = generatedHTML;
  }
}

export default Discover;
