import React from 'react'
import { useEffect, useState } from 'react'
import { data } from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify"
import "../../../node_modules/react-toastify/dist/ReactToastify.css"
import "./home.css"




export default function index() {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://6ad2c7f166cd28aed82e40ec.mockapi.io/carros")
      .then((response) => response.json())
      .then((data) => setUsuarios(data)).catch((error) => console.log(error))
  }, [])

      const deleteCarros = (id) => {
        fetch(`https://6ad2c7f166cd28aed82e40ec.mockapi.io/carros/${id}`, {method: "DELETE"})
        .then(() =>{
            setUsuarios(usuarios.filter((usuario) => usuario.id !== id)  )
        })
        .catch((error) => console.error(error))
    }


  return (
    <main className='pagina-home'>
      <h1 className='titulo-pagina'>Veículos Disponíveis</h1>

      <section className='container usuarios'>


        {usuarios.map((carro) => (
          <article className='content-usuarios' key={carro.id}>

            <div className='imagem'>
              <span className='marca'>{carro.marca}</span>
              <img src={carro.imagem} alt={`${carro.marca} ${carro.nome}`} className='imagemCarro' />
              <span className='ano'>{carro.ano}</span>
            </div>


            <div className='conteudo-anuncio'>


              <div className='titulo'>{carro.nome}</div>
              <div className='modelo'>{carro.modelo}</div>


              <div className='sub-infos'>
                <div className='info'>
                  <a href="https://www.flaticon.com/br/icones-gratis/calendario-mensal" title="calendário mensal ícones">
                    <img src="/ring-calendar.png" alt="Calendário" className='icon-calendario' />
                  </a>
                  <span>Ano {carro.ano}</span>
                </div>
                <div className='info'>
                  <img src="/velocimetro.png" alt="Velocímetro" className='icon-velocimetro' />
                  <span>{carro.quilometragem} KM</span>
                </div>
              </div>

              <div className='bloco-valor'>
                <span className='texto-valor'>PREÇO À VISTA</span>
                <div className='valor'>
                  R$ {carro.Valor}
                </div>
              </div>

              <div className='botoes'>
                <button className='alugar'
                  onClick={() => {
                    deleteCarros(carro.id)
                    toast.success("Carro alugado com sucesso")
                  }}
                >Alugar</button>

                <button className='delete'
                  onClick={() => deleteCarros(carro.id)}
                >Deletar</button>
              </div>
            </div>
          </article>
        ))}

        <ToastContainer />
      </section>
    </main>
  )
}
