import React from "react"
import "./DetailsContainer.css"

export default function PhotoCaption({ caption }) {
    if (!caption) return <h3>Loading caption...</h3>;
    return (
        <div className='photoCaption'>
            <p>{caption}</p>
        </div>
    )
}