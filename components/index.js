import { Experience } from './experience/experience.js';
import { Header } from './header/header.js';
import { Summary } from './summary/summary.js';

const header = new Header('.header');
const summary = new Summary('.summary');
const experience = new Experience('.experience');

export const components = [header, summary, experience];
