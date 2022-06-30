import React from "react";
import { Routes, Route } from 'react-router-dom';

import Cadastro from "./Paginas/Cadastro/Cadastro";
import Login from "./Paginas/Login/Login";
import Artista from "./Components/Artistas/Artista";
import Cifra from "./Components/Cifras/Cifra";
import Genero from "./Components/Generos/Genero";
import MusicaLetra from "./Components/Musicas/MusicaLetra";
import Main from './Components/Template/Main';

export default function Rotas(){
    return(
        <Routes>
            <Route exact path='/' 
                element={
                    <Main>
                        <div className="main">
                            <h1 className="titulo">Bem Vindo!</h1>
                            <h2 className="frase">Este é um site para você acessar a suas músicas, cifras e cantores favoritos</h2>
                        </div>
                        <div className="vazio">
                            <div className="caixa">
                              <table border="1">
                                  <tr >
                                      <th>Artistas</th>
                                      <th>Gêneros</th>
                                  </tr>

                                  <tr >
                                      <td>Latino-Americano</td>
                                      <td>Sertanejo</td>
                                  </tr>

                                  <tr >
                                      <td>Norte-Americano</td>
                                      <td>Blues</td>
                                  </tr>

                                  <tr >
                                      <td>Europeu</td>
                                      <td>Rock</td>
                                  </tr>

                                  <tr >
                                      <td>Latino-Americano</td>
                                      <td>Samba</td>
                                  </tr>

                                  <tr >
                                      <td>Latino-Americano</td>
                                      <td>Forró</td>
                                  </tr>
                              </table>
                            </div>
                            <div className="colaboradores">
                                  <h1>Colaboradores:</h1>
                                <h2>Talita Barbosa / Luiz Parolim</h2>
                              </div>
                        </div>
                    </Main>
                }/>

            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />

            <Route path='/cantor' element={<Artista />} />
            <Route path='/cifra'  element={<Cifra />} />
            <Route path='/genero' element={<Genero />} />
            <Route path='/musica' element={<MusicaLetra />} />
            <Route path='/' element={<Artista />} />
            
            <Route path="*" to='/' />
        </Routes>
    )
}
