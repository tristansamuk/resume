import { createTemplate } from '../../scripts/helpers.js';
import { resume } from '../../constants/resume.js';

const { header } = resume;
export class Header {
  constructor(parentClassName) {
    this.parentElement = document.querySelector(parentClassName);
    this.templateElement = createTemplate(`
        <h1 class="header__name">${header.name}</h1>
        <h2 class="header__job-title">${header.title}</h2>
    `);
    this.component = document.importNode(this.templateElement.content, true);
  }

  render() {
    this.parentElement.append(this.component);
  }
}
