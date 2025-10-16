import { createTemplate } from '../../scripts/helpers.js';
import { resume } from '../../constants/resume.js';

const { techSkills } = resume;

export class TechSkills {
  constructor(parentClassName) {
    this.parentElement = document.querySelector(parentClassName);
    this.templateElement = createTemplate(`
        <h2 class="tech-skills__header">${techSkills.heading}</h2>
        <ul class="tech-skills__list">
          <li class="tech-skills__list-item">
            <span class="tech-skills__label"></span>
          </li>
        </ul>
      `);

    this.component = document.importNode(this.templateElement.content, true);
    this.listEl = this.component.querySelector('.tech-skills__list');
    this.listItemEl = this.component.querySelector('.tech-skills__list-item');
    this.spanEl = this.component.querySelector('.tech-skills__label');
    this.skills = Object.values(techSkills).filter(
      (item) => item !== techSkills.heading
    );

    this.component.querySelector('.tech-skills__list').innerText = '';
  }

  addSkills() {
    for (const skill of this.skills) {
      const newListItem = this.listItemEl.cloneNode();
      const newLabel = this.spanEl.cloneNode();

      newLabel.innerText = `${skill.label}: `;
      newListItem.innerText = skill.items.join(', ');

      newListItem.prepend(newLabel);

      this.listEl.append(newListItem);
    }
  }

  render() {
    this.addSkills();
    this.parentElement.append(this.component);
  }
}
