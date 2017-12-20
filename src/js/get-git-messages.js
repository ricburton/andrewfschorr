const endpoint = 'https://api.github.com/users/andrewfschorr/events';

function getRecentGitCommits(cb) {
  const dummy = [
    "did stuff",
    "pretty colorz n ish",
    "did random ish",
    "Added fetch ish",
    "idk, tryin shit out",
    // "string compression",
    // "fuck matrix multiplication",
    // "require syntax to be able to run from the command line",
    // "1.5",
    // "Added 1.4",
    // "1.3 okokok",
    // "Added 1.2",
    // "Added README goodness",
    // "testing",
    // "got test setup working",
    // "did stuff",
    // "Added js model",
    // "idk",
    // "adding stuff",
    // "added sql",
    // "updated to webpack 3 n other important ass stuff",
    // "added fetch function thing",
  ];

  cb(dummy);
  // fetch(endpoint).then(resp => resp.json()).then((data) => {
  //   // console.log(data);
  //   const commitMessages = data.filter((evt) => {
  //     return evt.type === 'PushEvent';
  //   }).map((evt) => {
  //     return evt.payload.commits;
  //   }).reduce((prev, cur) => {
  //     return prev.concat(cur);
  //   }).map((item) => {
  //     return item.message;
  //   });
  //   return commitMessages;
  // }).catch((err) => {
  //   throw new Error(err);
  // });
}

export default getRecentGitCommits;
