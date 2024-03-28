async function getLatestCommitSHA(owner, repo) {
const url = `https://api.github.com/repos/${owner}/${repo}/commits`;
const response = await fetch(url);
if(response){
    console.log(response);
}
}

const owner = 'Kryptoskatt';
const repo = 'webflow-custom';

getLatestCommitSHA(owner,repo);
