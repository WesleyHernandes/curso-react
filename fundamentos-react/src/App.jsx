import './App.css'
import React from "react"
import Card from './components/layout/Card'

import Mega from './components/mega/Mega'
import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretoPai from './components/comunicacao/DiretoPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia  from './components/basicos/Familia'
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import NumeroAleatorio from "./components/basicos/NumeroAleatorio"

export default () => (
    <div id="app">
        <h1>Fundamentos do React</h1>

        <div className="cards">
            <Card title="#13 - Números megasena" color="#C1666B">
                <Mega />
            </Card>
            
            <Card title="#12 - Contador" color="#087E8B">
                <Contador numeroInicial={45} />
            </Card>

            <Card title="#11 - Componente controlado (input)" color="#F29E4C">
                <Input />
            </Card>
            
            <Card title="#10 - Comunicação Indireta" color="#CEA2AC">
                <IndiretaPai />
            </Card>

            <Card title="#9 - Comunicação Direta" color="#41521F">
                <DiretoPai />
            </Card>
            
            <Card title="#8 - Exibição condicional" color="#545F66">
                <ParOuImpar number={7} />
                <UsuarioInfo usuario={{ nome:"Pedro" }} />
            </Card>

            <Card title="#7 - Tabela de Produtos" color="#7209B7">
                <TabelaProdutos />
            </Card>

            <Card title="#6 - Lista de Alunos" color="#7F2CCB">
                <ListaAlunos />
            </Card>

            <Card title="#5 - Componentes com filhos" color="#D7816A">
                <Familia sobrenome="Hernandes">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Maria" />
                    <FamiliaMembro nome="joão" />
                </Familia>
            </Card>

            <Card title="#4 - Número aleatório" color="#1D84B5">
                <NumeroAleatorio min={1} max={60} />
            </Card>

            <Card title="#3 - Exemplo de fragmento" color="#3C896D">
                <Fragmento />
            </Card>

            <Card title="#2 - Com parâmetro" color="#48435C">
                <ComParametro titulo="Situação do aluno" aluno="Pedro Silva" nota={9.3} />
            </Card>

            <Card title="#1 - Primeiro componente" color="#B3001B">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
)
