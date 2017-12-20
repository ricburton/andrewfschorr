export default class backgroundTouch {
  constructor(changeBgFn) {
    this.width = document.body.clientWidth;
    this.height = document.body.clientHeight;
    this.changeBgFn = changeBgFn;
    document.addEventListener('touchstart', this.transitionTouch.bind(this));
  }

  transitionTouch(e) {
    const percentageHeight = e.touches[0].clientY / window.innerHeight;
    // const percentageGrey = Math.round(percentageHeight * 255);
    this.changeBgFn(percentageHeight);
  }
}