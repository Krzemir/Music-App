import { select, templates } from './settings.js';

class Home {
  constructor() {
    const thisPage = this;
    thisPage.render();
  }

  render() {
    const generatedHTML = templates.homePage();

    const pageContainer = document.querySelector(select.containerOf.homePage);

    pageContainer.innerHTML = generatedHTML;
  }
}

export default Home;
