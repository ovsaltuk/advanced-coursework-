export default class Dropdown {
  constructor(id) {
    this.dropdown = document.getElementById(id);
    this.currentValue = this.dropdown.querySelector('.dropdown__current-value');
    this.currentValueText = this.currentValue.querySelector('p');
    this.list = this.dropdown.querySelector('ul');
    this.img = this.dropdown.querySelector('img');
    this.valueList = this.dropdown.querySelectorAll('li');

    this.currentValue.addEventListener('click', e => {
      e.preventDefault();
      if (this.list.classList.contains('show')){
       this.hideList();
      } else {
        this.showList(this.list);
      }
    });

    for (const value of this.valueList) {
      value.addEventListener('click', e => {
        this.hideList();
        for (const value of this.valueList) {
          value.classList.remove('selected');
        }
        e.target.classList.add('selected');
        this.currentValueText.textContent = e.target.textContent;
      });
    }
  }

  showList() {
    this.list.classList.add('show');
    this.addClickListener();
    this.img.classList.add('rotate');
  }

  hideList() {
    this.list.classList.remove('show');
    this.removeClickListener();
    this.img.classList.remove('rotate');
  }
  outsideClickListener(event) {
    if (!this.dropdown.contains(event.target)) {
      this.removeClickListener();
      this.hideList(this.list);
    }
  }

  addClickListener() {
    document.addEventListener('click', this.outsideClickListener.bind(this));
  }

  removeClickListener() {
    document.removeEventListener('click', this.outsideClickListener.bind(this));
  }
}