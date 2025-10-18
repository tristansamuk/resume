import { savePDF } from '../../scripts/helpers';

export class DownloadButton {
  constructor(parentClass) {
    this.parentEl = document.querySelector(parentClass);
    this.button = document.createElement('button');
    this.button.classList.add('download-button');
    this.button.innerText = 'Download';
    this.button.addEventListener('click', savePDF);
  }

  render() {
    this.parentEl.append(this.button);
  }
}
