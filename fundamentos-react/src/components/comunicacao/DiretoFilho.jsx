import React from "react"

export default props => {
    return(
        <div>
            <span>{props.nome} <strong>{props.idade}</strong> {props.nerd ? "Verdadeiro" : "Falso"}</span>
        </div>
    )
}