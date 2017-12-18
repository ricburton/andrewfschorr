const endpoint = 'https://api.github.com/users/andrewfschorr/events';

function getRecentGitCommits() {
  console.log('ello');
  fetch(endpoint).then(resp => resp.json()).then((data) => {
    console.log(data);
  }).catch((err) => {
    throw new Error(err);
  });
}

export default getRecentGitCommits;
