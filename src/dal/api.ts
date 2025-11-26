import type {SelectedTrackType, TrackType} from "../Types.ts";


export const getTrack = async (selectedTrackId:string): Promise<{data:SelectedTrackType}>=>{
   return fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrackId}`,{
        headers:{
         //   'api-key': '2f030ac2-1bcc-4540-8cde-e88ef93a721b'
        }
    }).then(res => res.json())

}

export const getTracksViaAPI = async ():Promise<{data:TrackType[]}>=>{
   return fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
        headers: {
         //   'api-key': '2f030ac2-1bcc-4540-8cde-e88ef93a721b'
        }
    }).then(res => res.json())
}