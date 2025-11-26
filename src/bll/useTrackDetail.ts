import {useEffect, useState} from "react";
import type {SelectedTrackType} from "../Types.ts";
import {getTrack} from "../dal/api.ts";

export const useTrackDetail = (selectedTrackId:string|null)=>{
    const [selectedTrack, setSelectedTrack] = useState<SelectedTrackType|null>(null)


    useEffect(() => {
        if(selectedTrackId === null){
            setSelectedTrack(null)
            return
        }
        getTrack(selectedTrackId).then(res=>setSelectedTrack(res.data))
    }, [selectedTrackId]);

    return {selectedTrack}
}