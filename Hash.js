function getLatestCommitSHA(owner, repo) {
const url = `https://api.github.com/repos/${owner}/${repo}/commits`;
return fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch latest commit SHA');
        }
        return response.json();
    })
    .then(commits => {
        if (commits.length > 0) {
            return commits[0].sha;
        } else {
            throw new Error('No commits found in the repository');
        }
    });
}

const owner = 'Kryptoskatt';
const repo = 'webflow-custom';


getLatestCommitSHA(owner, repo).then((latestCommitSHA)=>{
localStorage.setItem('latestSHA',latestCommitSHA)
})
.catch(error => {
    console.error('Failed to get latest SHA', error.message);
});
