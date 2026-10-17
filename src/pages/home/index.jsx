import React from 'react'
import { useEffect, useState } from 'react'
import { data } from 'react-router-dom'
import "./home.css"




export default function index() {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://6ad2c7f166cd28aed82e40ec.mockapi.io/carros")
      .then((response) => response.json())
      .then((data) => setUsuarios(data)).catch((error) => console.log(error))
  }, [])

  return (
    <>
      
      <section className='container usuarios'>


        {usuarios.map((carro) => (
          <article className='content-usuarios' key={carro.id}>

            <img src={carro.imagem} className='imagemCarro' />


            <div className='conteudo-anuncio'>


             <div className='titulo'> {carro.marca} {carro.nome}</div>


              <div className='sub-infos'>
              {carro.modelo}

              <br />

              

              <a href="https://www.flaticon.com/br/icones-gratis/calendario-mensal" title="calendário mensal ícones"><img src="src\assets\images\ring-calendar.png" alt="" className='icon-calendario' /></a> {carro.ano} <img src="src\assets\images\velocimetro.png" alt="" className='icon-velocimetro' />  {carro.quilometragem} KM
              </div>

              <div className='valor'>
                 R$ {carro.Valor}
                </div>

              

       

              <button className='delete'
                onClick={() => deleteUsuarios(carro.id)}
                >Deletar</button>

              <hr />
            </div>
          </article>
        ))}


      </section>
    </>
  )
}
