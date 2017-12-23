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
  getRecentGitCommits(window.mainController.addCommitMessages.bind(window.mainController));
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
    this.commitMessages = data;
    this.curCommitMessageI = 0;
    this.commitRepoEl = document.querySelector('.commit-repo');
    this.commitDateEl = document.querySelector('.commit-date');
    this.typeOutCommitMessage(this.commitMessages[this.curCommitMessageI++]);
  }

  typeOutCommitMessage(commitObj) {
    const commandLineTextEl = document.querySelector('.cl-text');
    let sIdx = 0;
    let curString = '';
    const s = commitObj.commit;

    this.commitRepoEl.innerHTML = `Commit to <a target="_blank" href="http://github.com/${commitObj.repo}">${commitObj.repo}</a>`;
    this.commitDateEl.innerHTML = `On <a href="${commitObj.commitUrl}" target="_blank">${commitObj.dateTime}</a>`;

    function addToString(){
      setTimeout(() => {
        curString += s[sIdx++];
        commandLineTextEl.innerHTML = curString;
        if (sIdx < s.length) {
          addToString.call(this);
        } else {
          setTimeout(() => {
            this.typeOutCommitMessage(this.commitMessages[this.curCommitMessageI++ % this.commitMessages.length]);
          }, 1000);
        }
      }, Math.random() * 200);
    }
    addToString.call(this);
  }
}