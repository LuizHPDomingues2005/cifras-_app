import Main from './Components/Template/Main';
import Menu from './Components/Template/Menu';
import './App.css';
import Logo from './Components/Template/Logo';
import Rotas from './Rotas';
import Footer from './Components/Template/Footer';
import Imagem from './Components/Template/Imagem';
import Artista from './Components/Artistas/Artista';
import { Router, Route, browserHistory, BrowserRouter} from 'react-router-dom'
import ConteudoPrincipal from './Components/Template/ConteudoPrincipal';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Logo />
        <Menu />
        <Main />
        <Imagem />
        <ConteudoPrincipal />
        <Rotas />
        <Footer  />
      </div>
    </BrowserRouter>
  );
}
