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
    <main className='pagina-usuarios'>
      <h1 className='titulo-usuarios'>Usuários Cadastrados</h1>
      <section className='container usuarios-lista'>

        {usuarios.map((usuario) => (
          <article className='content-usuarios' key={usuario.id}>

            <div className='conteudo-anuncio'>
              <span className='id-usuario'>MEMBRO #{usuario.id}</span>

              <div className='titulo'>{usuario.nome}</div>

              <div className='infos'>
                <span className='texto-email'>EMAIL</span>
                <span className='sub-infos'>{usuario.email}</span>
              </div>

              <button className='delete'
                onClick={() => deleteUsuarios(usuario.id)}
              >Deletar</button>
            </div>
          </article>
        ))}

      </section>
    </main>
  )
}
