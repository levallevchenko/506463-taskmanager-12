import {createElement} from "../util.js";

const createTasksSortTemplate = () => {
  return `<div class="board__filter-list">
    <a href="#" class="board__filter">SORT BY DEFAULT</a>
    <a href="#" class="board__filter">SORT BY DATE up</a>
    <a href="#" class="board__filter">SORT BY DATE down</a>
  </div>`;
};

export default class TaskSort {
  constructor() {
    this._element = null;
  }

  _getTemplate() {
    return createTasksSortTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this._getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

