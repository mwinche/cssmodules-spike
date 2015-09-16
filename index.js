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
    <div class="${styles['updateStatus']}">
      <wftextarea class="${styles['textArea']}"></wftextarea>
      <dropdown class="${styles['statusSelection']}" label="Status..." options="${entities.encode(JSON.stringify(options))}"></dropdown>
      <wfbutton label="Update" class="${styles['commentButton']}"></wfbutton>
    </div>
    <div class="${styles['comments']}">
      <div class="${styles['comment']}">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        facilisis nibh in orci suscipit ultricies. Ut odio ante, iaculis
        vitae nisi at, bibendum lacinia nisl. Vivamus fringilla purus et
        orci euismod rhoncus. In hac habitasse platea dictumst. Duis
        elementum eu elit tincidunt euismod. Cras sit amet sapien neque.
        Nunc ultricies eros in elementum iaculis. Nam malesuada volutpat
        nisi in fermentum. Nullam pulvinar pretium est, in ullamcorper
        massa faucibus ac. Etiam dui tellus, ultrices vel viverra sed,
        ornare ut libero. Etiam eget ligula id mi maximus pellentesque
        quis vitae eros.
      </div>
      <div class="${styles['comment']}">
        Nullam urna erat, condimentum id cursus a, ornare nec purus.
        Fusce dapibus at elit eu posuere. Donec lacinia mattis augue,
        ullamcorper egestas justo dapibus ac. Mauris mattis eget arcu ac
        ornare. Vestibulum quam neque, pretium eget mi maximus, mattis
        egestas sapien. Proin risus ante, semper pharetra ex vulputate,
        iaculis pulvinar nulla. Sed mattis in ipsum non convallis. Nullam
        justo erat, laoreet tincidunt pellentesque in, rutrum suscipit
        dolor. Donec facilisis pulvinar nulla, at interdum arcu facilisis
        in. Donec pellentesque semper odio, ut dignissim quam iaculis id.
        Pellentesque ut imperdiet odio.
      </div>
      <div class="${styles['comment']}">
      Quisque et turpis risus. Donec auctor convallis enim, a porta metus
      hendrerit at. In ornare libero eros, et dapibus sem interdum et.
      Vivamus condimentum in tortor in aliquam. Nullam facilisis orci ac
      dolor fermentum laoreet. Aenean at lacus augue. Donec pellentesque
      ante et sollicitudin lacinia.
      </div>
      <div class="${styles['comment']}">
        Donec et vestibulum ex. Praesent justo felis, efficitur id maximus
        in, laoreet eu quam. Vivamus molestie pretium augue sit amet
        blandit. Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Nunc et urna placerat, laoreet
        lorem non, tristique justo. Phasellus nec fermentum nulla, gravida
        tempor felis. Aliquam faucibus varius nunc ac pulvinar. Aenean in
        convallis risus.
      </div>
      <div class="${styles['comment']}">
        Curabitur pulvinar velit in lectus luctus, eget bibendum ex mollis.
        Donec in aliquet arcu. Nullam in lacus et sem venenatis aliquam sit
        amet quis velit. Praesent commodo ante ut lectus placerat, in
        iaculis sem lacinia. Sed neque eros, condimentum id pulvinar non,
        congue et justo. Proin eu massa lorem. Vivamus massa augue,
        condimentum nec mattis eu, lacinia vitae velit. Aliquam faucibus
        turpis pulvinar massa pulvinar, id hendrerit lectus venenatis. Cum
        sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Aenean accumsan laoreet elit, nec auctor lorem
        vulputate vitae. Nulla eget nulla tincidunt, placerat odio
        venenatis, vehicula velit. Donec sollicitudin purus nec turpis
        cursus, sit amet convallis turpis feugiat. Proin sed ipsum id arcu
        maximus elementum. Morbi vitae mauris orci. Donec cursus justo
        cursus, luctus tortor nec, viverra diam.
      </div>
      <div class="${styles['comment']}">
        Sed volutpat dapibus mattis. Pellentesque luctus non arcu et
        elementum. Nullam sapien libero, euismod ac fermentum non,
        ultricies non purus. Phasellus aliquet id neque id commodo.
        Aliquam erat volutpat. Sed faucibus magna sit amet libero
        imperdiet suscipit. Pellentesque tincidunt sem vitae sapien
        viverra sodales.
      </div>
    </div>
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
