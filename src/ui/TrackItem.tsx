import type {TrackType} from "../Types.ts";
import style from './tracks.module.css'
import clsx from "clsx";

type Props={
    track:TrackType
    isSelected:boolean
    onSelect:(trackId:string)=>void
}

export function TrackItem({track,isSelected,onSelect}:Props){

    const className = clsx({[style.track]:true,[style.selected]:isSelected});


    return(
        <li
            className={className}
            style={{borderColor: isSelected ? 'orange' : '#747bff'}}
            key={track.id}>
            <div onClick={()=>onSelect(track.id)}>🎶{track.attributes.title}</div>
            <audio src={track.attributes.attachments[0].url} controls={true}></audio>
        </li>
    )

}