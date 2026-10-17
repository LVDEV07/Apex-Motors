import React from 'react'
import { useEffect, useState } from 'react'
import { data } from 'react-router-dom'
import "./sobre.css"

export default function index() {
    const [sobre, setSobre] = useState([]);

    useEffect(() => {
        fetch("https://6ad2c7f166cd28aed82e40ec.mockapi.io/sobre")
            .then((response) => response.json())
            .then((data) => setSobre(data)).catch((error) => console.log(error))
    }, [])

    return (
        <section className='container sobre'>
            {sobre.map((sobre) => (
                <article className='content-sobre' key={sobre.id}>
                    <div className='titulo'>{sobre.titulo}</div>
                    <div className='descricao'>{sobre.descricao}</div>
                </article>
            ))}
        </section>
    )
}

