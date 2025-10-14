import { createTemplate } from '../../scripts/helpers.js';
import { resume } from '../../constants/resume.js';

const { header } = resume;
export class Header {
  constructor(className) {
    console.log(className);
    this.parentElement = document.querySelector(className);
    this.templateElement = createTemplate(`
      <div class="header">
        <h1 class="header-name">${header.name}</h1>
        <h2 class="header-job-title">${header.title}</h2>
      </div>
    `);
    this.component = document.importNode(this.templateElement.content, true);
  }

  render() {
    this.parentElement.append(this.component);
  }
}
