import DropDown from './DropDown/DropDown.js';
import Button from './Button/Button.js';
import TextArea from './TextArea/TextArea.js';
import styles from './styles.css';
import { AllHtmlEntities as Entities } from 'html-entities';

let entities = new Entities();

let ELEMENT = document.body.ELEMENT_NODE;
let widgetConstructors = {
  DROPDOWN: DropDown,
  WFBUTTON: Button,
  WFTEXTAREA: TextArea
};

let options = ['Complete', 'In Progress', 'Planning', 'Scheduled'];

document.body.innerHTML = `
  <div class="${styles['middleAlign']}">
    <wfbutton label="Hiya son!"></wfbutton>
    <wftextarea></wftextarea>
    <dropdown label="Status..." options="${entities.encode(JSON.stringify(options))}"></dropdown>
  </div>
`;

walkDOM(document.body, el => {
  let Constructor = widgetConstructors[el.tagName];

  if(Constructor){
    new Constructor(el);
  }
});

function walkDOM(element, handleElement){
  if(!element){
    return;
  }

  if(element.nodeType !== ELEMENT){
    return;
  }

  handleElement(element);

  for(var el in element.childNodes){
    walkDOM(element.childNodes[el], handleElement);
  }
}
