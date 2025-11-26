import {useTrackDetail} from "../bll/useTrackDetail.ts";
import style from './trackDetail.module.css'

type Props = {
    selectedTrackId:string|null
};


export const TrackDetail = ({selectedTrackId}: Props) => {
   const {selectedTrack} = useTrackDetail(selectedTrackId)

    return (
        <div className={style.track}>
            <h3>Details</h3>
            {!selectedTrack  &&'Track is not selected'}
            {!selectedTrack && selectedTrackId  &&'loading...'}
            {selectedTrack && selectedTrack.id !== selectedTrackId && 'loading...'}
            { selectedTrack && selectedTrack.id === selectedTrackId &&<><h4>{selectedTrack.attributes.title}</h4>
                <p>{selectedTrack.attributes.lyrics}</p></>
            }


        </div>
    );
};