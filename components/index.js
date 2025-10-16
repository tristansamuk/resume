import { Education } from './education/education.js';
import { Experience } from './experience/experience.js';
import { Header } from './header/header.js';
import { Summary } from './summary/summary.js';
import { TechSkills } from './techSkills/technicalSkills.js';

const header = new Header('.header');
const summary = new Summary('.summary');
const experience = new Experience('.experience');
const education = new Education('.education');
const techSkills = new TechSkills('.tech-skills');

export const components = [header, summary, experience, education, techSkills];
