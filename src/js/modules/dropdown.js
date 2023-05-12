export default class Dropdown {
  constructor(id) {
    this.dropdown = document.getElementById(id);
    this.currentValue = this.dropdown.querySelector('.dropdown__current-value');
    this.list = this.dropdown.querySelector('ul');

    this.currentValue.addEventListener('click', e => {
      e.preventDefault();
      this.show(this.list);     
      this.addClickListener();
    });
  }

  show(element) {
    element.classList.toggle('show');
  }

  hide(element) {
    element.classList.remove('show');
  }

  outsideClickListener(event) {
    if (!this.dropdown.contains(event.target)) {
      this.hide(this.list);
      this.removeClickListener();
    }
  }

  addClickListener() {
    document.addEventListener('click', this.outsideClickListener.bind(this));
  }

  removeClickListener() {
    document.removeEventListener('click', this.outsideClickListener.bind(this));
  }
}