import React from "react"

export default props => {
    return(
        <div>
            <label htmlFor="inputPasso">Passo:</label>
            <input id="inputPasso" value={props.passo} onChange={e => props.setPasso(e.target.value)} />
        </div>
    )
}