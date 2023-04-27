//const api_key = secrets.API_KEY;
import api_key from '../config.js';
import * as sorts from './sorts.js';
import updateGallery from './updateGallery.js';
let globaldata;
let sortstate = false;

const corsbypass= 'https://cors-anywhere.herokuapp.com/';
const serverurl = 'https://brawlibserver.treorai.repl.co';
const repliturl = serverurl;

// setup elements
const brawlForm = document.getElementById('inputSubmit');
const steamSearch = document.getElementById('searchRepoButton');
const profilehead = document.getElementById("profilehead");
profilehead.style.display = 'none';

//sorting field
const sortfield = document.getElementById("sortfield");
sortfield.style.display = 'none';
const btn_sbName = document.getElementById("sbName");
const btn_sbLvl = document.getElementById("sbLvl");
const btn_sbKDA = document.getElementById("sbKDA");
const btn_sbWR = document.getElementById("sbWR");

//sorting events
btn_sbName.addEventListener('click', (e) => {
    e.preventDefault();
    btn_sbName.disabled = true;

    sorts.sbName(globaldata.legends, sortstate);
    changeSortState();

    btn_sbName.disabled = false;
});

btn_sbLvl.addEventListener('click', (e) => {
    e.preventDefault();
    btn_sbLvl.disabled = true;

    sorts.sbLV(globaldata.legends, sortstate);
    changeSortState();
    
    btn_sbLvl.disabled = false;
});

btn_sbKDA.addEventListener('click', (e) => {
    e.preventDefault();
    btn_sbKDA.disabled = true;

    sorts.sbKDA(globaldata.legends, sortstate);
    changeSortState();
    
    btn_sbKDA.disabled = false;
});

btn_sbWR.addEventListener('click', (e) => {
    e.preventDefault();
    btn_sbWR.disabled = true;

    sorts.sbWR(globaldata.legends, sortstate);
    changeSortState();
    
    btn_sbWR.disabled = false;
});

//events
steamSearch.addEventListener('click', (e) => {
    e.preventDefault();
    steamSearch.disabled = true;

    //start doing stuff
        let username = document.getElementById('usernameInput').value;
        if(username){
            let bracket = '1v1';
            let region = 'all';
            let page = '1';
            let url = `https://api.brawlhalla.com/rankings/${bracket}/${region}/${page}?name=${username}`;
            getSteamPlayer(url);
        }
    //end stuffs

    steamSearch.disabled = false;
});

brawlForm.addEventListener('click', (e) => {
    e.preventDefault();
    brawlForm.disabled = true;

    //start doing stuff
        let username = document.getElementById('usernameInput').value;
        if(username){
           let url = `https://api.brawlhalla.com/player/${username}/stats`;
            //getUserInfo(url);
            sendDataToReplit(url);
        }
    //end stuffs

    brawlForm.disabled = false;
});

async function getSteamPlayer(player){
    const response = await fetch(player);
    const data = await response.json();
    if(data[0]){
        document.getElementById('usernameInput').value = (`${data[0].brawlhalla_id}`);
    } else {
        document.getElementById('usernameInput').value = (``);
    }
}

async function getUserInfo(url){
    const response = await fetch(url);
    const data = await response.json();
/**/console.log(data);
    globaldata = data;
    updateProfile(data);
    updateGallery(data.legends);
}

function updateProfile(data){
    document.getElementById("miuser").textContent=data.name;
    document.getElementById("milvl").textContent=data.level+` (${(data.xp_percentage*100).toFixed(2)}%)`;
    document.getElementById("migames").textContent=data.games;
    document.getElementById("miwins").textContent=data.wins+` (${(100*data.wins/data.games).toFixed(2)}%)`;
    }

async function changeSortState(){
    if(sortstate == true){
        sortstate = false;
    } else {sortstate = true}
}





function sendDataToReplit(url) {
    
    // Create an object with the request data
    const data = {
      url: url
    };
  
    // Send the HTTP POST request with the data as JSON in the request body
    fetch(repliturl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body:url //JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        // Process the response from Replit
        console.log(data);
        globaldata = data;
        updateProfile(data);
        updateGallery(data.legends);
    })
    .catch(error => {
        // Handle any errors that may occur
        console.error(error);
    });
    
}