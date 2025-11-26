import {TrackItem} from "./TrackItem.tsx";
import {useTracks} from "../bll/useTracks.ts";
import style from './tracks.module.css'

type Props = {
    onTrackSelect: (id: string | null) => void
    selectedTrackId: string | null
};


export const TracksList = ({onTrackSelect, selectedTrackId}: Props) => {
    const tracksManagement = useTracks()

    if (tracksManagement.tracks === null) return <div>⌛Loading...</div>

    const handleResetClick = ()=>{
        onTrackSelect?.(null)
    }

    const handleClick = (trackId:string) => {
        onTrackSelect?.(trackId)
    }

    const handleRefreshClick = ()=>{
        tracksManagement.refresh()
    }
    return (
        <div>
            <button onClick={handleResetClick}>reset
            </button>
            <button onClick={handleRefreshClick}>refresh</button>
            <hr/>
            <div style={{display: 'flex', gap: '30px'}}>

                <ul className={style.tracks}>
                    {tracksManagement.tracks.map((track) => {
                        return (
                          <TrackItem
                              track={track}
                              isSelected={track.id === selectedTrackId}
                              onSelect={handleClick}
                          />
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}





