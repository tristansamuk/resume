import { Position } from './position.js';
import { createTemplate } from '../../scripts/helpers.js';
import { resume } from '../../constants/resume.js';

const { experience } = resume;

export class Experience {
  constructor(parentClassName) {
    this.parentElement = document.querySelector(parentClassName);
    this.templateElement = createTemplate(`
        <h2>${experience.heading}</h2>
        <div class="positions"></div>
      `);
    this.component = document.importNode(this.templateElement.content, true);
  }

  addPositions() {
    const parentEl = this.component.querySelector('.positions');

    for (const position of experience.positions) {
      const item = new Position(parentEl);
      item.setText(position);
      item.appendToParent();
    }
  }

  render() {
    this.addPositions();
    this.parentElement.append(this.component);
  }
}
