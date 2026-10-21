import React, { useState } from 'react'
import {toast, ToastContainer} from "react-toastify"

import "../../../node_modules/react-toastify/dist/ReactToastify.css"
import "./cadastroUsuarios.css"

export default function index() {
  //estado para armazenar os dados do formulario

  const [formData, setFormData] = useState({
      nome: "",
      email: ""
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

    if(formData.nome === "" || formData.email === ""){
      toast.error("Preencha todos os campos")
      return false;
    }


    fetch("https://6ad2c7f166cd28aed82e40ec.mockapi.io/usuarios", {
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
            email: ""
        });
      });
  }


  return (
    <main className='container pagina-cadastro-usuarios'>
      <h1 className='titulo-cadastro'>Cadastro de Usuários</h1>
      <form className='formulario' onSubmit={handleSubmit}>

        <article className='form-control'>
          <label htmlFor="nome">Nome</label>
          <input type="text" name='nome' placeholder="Lucas Silva" value={formData.nome} onChange={handleChange}/>
        </article>

        <article className='form-control'>
          <label htmlFor="email">Email</label>
          <input type="email" name='email' placeholder="lucas@email.com" value={formData.email} onChange={handleChange}/>
        </article>

        <button className='botao-cadastrar' type='submit'>Cadastrar</button>

        <ToastContainer />
      </form>
    </main>
  );
}
