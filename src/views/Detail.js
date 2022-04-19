import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';


const Detail = (props) => {
    const id =props.match.params.id;
    const [autor, setAutor] = useState({})
    useEffect(() => {
        axios.get('http://localhost:8080/api/autor/getById/' + id ) //${props.match.params.id}
            .then(res => setAutor({
                ...res.data
            }))
    }, []);
    return (
        <div>
            <p>Name: {autor.name}</p>
            <Link to={`/autor/edit/${autor._id}`}>  
                Edit
            </Link>
            {"|"}
            <Link to={'/'}> Home </Link>
        </div>
    )
}

export default Detail;