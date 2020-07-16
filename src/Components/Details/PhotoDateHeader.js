import React from "react"
import "./DetailsContainer.css"

export default function PhotoDateHeader({ info }) {
    if (!info) return <h3>Loading info...</h3>;
    return (
        <div className='photoHeader'>
            <h2>{info.title}</h2>
            <h4>{info.date}</h4>
        </div>
    )
}