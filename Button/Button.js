import styles from './Button.less';

export default class Button {
  constructor(element){
    let label = element.getAttribute('label') || '';

    element.innerHTML = `
      <input type="button" value="${label}" class="${styles['button']}" />
    `;
  }
};
