import {PageTitle} from "./PageTitle.tsx";
import {TracksList} from "./TracksList.tsx";
import {TrackDetail} from "./TrackDetail.tsx";
import {useTrackSelection} from "../bll/useTrackSelection.ts";


export function MainPage() {
    const {trackId,setTrackId} = useTrackSelection()

    const handleTrackSelect = (id:string|null)=>{
        setTrackId(id)
    }

    return (
        <div>
            <PageTitle/>
            <div style={{display: 'flex', gap: '40px'}}>
                <h1>MusicFun Player</h1>
                <TracksList selectedTrackId={trackId} onTrackSelect={handleTrackSelect}/>
                <TrackDetail  selectedTrackId={trackId}/>
            </div>
        </div>
    )
}