import type {SelectedTrackType, TrackType} from "../Types.ts";

const prerareHeaders = ()=>{
    const apiKey =  import.meta.env.VITE_API_KEY
    if(!apiKey) return undefined
    return {
        'api-key': apiKey
    }
}


export const getTrack = async (selectedTrackId:string): Promise<{data:SelectedTrackType}>=>{
   return fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrackId}`,{
        headers: prerareHeaders()
    }).then(res => res.json())

}

export const getTracksViaAPI = async ():Promise<{data:TrackType[]}>=>{
   return fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
        headers: prerareHeaders()
    }).then(res => res.json())
}