import React from "react"

import alunos from '../../data/alunos'

export default () => {
    const lis = alunos.map(aluno => {
        return (<li key={aluno.id}>{aluno.id} {aluno.nome} {aluno.nota}</li>)
    })

    return(
        <div>
            <ul style={{ listStyle: "none", padding:"0px" }}>
                {lis}
            </ul>
        </div>
    )
}