import "./Input.css"
import React, { useState } from "react"

export default () => {
    const [valor, setValor] = useState("Inicial")

    function quandoMudar(e){
        setValor(e.target.value)
    }

    return(
        <div className="input" style={{
            display:"flex",
            flexDirection: "column"
        }}>
            <h2>{valor}</h2>
            <input value={valor} onChange={quandoMudar} />
            <input value={valor} readOnly />
        </div>
    )
}