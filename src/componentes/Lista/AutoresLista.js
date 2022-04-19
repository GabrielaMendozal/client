import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function AutoresLista(props){
    const { removeFromDom } = props;
    const deleteAutor = (autorId) => {
        axios.delete('http://localhost:8080/api/autor/eliminar/' + autorId) //${autorId}
            .then(res => {
                removeFromDom(autorId)
            })
    }
    return (
        <div>
            <h1>Todos los Autores:</h1>
            {props.autores.map((autor, idx)=>{
                return (
                    <p key={'autor_' + idx}>
                    <Link to={`/autor/${autor._id}`}> 
                        {autor.name}
                    </Link>
                    <button onClick={(e) => {deleteAutor(autor._id)}}>   
                        Delete
                    </button>
                    </p>
                );
            })
            }
        </div>
    )
}


export default AutoresLista;