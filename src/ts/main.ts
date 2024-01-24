import "../sass/style.scss";
import { Ivideo } from "./models/Ivideo";
import { dlcGetVideos } from "./services/youtubeService";

const videosContainer = document.getElementById("videosContainer");
const dlcVideoss: Ivideo = await dlcGetVideos();
//let dlcVideos = res.data.items;
/* axios.get(url).then((res) => {
  console.log(res.data); */

const dlcVideos = dlcVideoss.items;

console.log(dlcVideos);

for (let i = 0; i < dlcVideos.length; i++) {
  const videoBox = document.createElement("div");
  const videoTitle = document.createElement("h3");
  const imgLink = document.createElement("a");
  const img = document.createElement("img");
  const optionsContainer = document.createElement("div");
  const viewProfile = document.createElement("button");
  const ytBtn = document.createElement("button");
  const scBtn = document.createElement("button");
//classes
  videoBox.className = "videoBox";
  videoTitle.className = "videoBox--title";
  img.className = "videoBox--img";
  optionsContainer.className = "optionsContainer";
  viewProfile.className= "optionsContainer--profile"
  ytBtn.className = "optionsContainer--youtubeBtn";
  scBtn.className = "optionsContainer--soundCloudBtn";
// innerHTML
  videoTitle.innerHTML = dlcVideos[i].snippet.title;
  img.src = dlcVideos[i].snippet.thumbnails.high.url;
  viewProfile.innerHTML = "View Profile"
  ytBtn.innerHTML = "Youtube";
  scBtn.innerHTML = "SoundCloud";
//AddEvent


//Append
  videosContainer?.appendChild(videoBox);
  videoBox.appendChild(videoTitle);
  videoBox.appendChild(imgLink);
  imgLink.appendChild(img);
  videoBox.appendChild(optionsContainer);
  optionsContainer.appendChild(viewProfile);
  optionsContainer.appendChild(ytBtn);
  optionsContainer.appendChild(scBtn);
};
