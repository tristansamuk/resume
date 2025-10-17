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

export const savePDF = async () => {
  const button = document.querySelector('.download-button');
  button.classList.add('hidden');

  const resume = document.getElementById('resume');

  try {
    await html2pdf(resume);
  } catch (error) {
    console.error(error); // replace with ui error handling
  }

  button.classList.remove('hidden');
};
