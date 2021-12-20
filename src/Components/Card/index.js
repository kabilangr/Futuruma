import React, { useState } from "react";
import "./style.css"

import CustomModal from "../../utils/CustomModal";


export const Card = ({id,number,title,writers,originalAirDate,desc}) => {
    const [showModel, setShowmodel] =useState(false)

    return(
        <div className="card-div" onClick={() => {
            setShowmodel(!showModel)
        }}>
            <h3>Title: {title}</h3>
            <h3>Writers: {writers}</h3>
            <h3>Air Date: {originalAirDate}</h3>
            <h3 className="desc-title">Description:</h3><h4>{desc}</h4>
            {showModel && 
            <CustomModal closeModal={() =>setShowmodel(false)} >
                <div >
                <iframe width="320" height="215"  src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1" title="YouTube video player" frameborder="0" auto allowfullscreen="allowfullscreen"></iframe>
                </div>
            </CustomModal>}

        </div>
        )
}