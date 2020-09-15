import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

import './App.css';
import { TextField, Button } from '@material-ui/core/';

const App = ()=>{

        const [value, setValue ] = useState('');
        const [query, setQuery ] = useState('one piece');
        const [dato, setData] = useState('');

        
        useEffect(()=>{
                getData();
        })
        

        const getData = ()=>{
                let url = `https://api.jikan.moe/v3/search/anime?q=${query}/limit?q=10`;
                axios.get(url).then(res => res.data).then((data)=>{
                        setData(data);
                }).catch((error) => {
                        //console.log(error);
                        });
        }

        const boton = ()=>{
                setQuery(value);
        }

        return(
                <div className='app'>                    
                        <h1>Buscador de anime</h1>
                        <TextField id="busqueda" value={value} onChange={(e)=>setValue(e.target.value)} label="Busqueda"/>
                        <Button variant="contained" color="secondary" onClick={boton}>
                                Buscar
                        </Button>
                        <div className= 'container'>
                                {/* dato.results ? dato.results.map((i,index)=>(
                                  <img key={index} src={i.image_url} alt={i.title} />
                                  )) : '' */}
                                {dato.results ? dato.results.map((i,index)=>(
                                <Card key={index} title={i.title} url={i.image_url} type={i.type} />
                                )) : ''}
                        </div>
                </div>
                );
}

export default App;
