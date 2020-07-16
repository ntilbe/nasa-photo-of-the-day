import React from "react"
import "./DetailsContainer.css"

import PhotoDateHeader from './PhotoDateHeader'
import PhotoContainer from './PhotoContainer'

export default function DetailsContainer({ info }) {
    if (!info) return <h3>Gathering data from NASA...</h3>;
    return (
        <div className='photoContainer'>
            {/* <h2>{info.title}</h2>
            <h4>{info.date}</h4> */}
            {/* <img src={info.url} alt={info.title} />
            <p>{info.explanation}</p> */}
            <PhotoDateHeader info={info} />
            <PhotoContainer info={info} />
        </div>
    )
}