import SpeakerList from "./SpeakerList";
import SpeakerToolBar from "./SpeakerToolBar";
import { SpeakerFilterProvider } from "../contexts/speakerFilterContext";

function Speaker() {


    return (
        <SpeakerFilterProvider startingShowSessions={false}>
            <SpeakerToolBar

            />
            <SpeakerList
            />
        </ SpeakerFilterProvider>
    )
}

export default Speaker;