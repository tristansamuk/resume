import { Header } from '../components/header/header.js';
import { Summary } from '../components/summary/summary.js';

const header = new Header('.resume');
const summary = new Summary('.resume');

header.render();
summary.render();
