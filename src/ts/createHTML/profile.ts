import { dlcVideos } from "../main";
import { ISnippet } from "../models/ISnippet";

const navBar = document.getElementById("navBar");
const profileContainer = document.getElementById("container--profile");
const contentContainer = document.getElementById("container--content");


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
  };

  for (let i = 0; i < profileList.length; i++) {
    //Create
    const miniContainer1 = document.createElement("div");
    const profileImg = document.createElement("img");
    const profiletitleBox = document.createElement("div");
    const profileTitle = document.createElement("h5");
    const miniContainer = document.createElement("div");
    const profileTextBox = document.createElement("div");
    const profileText = document.createElement("p");
    const contentVideoBox = document.createElement("div");
    const contentVideo = document.createElement("iframe");
    //classes
    miniContainer1.className = "profile1";
    profileImg.className = "profile1--img";
    profiletitleBox.className = "profile1--titleBox";
    profileTitle.className = "profile1--title";
    miniContainer.className = "profile2";
    profileTextBox.className = "profile2--textBox";
    profileText.className = "profile2--text";
    contentVideoBox.className = "content1";
    //innerHTML
    profileImg.src = dlcVideos[i].snippet.thumbnails.high.url;
    profileTitle.innerHTML = dlcVideos[i].snippet.title;
    profileText.innerHTML = dlcVideos[i].snippet.description;
    contentVideo.src = `https://www.youtube.com/embed/${profileList[i].snippet.resourceId.videoId}?si=${profileList[i].snippet.resourceId.videoId}`;
    //Append
    profileContainer?.appendChild(miniContainer1);
    miniContainer1?.appendChild(profileImg);
    miniContainer1?.appendChild(profiletitleBox);
    profiletitleBox.appendChild(profileTitle);
    profileContainer?.appendChild(miniContainer);
    miniContainer?.appendChild(profileTextBox);
    profileTextBox.appendChild(profileText);

    contentContainer?.appendChild(contentVideoBox);
    contentVideoBox.appendChild(contentVideo);
  };
};

navBar?.addEventListener("click", () => {
  profileList.pop();
  window.open("index.html", "_self");
  createHTMLProfile();
});
