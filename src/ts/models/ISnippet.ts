export interface ISnippet {
    snippet: {
        title:string;

        thumbnails:{
            default:{
                url:string
            }
        }

        resourceId:{
            videoId:string;
        }
    }
}