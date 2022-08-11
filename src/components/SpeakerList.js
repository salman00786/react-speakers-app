import { useContext } from "react";
import Speaker from "./Speaker";
import ReactPlaceholder from "react-placeholder";
import useRequestRest, { REQUEST_STATUS } from "../hooks/useRequestDelayRest";
import { data } from "../../SpeakerData";
import { SpeakerFilterContext } from "../contexts/speakerFilterContext"
import SpeakerAdd from "./SpeakerAdd";

function SpeakerList() {

    const {
        data: speakersData,
        requestStatus,
        error,
        updateRecord,
        insertRecord,
        deleteRecord,
    } = useRequestRest();

    const { searchQuery, eventYear } = useContext(SpeakerFilterContext);


    if (requestStatus === REQUEST_STATUS.FAILURE) {
        return (<div className="text-danger" style={{ textAlign: "center" }}> ERROR: <b>Loading speaker Data Failed {error}</b></div>)
    }

    return (
        <div className="container speakers-list">
            <ReactPlaceholder
                type="media"
                rows={15}
                className="speakerslist-placeholder"
                ready={requestStatus === REQUEST_STATUS.SUCCESS}
            >
                <SpeakerAdd eventYear={eventYear} insertRecord={insertRecord} />
                <div className="row">
                    {speakersData
                        .filter(function (speaker) {
                            return (
                                speaker.first.toLowerCase().includes(searchQuery) ||
                                speaker.last.toLowerCase().includes(searchQuery)
                            );
                        })
                        .filter(function (speaker) {
                            return speaker.sessions.find((session) => {
                                return session.eventYear === eventYear;
                            });
                        })
                        .map(function (speaker) {
                            return (
                                <Speaker
                                    key={speaker.id}
                                    speaker={speaker}
                                    updateRecord={updateRecord}
                                    insertRecord={insertRecord}
                                    deleteRecord={deleteRecord}
                                />
                            );
                        })}
                </div>
            </ReactPlaceholder>
        </div>
    )
}

export default SpeakerList;