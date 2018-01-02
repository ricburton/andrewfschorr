export default class backgroundDesktop {
    constructor(changeBgFn) {
        this.changeBgFn = changeBgFn;
        document.addEventListener('mousemove', this.transitionMove.bind(this));
    }

    transitionMove(e) {
        const percentageWidth = e.clientX / window.innerWidth;
        this.changeBgFn(percentageWidth);
    }
}
