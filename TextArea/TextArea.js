'use strict';

import styles from './TextArea.css';

export default class TextArea {
  constructor(element){
    element.innerHTML = `
      <textarea class="${styles['textarea']}"></textarea>
    `;
  }
};
