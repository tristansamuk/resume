import html2pdf from 'html2pdf.js';

export const createTemplate = (html) => {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  if (!template.content.firstElementChild) {
    throw new Error('Invalid or empty HTML string.');
  }
  return template;
};

export const formatId = (string) => {
  return string.toLowerCase().replace(/\s/g, '-');
};

export const toggleVisibility = (className) => {
  const element = document.querySelector(`${className}`);

  if (element.classList.contains('hidden')) {
    element.classList.remove('hidden');
    return;
  }

  element.classList.add('hidden');
};

export const savePDF = async () => {
  toggleVisibility('.download-button');
  const resume = document.getElementById('resume');

  const options = {
    margin: 0.5,
    filename: 'tristan-samuk-resume.pdf',
    image: { type: 'jpeg', quality: 1 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    pagebreak: { before: '.break-before' },
  };

  html2pdf().set(options).from(resume).save();

  toggleVisibility('.download-button');
};
