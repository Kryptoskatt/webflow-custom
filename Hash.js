async function getLatestCommitSHA(owner, repo) {
  const url = `https://api.github.com/repos/${owner}/${repo}/commits`;
  try{
  const response = await fetch(url);
  console.log("response", response);
  if(response){
      console.log(response);
  }
}catch(error){
  console.log("some error occured",error);
}
  }
  
  const owner = 'Kryptoskatt';
  const repo = 'webflow-custom';
  
  getLatestCommitSHA(owner,repo);
