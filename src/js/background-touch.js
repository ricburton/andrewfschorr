export default class backgroundTouch {
  constructor() {
    this.width = document.body.clientWidth;
    this.height = document.body.clientHeight;
    document.addEventListener('touchstart', this.transitionTouch.bind(this));
  }

  transitionTouch(e) {
    const percentageHeight = e.touches[0].pageY / this.height;
    const percentageGrey = Math.round(percentageHeight * 255);
    document.body.style.background = `rgba(${percentageGrey}, ${percentageGrey}, ${percentageGrey}, 0.5)`;
  }
}