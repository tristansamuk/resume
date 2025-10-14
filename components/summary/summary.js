import { createTemplate } from '../../scripts/helpers.js';
import { resume } from '../../constants/resume.js';

const { summary } = resume;

export class Summary {
  constructor(parentClassName) {
    this.parentElement = document.querySelector(parentClassName);
    this.templateElement = createTemplate(`
      <div class="summary">
        <h2 class="summary__heading">${summary.heading}</h2>
        <p class="summary__text">${summary.description}</p>
      </div>    
    `);

    this.component = document.importNode(this.templateElement.content, true);
  }
  render() {
    this.parentElement.append(this.component);
  }
}
