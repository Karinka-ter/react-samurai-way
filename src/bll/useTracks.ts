import {useEffect, useState} from "react";
import type {TrackType} from "../Types.ts";
import {getTracksViaAPI} from "../dal/api.ts";

export function useTracks(){
    const [tracks, setTracks] = useState<TrackType[] |null>(null)
    useEffect(() => {
         getTracksViaAPI().then(res => setTracks(res.data))
    }, []);
     return {tracks,refresh:()=>{
             setTracks(null)
             getTracksViaAPI().then(res => setTracks(res.data))
     }};
}


// {tracks:[
//     {id:1,type:'bla bla', attributes:{ title:'string',
//             user:'userType',
//             addedAt: 'string',
//             attachments:[{
//                 "id": 'string',
//                 "addedAt": 'string',
//                 "updatedAt": 'string',
//                 "version": 2,
//                 "url": 'http://www.mfiles.co.uk/mp3-downloads/brahms-lullaby.mp3',
//                 "contentType": 'string',
//                 "originalName": 'string',
//                 "fileSize": 2
//             }]}},
//     {id:2,type:'bla bla', attributes:{ title:'string',
//             user:'userType',
//             addedAt: 'string',
//             attachments:[{
//                 "id": 'string',
//                 "addedAt": 'string',
//                 "updatedAt": 'string',
//                 "version": 2,
//                 "url": 'http://www.mfiles.co.uk/mp3-downloads/brahms-lullaby.mp3',
//                 "contentType": 'string',
//                 "originalName": 'string',
//                 "fileSize": 2
//             }]}},
//     {id:3,type:'bla bla', attributes:{ title:'string',
//             user:'userType',
//             addedAt: 'string',
//             attachments:[{
//                 "id": 'string',
//                 "addedAt": 'string',
//                 "updatedAt": 'string',
//                 "version": 2,
//                 "url": 'http://www.mfiles.co.uk/mp3-downloads/brahms-lullaby.mp3',
//                 "contentType": 'string',
//                 "originalName": 'string',
//                 "fileSize": 2
//             }]}},
//     {id:4,type:'bla bla', attributes:{ title:'string',
//             user:'userType',
//             addedAt: 'string',
//             attachments:[{
//                 "id": 'string',
//                 "addedAt": 'string',
//                 "updatedAt": 'string',
//                 "version": 2,
//                 "url": 'http://www.mfiles.co.uk/mp3-downloads/brahms-lullaby.mp3',
//                 "contentType": 'string',
//                 "originalName": 'string',
//                 "fileSize": 2
//             }]}},
// ]}