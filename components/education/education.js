import { createTemplate, formatId } from '../../scripts/helpers.js';
import { resume } from '../../constants/resume.js';

const { education } = resume;

export class Education {
  constructor(parentClassName) {
    this.parentElement = document.querySelector(parentClassName);
    this.templateElement = createTemplate(`
        <h2 class="education__header">${education.heading}</h2>
        <div class="education__items">
          <div class="education__item">
            <h3 class="education__school"></h3>
            <p class="education__info"></p>
          </div>
        </div>
      `);
    this.component = document.importNode(this.templateElement.content, true);

    this.itemsContainerEl = this.component.querySelector('.education__items');
    this.containerEl = this.component.querySelector('.education__item');
    this.heading3El = this.component.querySelector('.education__school');
    this.paragraphEl = this.component.querySelector('.education__info');

    // clear placeholder elements
    this.component.querySelector('.education__items').innerText = '';
  }

  addSchools() {
    for (const item of education.items) {
      const newItem = this.containerEl.cloneNode();
      const school = this.heading3El.cloneNode();
      school.innerText = item.institution;

      newItem.setAttribute('id', formatId(item.institution));

      newItem.append(school);
      this.itemsContainerEl.append(newItem);
    }
  }

  addDetails() {
    for (const item of education.items) {
      const parent = this.component.getElementById(formatId(item.institution));

      if (parent) {
        Object.values(item).map((string) => {
          // the institution is already in the h3, so skip it
          if (string !== item.institution) {
            const paragraph = this.paragraphEl.cloneNode();
            paragraph.innerText = string;
            parent.append(paragraph);
          }
        });
      }
    }
  }

  render() {
    this.addSchools();
    this.addDetails();
    this.parentElement.append(this.component);
  }
}
