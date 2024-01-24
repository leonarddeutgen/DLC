import { dlcVideos } from "../main"
import { ISnippet } from "../models/ISnippet";

const profileContainer = document.getElementById("container--profile");
const navBar = document.getElementById("navBar");

export let profileList:ISnippet[] = [];
const LSValue = localStorage.getItem("profileList");

if(LSValue){
    profileList = JSON.parse(LSValue);
}

export const createHTMLProfile = ()=>{
    localStorage.setItem("profileList", JSON.stringify(profileList));

    for (let i=0; i<profileList.length; i++){
        const profileImg = document.createElement("img");
        const profileTitle = document.createElement("h2");
        const profileTextBox = document.createElement("div");
        const profileText = document.createElement("p");

        profileImg.className = ("profile");
        profileTitle.className = ("profile--title");
        profileTextBox.className = ("profile--textBox");
        profileText.className = ("profile--text");

        profileImg.src = dlcVideos[i].snippet.thumbnails.high.url;

        profileContainer?.appendChild(profileImg);

        navBar?.addEventListener("click",()=>{
            profileList = [];
            if(profileContainer){
                profileContainer.innerHTML = "";
            }
            window.open("index.html", "_self");
        })
        
    }
}

