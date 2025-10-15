import { createTemplate } from '../../scripts/helpers.js';

export class Position {
  constructor(parent) {
    this.parentElement = parent;
    this.templateElement = createTemplate(`
        <div class="position">
          <h3 class="position__title"></h3>
            <div class="position__container">
              <h4 class="position__company"></h4>
              <h4 class="position__date-location"></h4>
            </div>
          <ul class="position__description">
            <li class="position__list-item"></li>
          </ul>
        </div>
      `);

    this.component = document.importNode(this.templateElement.content, true);

    this.titleEl = this.component.querySelector('.position__title');
    this.companyEl = this.component.querySelector('.position__company');
    this.dateLocEl = this.component.querySelector('.position__date-location');
    this.listEl = this.component.querySelector('.position__description');
    this.listItemEl = this.component.querySelector('.position__list-item');

    // remove the empty list item
    this.component.querySelector('.position__description').textContent = '';
  }

  setText(data) {
    this.titleEl.textContent = data.jobTitle;
    this.companyEl.textContent = data.company;
    this.dateLocEl.textContent = `${data.from} - ${data.to} | ${data.location}`;

    for (const item of data.description) {
      const newListItem = this.listItemEl.cloneNode();
      newListItem.innerText = item;
      this.listEl.append(newListItem);
    }
  }

  appendToParent() {
    this.parentElement.append(this.component);
  }
}
