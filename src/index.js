import './styles/index.scss';
import getRecentGitCommits from './get-git-messages';

function init() {
  getRecentGitCommits();
}

document.addEventListener('DOMContentLoaded', init);
