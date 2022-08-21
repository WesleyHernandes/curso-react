import React from "react"
import DiretoFilho from "./DiretoFilho"

export default () => {
    return(
        <div>
            <DiretoFilho nome="Junior" idade={20} nerd={true} />
            <DiretoFilho nome="Gabriel" idade={17} nerd={false} />
        </div>
    )
}