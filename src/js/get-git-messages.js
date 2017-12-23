import data from './dummy-commits';
import moment from 'moment';

const endpoint = 'https://api.github.com/users/andrewfschorr/events';

function getRecentGitCommits(cb) {
    fetch(endpoint).then(resp => resp.json()).then((data) => {
        const pushEvents = data.filter((evt) => {
            return evt.type === 'PushEvent';
        });
        const commitObjs = [];
        pushEvents.forEach((pushEvt) => {
            pushEvt.payload.commits.forEach((commit) => {
                commitObjs.push({
                    commit: commit.message,
                    dateTime: moment(pushEvt.created_at).format('dddd, MMMM Do YYYY, h:mm:ss a'),
                    repo: pushEvt.repo.name,
                    commitUrl: `https://github.com/${pushEvt.repo.name}/commit/${commit.sha}`,
                })
            })
        });
    cb(commitObjs);
    }).catch((err) => {
        cb(data);
        throw new Error(err);
    });
}

export default getRecentGitCommits;