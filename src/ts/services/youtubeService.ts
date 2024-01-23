import { Ivideo } from "../models/Ivideo";
import { get } from "./serviceBase";


export const dlcGetVideos = async ():Promise <Ivideo[]> =>{
    const url = "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=15&playlistId=UUuZuBuctUovKIH9JnSidSRA&key=AIzaSyD8cuiWZMTO_72m5_rwMlVNownS1cOWuBs";
    const data = await get<Ivideo[]>(url);
    return data;
};