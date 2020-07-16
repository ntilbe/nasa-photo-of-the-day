  
import React from "react"
import "./DetailsContainer.css"
import PhotoCaption from './PhotoCaption'

export default function PhotoContainer({ info }) {
    if (!info) return <h3>Loading photo...</h3>;
    return (
        <div className='photoContainer'>
            <img src={info.url} alt={info.title} />
            <PhotoCaption caption={info.explanation} />
        </div>
    )
}