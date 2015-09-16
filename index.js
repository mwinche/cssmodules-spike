import DropDown from './DropDown/DropDown.js';
import Button from './Button/Button.js';
import TextArea from './TextArea/TextArea.js';
import UpdateStatus from './UpdateStatus/UpdateStatus.js';
import styles from './styles.css';

let ELEMENT = document.body.ELEMENT_NODE;
let widgetConstructors = {
  DROPDOWN: DropDown,
  WFBUTTON: Button,
  WFTEXTAREA: TextArea,
  UPDATESTATUS: UpdateStatus
};

document.body.innerHTML = `
  <div class="${styles['middleAlign']}">
    <wfbutton label="Hiya son!"></wfbutton>
    <wftextarea></wftextarea>
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
