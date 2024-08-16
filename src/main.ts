import initElement from "./InitElement";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div id="element-container">
  </div>
`;

document.querySelector('#element-container')?.appendChild(initElement("carousel"))