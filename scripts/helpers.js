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
