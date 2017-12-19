import '../styles/index.scss';
import getRecentGitCommits from './get-git-messages';
import backgroundTouch from './background-touch';
import backgroundDesktop from './background-desktop';
import _ from 'lodash';

function isTouchDevice() {
  return 'ontouchstart' in document.documentElement;
}

function init() {
  // getRecentGitCommits();
  window.addEventListener('resize', _.throttle(deligateResize, 250));
  window.resizeController = (isTouchDevice()) ? new backgroundTouch() : new backgroundDesktop();
}

function deligateResize(e) {
  resizeController.height = document.body.clientHeight;
  resizeController.width = document.body.clientWidth;
}

document.addEventListener('DOMContentLoaded', init);
