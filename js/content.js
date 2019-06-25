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
