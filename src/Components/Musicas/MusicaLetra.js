import React, { Component } from 'react';
import axios from 'axios';
import './MusicaLetra.css';
import Main from '../Template/Main';
import Lupa from '../../Assets/Template/lupa.png'
import Header from '../Template/Header';

const title = "Sua letra está aqui!";

const urlAPI = "http://localhost:5001/api/cifra/idCifra";
const initialState = {
    artista: { idCantor: 0, nomeCantor: '', qtdDeCifras: 0 },
    lista: [],
    pesquisa: '',
    valorPesquisa: ''
}

export default class Artista extends Component {

    state = { ...initialState }

    componentDidMount() {
        axios(urlAPI).then(resp => {
            this.setState({ lista: resp.data })
        })
    }

    limpar() {
        this.setState({ curso: initialState.artista });
    }

    etListaAtualizada(artista, add = true) {
        const lista = this.state.lista.filter(a => a.id !== artista.idCantor);
        if (add) lista.unshift(artista);
        return lista;
    }

    atualizaCampo(event) {
        //clonar usuário a partir do state, para não alterar o state diretamente
        const artista = { ...this.state.artista };
        //usar o atributo NAME do input identificar o campo a ser atualizado
        artista[event.target.name] = event.target.value;
        //atualizar o state
        this.setState({ artista });
    }

    carregar(artista) {
        this.setState({ artista })
    }


    renderTable() {
        return (
            <div className="divGenerica"><div className="letra">Dm G C F Dm E A9 Am G Doente de amor prcurei remédio na vida noturna C F Como a flor da noite em uma boate aqui na zona sul. Am E A dor do amor, é com outro amor, que a gente cura Dm Am E Vim curar a dor desse mal de amor na boa azul
            </div>
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