import { AdditionalSkills } from './additionalSkills/additionalSkills.js';
import { Contact } from './contact/contact.js';
import { DownloadButton } from './downloadButton/downloadButton.js';
import { Education } from './education/education.js';
import { Experience } from './experience/experience.js';
import { Header } from './header/header.js';
import { Summary } from './summary/summary.js';
import { TechSkills } from './techSkills/techSkills.js';

const header = new Header('.header');
const downloadButton = new DownloadButton('.header');
const contact = new Contact('.contact');
const summary = new Summary('.summary');
const experience = new Experience('.experience');
const education = new Education('.education');
const techSkills = new TechSkills('.tech-skills');
const additionalSkills = new AdditionalSkills('.additional-skills');

export const components = [
  header,
  downloadButton,
  contact,
  summary,
  experience,
  education,
  techSkills,
  additionalSkills,
];
