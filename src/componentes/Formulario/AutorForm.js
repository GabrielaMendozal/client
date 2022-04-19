import React, { useState } from 'react'
import axios from 'axios';
const AutorForm = () => {
    // mantener el control de lo que se escribe a través del gancho useState
    const [name, setName] = useState(""); 
    //gestor cuando se envía el formulario
    const onSubmitHandler = e => {
        //evitar el comportamiento por defecto de submit
        e.preventDefault();
        //hacer una petición POST para crear una nueva persona
        axios.post('http://localhost:8080/api/autor/nuevo', {
            name
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    //const cancelCallback = () => props.history.push('/')

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>First Name</label><br/>
                    <input type="text" onChange = {(e)=>setName(e.target.value)} value={name}/>
                </p>
                <button type='submit'>
                    Submit
                </button>
            </form>
            <button type='submit' >
                Cancel
            </button>
        </div>
    )
}

export default AutorForm;