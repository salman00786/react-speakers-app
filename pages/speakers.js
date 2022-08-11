import React from "react";
import SpeakerRenderProps from "../src/components/SpeakerRenderProps";



const Speakers = () => {


    return (
        <SpeakerRenderProps>
            {({ speakers }) => {
                <div>
                    {speakers.map(({ imageSrc, name }) => {
                        return <img src={`images/${imageSrc}.jpg`} alt={name} key={imageSrc}></img>
                    })}
                </div>
            }}

        </SpeakerRenderProps>
    )
}



export default withData(2)(Speakers);