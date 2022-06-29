import { select, templates } from './settings.js';

class Join {
  constructor() {
    const thisPage = this;
    thisPage.pageRender();
  }

  pageRender() {
    const generatedHTML = templates.joinPage();

    const pageContainer = document.querySelector(select.containerOf.joinPage);

    pageContainer.innerHTML = generatedHTML;
  }
}

export default Join;
