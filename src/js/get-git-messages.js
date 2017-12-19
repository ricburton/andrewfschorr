const endpoint = 'https://api.github.com/users/andrewfschorr/events';

function getRecentGitCommits() {
  fetch(endpoint).then(resp => resp.json()).then((data) => {
    console.log(data);
    return data;
  }).catch((err) => {
    throw new Error(err);
  });
}

export default getRecentGitCommits;
