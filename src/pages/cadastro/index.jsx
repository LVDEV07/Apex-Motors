import React, { useState } from 'react'
import {toast, ToastContainer} from "react-toastify"

import "../../../node_modules/react-toastify/dist/ReactToastify.css"
import "./cadastro.css"

export default function index() {
  //estado para armazenar os dados do formulario

  const [formData, setFormData] = useState({
      nome: "",
      marca: "",
      modelo: "",
      ano: "",
      quilometragem: ""
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

    if(formData.nome === "" || formData.telefone === "" || formData.email === ""){
      toast.error("Preencha todos os campos")
      return false;
    }


    fetch("http://localhost:3000/carros", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }).then((response) => response.json())
      .then((data) => {
        console.log("Usuário cadastrado com sucesso:", data);

        toast.success("Usuário cadastrado com sucesso")
        setFormData({
            nome: "",
            marca: "",
            modelo: "",
            ano: "",
            quilometragem: ""
        });
      });
  }


  return (
    <main className='container'>
      <h1>Cadastro de usuários</h1>
      <form onSubmit={handleSubmit}>

        <article className='form-control'>
          <label htmlFor="imagem">Imagem</label>
          <input type="text" name='imagem' value={formData.imagem} onChange={handleChange} required/>
        </article>

        <article className='form-control'>
          <label htmlFor="nome">Nome</label>
          <input type="text" name='nome' value={formData.nome} onChange={handleChange} required/>
        </article>

        <article className='form-control'>
          <label htmlFor="marca">Marca</label>
          <input type="text" name='marca' value={formData.marca} onChange={handleChange} required/>
        </article>

        <article className='form-control'>
          <label htmlFor="modelo">Modelo</label>
          <input type="text" name='modelo' value={formData.modelo} onChange={handleChange} required/>
        </article>

        <article className='form-control'>
          <label htmlFor="ano">Ano</label>
          <input type="number" name='ano' value={formData.ano} onChange={handleChange} required/>
        </article>
        <article className='form-control'>
          <label htmlFor="quilometragem">quilometragem</label>
          <input type="number" name='quilometragem' value={formData.quilometragem} onChange={handleChange} required/>
        </article>

        <button type='submit'>Cadastrar</button>

        <ToastContainer />
      </form>
    </main>
  );
}

