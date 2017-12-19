export default class backgroundTouch {
  constructor() {
    this.width = document.body.clientWidth;
    this.height = document.body.clientHeight;
    document.addEventListener('touchstart', this.transitionTouch.bind(this));
  }

  transitionTouch(e) {
    // console.log(e.touches[0].clientX / this.width);
    console.log(e.touches[0].screenY , this.height);
  }
}


var box = elem.getBoundingClientRect();

// var body = document.body;
// var docEl = document.documentElement;

// var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
// var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

// var clientTop = docEl.clientTop || body.clientTop || 0;
// var clientLeft = docEl.clientLeft || body.clientLeft || 0;

// var top  = box.top +  scrollTop - clientTop;
// var left = box.left + scrollLeft - clientLeft;

// return { top: Math.round(top), left: Math.round(left) };