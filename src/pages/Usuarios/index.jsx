import React, { useEffect, useState } from 'react'
import "./usuarios.css"

export default function index() {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://6ad2c7f166cd28aed82e40ec.mockapi.io/usuarios")
      .then((response) => response.json())
      .then((data) => setUsuarios(data)).catch((error) => console.log(error))
  }, [])

  const deleteUsuarios = (id) => {
    fetch(`https://6ad2c7f166cd28aed82e40ec.mockapi.io/usuarios/${id}`, { method: "DELETE" })
      .then(() => {
        setUsuarios(usuarios.filter((usuario) => usuario.id !== id))
      })
      .catch((error) => console.error(error))
  }

  return (
    <>
      <section className='container usuarios usuarios-lista'>

        {usuarios.map((usuario) => (
          <article className='content-usuarios' key={usuario.id}>

            <div className='conteudo-anuncio'>

              <div className='titulo'>{usuario.nome}</div>

              <div className='sub-infos'>
                {usuario.email}
              </div>

              <button className='delete'
                onClick={() => deleteUsuarios(usuario.id)}
              >Deletar</button>

              <hr />
            </div>
          </article>
        ))}

      </section>
    </>
  )
}
