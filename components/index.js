import { Header } from './header/header.js';
import { Summary } from './summary/summary.js';

const header = new Header('.header');
const summary = new Summary('.summary');

export const components = [header, summary];
