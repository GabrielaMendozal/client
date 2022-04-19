import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AutorForm from '../componentes/Formulario/AutorForm';
import AutoresLista from '../componentes/Lista/AutoresLista';


function Main(){

    const[autores, setAutores] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect( () => {
        axios.get('http://localhost:8080/api/autor/getAll')
            .then( res =>{
                setAutores(res.data);
                setLoaded(true);
            });
    }, []);

    const removeFromDom = autorId => {
        setAutores(autores.filter(autor => autor._id !== autorId)); //aqui autor -> autores
    }

    return (
        <div>
           <AutorForm />
           {loaded && <AutoresLista autores={autores} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main;