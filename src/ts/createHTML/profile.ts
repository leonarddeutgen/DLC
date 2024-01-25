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
    const profileTitle = document.createElement("h2");
    const profileTextBox = document.createElement("div");
    const profileText = document.createElement("p");
    //classes
    profileImg.className = "profile";
    profileTitle.className = "profile--title";
    profileTextBox.className = "profile--textBox";
    profileText.className = "profile--text";
    //innerHTML
    profileImg.src = dlcVideos[i].snippet.thumbnails.high.url;
    //Append
    profileContainer?.appendChild(profileImg);
  }
};

navBar?.addEventListener("click", () => {
  profileList.pop();
  window.open("index.html", "_self");
  createHTMLProfile();
});
