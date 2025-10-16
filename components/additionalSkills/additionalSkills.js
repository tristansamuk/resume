import { createTemplate } from '../../scripts/helpers.js';
import { resume } from '../../constants/resume.js';

const { additionalSkills } = resume;

export class AdditionalSkills {
  constructor(parentClassName) {
    this.parentElement = document.querySelector(parentClassName);
    this.templateElement = createTemplate(`
        <h2 class="additional-skills__header">${additionalSkills.heading}</h2>
        <ul class="additional-skills__list">
          <li class="additional-skills__list-item"></li>
        </ul>
      `);

    this.component = document.importNode(this.templateElement.content, true);
    this.listEl = this.component.querySelector('.additional-skills__list');
    this.listItemEl = this.component.querySelector(
      '.additional-skills__list-item'
    );
    this.skills = additionalSkills.items;

    this.component.querySelector('.additional-skills__list').innerText = '';
  }

  addSkills() {
    for (const skill of this.skills) {
      const newListItem = this.listItemEl.cloneNode();
      newListItem.innerText = skill;
      this.listEl.append(newListItem);
    }
  }

  render() {
    this.addSkills();
    this.parentElement.append(this.component);
  }
}
