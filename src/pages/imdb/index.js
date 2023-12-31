import { useState } from "react";
import axios from "axios";
import './index.scss';
import pesquisa from '../../assets/images/lupa.png'


export default function Imdb() {
    const [filme, setFilme] = useState('');
    const [listaFilmes, setListaFilmes] = useState([]);

    async function Buscar() {
        let url = 'https://www.omdbapi.com?apikey=6f892ed&s=' + filme;

        let resposta = await axios.get(url);
        setListaFilmes(resposta.data.Search);

        console.log(resposta.data.Search)
    }


    return (
        <div className="pagina-imdb">
            <div className='container'>
                <div className='header'>
                    <div className='header-titulo'>
                        <h1>IMDB</h1>
                        
                    </div>
                </div>

                <div className="mid">
                    <h1>Consulta de Filmes</h1>

                    <div className="mid-consult">
                        <input type="text" value={filme} onChange={(e) => setFilme(e.target.value)} />
                        <button onClick={Buscar}><img src={pesquisa}/></button>
                    </div>
                </div>

                <div className="Tabela">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Codigo</th>
                                <th>Nome</th>
                                <th>Ano</th>                              
                            </tr>
                        </thead>
                        <tbody>
                            {listaFilmes.map((item) =>(
                                <tr className="map" key={item.imdbID}>
                                    <td>{item.imdbID}</td>
                                    <td>{item.Title}</td>
                                    <td>{item.Year}</td>
                                    <td><img className="poster"  src={item.Poster}/></td>
                                </tr>
                           ))}
                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    )
}