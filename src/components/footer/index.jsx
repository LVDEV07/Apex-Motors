import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"

export default function index() {
  return (

      <footer className=''>
        <Link to='/sobre'>Sobre nós</Link>
        <Link to='/contato'>Nos contate</Link>
        <Link to='/faq'>FAQs</Link>
    </footer>
   
  )
}
