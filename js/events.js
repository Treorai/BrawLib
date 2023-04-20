//events
searchRepoButton.addEventListener('click', (e) => {
    e.preventDefault();
    searchRepoButton.disabled = true;
    searchRepoButton.textContent = '';

    //start doing stuff
    let username = document.getElementById('usernameInput').value;
    if(username){
        let url = `https://api.brawlhalla.com/player/${username}/stats&api_key=${api_key}`;
        getUserInfo(url);
        getRankings();
    }
    //end stuffs

    searchRepoButton.textContent = 'Search';
    searchRepoButton.disabled = false;
});

brawlForm.addEventListener('click', (e) => {
    e.preventDefault();
    brawlForm.disabled = true;
    brawlForm.textContent = '';

    //start doing stuff
    let username = document.getElementById('usernameInput').value;
    if(username){
        let url = `https://api.brawlhalla.com/player/${username}/stats&api_key=${api_key}`;
        getUserInfo(url);
        getRankings();
    }
    //end stuffs

    brawlForm.textContent = 'Search';
    brawlForm.disabled = false;
});