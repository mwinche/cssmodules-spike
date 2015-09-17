'use strict';

import styles from './TextArea.less';

export default class TextArea {
  constructor(element){
    element.innerHTML = `
      <textarea class="${styles['textarea']}"></textarea>
    `;
  }
};
