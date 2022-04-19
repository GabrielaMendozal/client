import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


function Update( props){
    const id =props.match.params.id;
    const [name, setName] = useState("");
    
    useEffect(() => {
        axios.get('http://localhost:8080/api/autor/getById/' + id) //${props.match.params.id}
            .then(res => {
                setName(res.data.name);
            })
    }, [])
    const updateAutor = e => {
        e.preventDefault();
        axios.put('http://localhost:8080/api/autor/actualizar/' + id, { //${props.match.params.id}
            name
        })
            .then(res => console.log(res));
    }

    //const cancelCallback = () => props.history.push('/')

    return (
        <div>
            <h1>Update a Autor</h1>
            <form onSubmit={updateAutor}>
                <p>
                    <label>Name:</label><br />
                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                </p>
                <button type='submit' >
                    Actualizar
                </button>
            </form>
            <Link to={'/'}> Home </Link>
        </div>
    )
}

export default Update;