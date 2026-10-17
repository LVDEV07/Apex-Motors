import React from 'react'
import "./contato.css"

export default function index() {
    return (
        <section className='container contato'>
            <article className='content-contato'>
                <div className='titulo'>Fale Conosco</div>
                <div className='descricao'>Entre em contato com a equipe da Apex Motors para tirar dúvidas, agendar visitas ou negociar seu próximo veículo.</div>
            </article>

            <article className='content-contato'>
                <div className='titulo'>Telefone e WhatsApp</div>
                <div className='descricao'>(11) 4002-8922 | (11) 99999-8888</div>
            </article>

            <article className='content-contato'>
                <div className='titulo'>E-mail</div>
                <div className='descricao'>contato@apexmotors.com.br</div>
            </article>

            <article className='content-contato'>
                <div className='titulo'>Endereço e Horário de Atendimento</div>
                <div className='descricao'>Av. dos Motores, 1000 - São Paulo, SP | Segunda a Sábado, das 8h às 18h</div>
            </article>
        </section>
    )
}
