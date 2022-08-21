import "./Contador.css"
import React, { Component } from 'react'
import Display from "./Display"
import PassoForm from "./PassoForm"
import Botoes from "./Botoes"

class Contador extends Component {
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    inc = () => {
        this.setState({
            numero : this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero : this.state.numero - this.state.passo
        });
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo : novoPasso
        })
    }

    render(){
        return(
            <div className='contador'>
                <h2>Contador</h2>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
                <Display numero={this.state.numero} />
                <Botoes setDec={this.dec} setInc={this.inc} />
            </div>
        )
    }
}

export default Contador