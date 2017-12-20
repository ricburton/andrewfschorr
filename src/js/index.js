import '../styles/index.scss';
import getRecentGitCommits from './get-git-messages';
import backgroundTouch from './background-touch';
import backgroundDesktop from './background-desktop';
import _ from 'lodash';

function isTouchDevice() {
  return 'ontouchstart' in document.documentElement;
}

document.addEventListener('DOMContentLoaded', () => {
  window.mainController = new MainController();
  window.addEventListener('resize', _.throttle(window.mainController.delegateResize.bind(window.mainController), 250));
  getRecentGitCommits(window.mainController.addCommitMessages.bind(this));
});

class MainController {
  constructor(resizeController) {
    this.wrapper = document.querySelector('.wrapper');
    // this.textBg = [...document.querySelectorAll('.background-light-text')]; // dont need to switch colors, looks fine

    this.resizeController =  (isTouchDevice())
      ? new backgroundTouch(this.changeBgColor.bind(this))
      : new backgroundDesktop(this.changeBgColor.bind(this));
  }

  delegateResize(e) {
    this.resizeController.height = document.body.clientHeight;
    this.resizeController.width = document.body.clientWidth;
  }

  changeBgColor(percentage) {
    const percentageGrey = Math.round(percentage * 255);
    this.wrapper.style.background = `rgba(${percentageGrey}, ${percentageGrey}, ${percentageGrey}, 0.5)`;
  }

  // ADD date/ time and repo!
  addCommitMessages(data) {
    const commandLineEl = document.querySelector('.command-line');
    let curIdx = 1;
    commandLineEl.innerHTML = data[curIdx++];
    function rotateCommitMessage() {
      setTimeout(() => {
        commandLineEl.innerHTML = data[curIdx++ % data.length - 1];
        rotateCommitMessage();
      }, 1000);
    }

    rotateCommitMessage();
  }
}