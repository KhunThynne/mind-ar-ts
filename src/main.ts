import './style.css';
import { EXAMPLE } from './utils/constant';

const app = document.querySelector('#app') as unknown as HTMLDivElement;

const SCENE = EXAMPLE.IMAGE_TARGET;

app.innerHTML = `
<div class="main">
<div class="display">
  <h1>Hello Mind AR J/TS! .T</h1>
   </div>
  </div>
  ${SCENE}
`;

app.style.margin = '0';
