export interface ISnippet {
    snippet: {
        title:string;
        description:string;

        thumbnails:{
            high:{
                url:string
            }
        }

        resourceId:{
            videoId:string;
        }
    }
}