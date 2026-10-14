import React from 'react'
import { useEffect, useState } from 'react'
import { data } from 'react-router-dom'
import "./usuarios.css"




export default function index() {

      const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/")
        .then((response) => response.json())
            .then((data) => setUsuarios(data)).catch((error) => console.log(error))
    }, [])
    
     return (
        <section className='container usuarios'>
            <h2>Lista de users</h2>

            

            {usuarios.map((carro) => (
                <article className='content-usuarios' key={carro.id}>

                    <img src={carro.imagem}/>
                    <strong>
                        Nome: {carro.nome}
                    </strong>
                    <br />
                    <strong>
                        Marca: {carro.marca}
                    </strong>
                    <br />
                     <strong>
                        Modelo: {carro.modelo}
                    </strong>
                    <br />
                     <strong>
                        Ano: {carro.ano}
                    </strong>
                    <br />
                     <strong>
                        Quilometragem: {carro.quilometragem} KM
                    </strong>
                    <br />

                    <button className='delete'
                    onClick={()=> deleteUsuarios(carro.id)}
                    >Deletar</button>
                    <hr />
                </article>
            ))}


        </section>
    )
}
