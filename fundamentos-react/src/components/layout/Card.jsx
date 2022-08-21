import React from "react"

import './Card.css'

export default (props) => {

    const cardStyle = {
        backgroundColor: props.color || "#CCC",
        borderColor: props.color || "#CCC"
    }

    return (
        <div className="card" style={cardStyle}>
            <h3 className="title">{props.title}</h3>
            <div className="content">
                { props.children }
            </div>
        </div>
    )
}
