import React from 'react'
import { Link } from 'react-router-dom'
import "./nav.css"

export default function index() {
  return (
   <nav>
            <ul  className='menu'>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>

                <li>

                    <Link to="/cadastro">
                        Cadastrar Carro
                    </Link>
                </li>

                <li>
                    <Link to="/cadastroUsuarios">
                        Cadastrar Usuário
                    </Link>
                </li>

                <li>
                    <Link to="/usuarios">
                        Usuários
                    </Link>
                </li>

            </ul>
        </nav>
  )
}
