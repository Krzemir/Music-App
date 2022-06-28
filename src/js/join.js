import { select, templates } from './settings.js';

class Join {
  constructor(data) {
    const thisPage = this;
    thisPage.pageRender(data);
  }

  pageRender(data) {
    const generatedHTML = templates.joinPage(data);

    const pageContainer = document.querySelector(select.containerOf.joinPage);

    pageContainer.innerHTML = generatedHTML;
  }
}

export default Join;
