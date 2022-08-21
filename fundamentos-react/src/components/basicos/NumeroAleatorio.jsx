import React from "react"

export default (props) => {
    const { min,  max } = props
    const number = Math.floor(Math.random() * (max - min) + min)
    return(
        <div>
            <h2>Número aleatório</h2>
            <p>Valor Mínimo: { min }</p>
            <p>Valor Máximo: { max }</p>
            <p>Número aleatório: { number }</p>
        </div>
    )
}