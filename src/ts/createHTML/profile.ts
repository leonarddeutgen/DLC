import { dlcVideos } from "../main";
import { ISnippet } from "../models/ISnippet";

const profileContainer = document.getElementById("container--profile");
const navBar = document.getElementById("navBar");

export let profileList: ISnippet[] = [];
const LSValue = localStorage.getItem("profileList");

if (LSValue) {
  profileList = JSON.parse(LSValue);
}

export const createHTMLProfile = () => {
  localStorage.setItem("profileList", JSON.stringify(profileList));

  //Tömmer sidan
  if (profileContainer) {
    profileContainer.innerHTML = "";
  }

  for (let i = 0; i < profileList.length; i++) {
    const profileImg = document.createElement("img");
    const profiletitleBox = document.createElement("div");
    const profileTitle = document.createElement("h3");
    const profileTextBox = document.createElement("div");
    const profileText = document.createElement("p");
    //classes
    profileImg.className = "profile";
    profiletitleBox.className = "profile--titleBox";
    profileTitle.className = "profile--title";
    profileTextBox.className = "profile--textBox";
    profileText.className = "profile--text";
    //innerHTML
    profileImg.src = dlcVideos[i].snippet.thumbnails.high.url;
    profileTitle.innerHTML = dlcVideos[i].snippet.title;
    profileText.innerHTML = dlcVideos[i].snippet.description;
    //Append
    profileContainer?.appendChild(profileImg);
    profileContainer?.appendChild(profiletitleBox);
    profiletitleBox.appendChild(profileTitle);
    profileContainer?.appendChild(profileTextBox);
    profileTextBox.appendChild(profileText);
  }
};

navBar?.addEventListener("click", () => {
  profileList.pop();
  window.open("index.html", "_self");
  createHTMLProfile();
});
