import React, { Component } from 'react';
import axios from 'axios';
import './MusicaLetra.css';
import Main from '../Template/Main';
import Lupa from '../../Assets/Template/lupa.png'
import Header from '../Template/Header';

const title = "Sua letra está aqui!";

const urlAPI = "http://localhost:5001/api/cifra/getall";
const initialState = {
    cifra: { idCifra: 0, idCantor: 0, idGenero: 0, nomeMusica: '', letraEAcordes: '' },
    lista: [],
    pesquisa: '',
    valorPesquisa: ''
}

export default class Musica extends Component {

    state = { ...initialState }

    componentDidMount() {
        axios(urlAPI).then(resp => {
            this.setState({ lista: resp.data })
        })
    }

    limpar() {
        this.setState({ curso: initialState.cifra });
    }

    getListaAtualizada(cifra, add = true) {
        const lista = this.state.lista.filter(a => a.id !== cifra.idCantor);
        if (add) lista.unshift(cifra);
        return lista;
    }

    atualizaCampo(event) {
        //clonar usuário a partir do state, para não alterar o state diretamente
        const cifra = { ...this.state.cifra };
        //usar o atributo NAME do input identificar o campo a ser atualizado
        cifra[event.target.name] = event.target.value;
        //atualizar o state
        this.setState({ cifra });
    }

    carregar(cifra) {
        this.setState({ cifra })
    }


    renderTable() {
        return (
            <div className="tituloListagem">
                <table className="cifra" id="tbCifra">
                    <thead>
                        <tr className="cabecTabela">
                            <th className="tabTituloCantor">A</th>
                        </tr>
                    </thead>

                    <tbody>
                    {this.state.lista.map(
                            (cifra) =>
                                <tr>
                                    <td>{cifra.letraEAcordes}</td>
                                </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }

    render() {
        return (
            <div className="conteudo">
                <Main >
                    {this.renderTable()}
                </Main>
            </div>

        )
    }
}