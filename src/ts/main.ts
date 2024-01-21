import '../sass/style.scss'

const url = "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=15&playlistId=UUuZuBuctUovKIH9JnSidSRA&key=AIzaSyD8cuiWZMTO_72m5_rwMlVNownS1cOWuBs";

fetch(url)
.then((response)=>response.json())
.then(data=>{
console.log(data);
});

