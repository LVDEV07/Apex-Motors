import React, { useState } from 'react'
import {toast, ToastContainer} from "react-toastify"

import "../../../node_modules/react-toastify/dist/ReactToastify.css"
import "./cadastro.css"

export default function index() {
  //estado para armazenar os dados do formulario

  const [formData, setFormData] = useState({
      imagem:"",
      nome: "",
      marca: "",
      modelo: "",
      ano: "",
      quilometragem: "",
      Valor: ""
  });

  // função para atualizar o estado ao digitar no formulario

  const handleChange = (e) => {
    const { name, value } = e.target; // alvo

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  // função para enviar formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if(formData.imagem === "" || formData.nome === "" || formData.marca === "" || formData.modelo === "" || formData.ano === "" || formData.quilometragem === "" || formData.Valor === ""){
      toast.error("Preencha todos os campos")
      return false;
    }


    fetch("https://6ad2c7f166cd28aed82e40ec.mockapi.io/carros", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }).then((response) => response.json())
      .then((data) => {
        console.log("Carro cadastrado com sucesso:", data);

        toast.success("Carro cadastrado com sucesso")
        setFormData({
            imagem:"",
            nome: "",
            marca: "",
            modelo: "",
            ano: "",
            quilometragem: "",
            Valor: ""
        });
      });
  }


  return (
    <main className='container pagina-cadastro'>
      <h1 className='titulo-cadastro'>Cadastro de Carros</h1>
      <form className='formulario' onSubmit={handleSubmit}>

        <article className='form-control'>
          <label htmlFor="imagem">Imagem</label>
          <input type="text" name='imagem' placeholder="URL da foto do veículo" value={formData.imagem} onChange={handleChange}/>
        </article>

        <article className='form-control'>
          <label htmlFor="nome">Nome</label>
          <input type="text" name='nome' placeholder="Civic" value={formData.nome} onChange={handleChange}/>
        </article>

        <article className='form-control'>
          <label htmlFor="marca">Marca</label>
          <input type="text" name='marca' placeholder="Honda" value={formData.marca} onChange={handleChange}/>
        </article>

        <article className='form-control'>
          <label htmlFor="modelo">Modelo e Versão</label>
          <input type="text" name='modelo' placeholder="Touring 1.5 Turbo" value={formData.modelo} onChange={handleChange}/>
        </article>

        <div className='linha-campos'>
          <article className='form-control'>
            <label htmlFor="ano">Ano</label>
            <input type="number" name='ano' placeholder="2023" value={formData.ano} onChange={handleChange}/>
          </article>
          <article className='form-control'>
            <label htmlFor="quilometragem">Quilometragem</label>
            <input type="number" name='quilometragem' placeholder="15.000" value={formData.quilometragem} onChange={handleChange}/>
          </article>
        </div>

        <article className='form-control'>
          <label htmlFor="Valor">Valor (R$)</label>
          <input type="number" name='Valor' placeholder="145.000" value={formData.Valor} onChange={handleChange}/>
        </article>

        <button className='botao-cadastrar' type='submit'>Cadastrar</button>

        <ToastContainer />
      </form>
    </main>
  );
}

