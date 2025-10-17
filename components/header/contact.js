import { createTemplate } from '../../scripts/helpers.js';
import { resume } from '../../constants/resume.js';

const { header } = resume;
const { linkedIn, github } = header;

export class Contact {
  constructor(parentClassName) {
    this.parentElement = document.querySelector(parentClassName);
    this.templateElement = createTemplate(`
        <ul class="contact__list">
          <li class="contact__info"></li>
            <a class="contact__link"></a>
          </li>
        </ul>
      `);

    this.component = document.importNode(this.templateElement.content, true);
    this.ulEl = this.component.querySelector('.contact__list');
    this.liEl = this.component.querySelector('.contact__info');
    this.aEl = this.component.querySelector('.contact__link');

    this.contactInfo = Object.values(header).filter(
      (item) =>
        item !== header.name &&
        item !== header.title &&
        item !== header.linkedIn &&
        item !== header.github
    );
    this.links = [linkedIn, github];

    this.component.querySelector('.contact__list').innerText = '';
  }

  addContactInfo() {
    for (const info of this.contactInfo) {
      let listItem;
      if (info === header.email) {
        listItem = this.liEl.cloneNode();
        const link = this.aEl.cloneNode();

        link.innerText = info;
        link.href = `mailto:${info}`;

        listItem.append(link);
      } else {
        listItem = this.liEl.cloneNode();
        listItem.innerText = info;
      }

      this.ulEl.append(listItem);
    }
  }

  addLinks() {
    for (const link of this.links) {
      const listItem = this.liEl.cloneNode();
      const linkEl = this.aEl.cloneNode();

      linkEl.innerText = link.string;
      linkEl.href = link.url;

      listItem.append(linkEl);
      this.ulEl.append(listItem);
    }
  }

  render() {
    this.addContactInfo();
    this.addLinks();
    this.parentElement.append(this.component);
  }
}
