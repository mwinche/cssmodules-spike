'use strict';

import styles from './DropDown.css';

export default class DropDown {
  constructor(element){
    this.options = formatOptions(JSON.parse(element.getAttribute('options') || []));
    this.label = element.getAttribute('label') || 'Select';
    this.open = false;

    let optionsHTML = this.options.reduce(
      (htmlString, option) => htmlString + `
        <li class="${styles['option']}" value="${option.value}">
          ${option.name}
        </li>
      `
    , '');

    addClass(element, styles['dropdown']);

    element.innerHTML = `
      <span class="${styles['button']}">
        ${this.label}
      </span>
      <ul class="${styles['optionsContainer']}">
        ${optionsHTML}
      </ul>
    `;

    this.optionsContainer = element.querySelector(`.${styles['optionsContainer']}`);
    this.trigger = element.querySelector(`.${styles['button']}`);

    let optionElements = this.optionsContainer.querySelectorAll(`.${styles['option']}`);

    attachOptionData(optionElements, this.options);
    attachListeners(optionElements, 'click', event => {
      this.trigger.innerHTML = event.target.option.name;
      this.markSelected(event.target);
      this.toggleOpen();
    });

    this.trigger.addEventListener('click', event => {
      this.toggleOpen();
    });
  }

  toggleOpen(){
    this.open = !this.open;

    if(this.open){
      addClass(this.optionsContainer, styles['optionsContainer--open']);
      addClass(this.trigger, styles['button--open']);
    }
    else{
      removeClass(this.optionsContainer, styles['optionsContainer--open']);
      removeClass(this.trigger, styles['button--open']);
    }
  }

  markSelected(element){
    let selected = this.optionsContainer.querySelector(`.${styles['option--selected']}`);

    if(selected){
      removeClass(selected, styles['option--selected']);
    }

    addClass(element, styles['option--selected']);
  }
};

function formatOptions(options){
  return options.map(option => {
    if(option === undefined || option === null){
      return {
        name: 'null',
        value: 'null'
      }
    }

    let name = option.name || option;
    let value = option.value || option;

    return { name, value };
  });
}

function attachOptionData(elements, options){
  for(var i = 0; i < elements.length; i++){
    elements[i].option = options[i];
  }
}

function attachListeners(nodeList, type, callback){
  for(var i = 0; i < nodeList.length; i++){
    let node = nodeList[i];
    node.addEventListener(type, callback);
  }
}

function removeClass(element, className){
  let classes = element.className.split(' ');

  let index = classes.indexOf(className);

  if(index >= 0){
    classes.splice(index, 1);
  }

  element.className = classes.join(' ');
}

function addClass(element, className){
  let classes = element.className.split(' ');

  classes.push(className);

  element.className = classes.join(' ');
}
