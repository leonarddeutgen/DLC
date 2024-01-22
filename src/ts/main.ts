import axios from 'axios';
import '../sass/style.scss'

const url = "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=15&playlistId=UUuZuBuctUovKIH9JnSidSRA&key=AIzaSyD8cuiWZMTO_72m5_rwMlVNownS1cOWuBs";
const videosContainer = document.getElementById("videosContainer");

axios.get(url)
.then((res)=>{
    console.log(res.data)
    let youtubeList = res.data.items;

    for (let i=0; i < youtubeList.length; i++){
        const videoBox = document.createElement("div");
        const videoTitle = document.createElement("h3");
        const imgLink = document.createElement("a");
        const img = document.createElement("img");

        videoBox.className = ("videoBox");
        videoTitle.className = ("videoBox--title");
        img.className = ("videoBox--img");

        videoTitle.innerHTML = youtubeList[i].snippet.title;
        img.src = youtubeList[i].snippet.thumbnails.default.url;

        videosContainer?.appendChild(videoBox);
        videoBox.appendChild(videoTitle);
        videoBox.appendChild(imgLink);
        imgLink.appendChild(img);
    }
});

