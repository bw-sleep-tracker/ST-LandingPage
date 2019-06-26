class ContentSection {
  constructor(elementIn) {
    this.element = elementIn;
    this.contentBlocks = Array.from(
      this.element.querySelectorAll('.content-block')
    ).map(element => new ContentBlock(element, this));
    this.contentBlocks.forEach((element, index) => {
      if (index % 2 === 0) {
        element.toggleReverse();
      }
    });
  }
}

class ContentBlock {
  constructor(elementIn, parentIn) {
    this.element = elementIn;
    this.parent = parentIn;
  }

  toggleReverse() {
    this.element.classList.toggle('content-block-reverse');
  }
}

document
  .querySelectorAll('.main-content')
  .forEach(element => new ContentSection(element));

class Modal {
  constructor(elementIn) {
    this.element = elementIn;
    this.image = this.element.querySelector('.selected-modal-img');
    this.element
      .querySelector('.close')
      .addEventListener('click', () => this.hide());
    document
      .querySelectorAll('.modal-img')
      .forEach(element => new ModalImage(element, this));
  }

  setImage(imgSrc) {
    this.image.src = imgSrc;
  }

  hide() {
    this.element.classList.remove('content-modal-active');
  }

  show() {
    this.element.classList.add('content-modal-active');
  }
}

class ModalImage {
  constructor(elementIn, parentIn) {
    this.element = elementIn;
    this.parent = parentIn;
    this.element.addEventListener('click', () => {
      this.parent.setImage(this.element.src);
      this.parent.show();
    });
  }
}

new Modal(document.querySelector('.content-modal'));
