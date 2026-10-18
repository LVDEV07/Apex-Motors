import React from 'react'
import "./sobre.css"

export default function index() {
    return (
        <section className='container sobre'>
            <article className='content-sobre'>
                <div className='titulo'>Quem Somos</div>
                <div className='descricao'>A Apex Motors nasceu da paixão pelo universo automotivo e do compromisso em oferecer veículos de alta qualidade, procedência garantida e uma experiência de compra transparente e inovadora.</div>
            </article>

            <article className='content-sobre'>
                <div className='titulo'>Nossa Missão</div>
                <div className='descricao'>Entregar soluções automotivas completas com transparência, segurança e excelência, superando as expectativas dos nossos clientes em cada negociação.</div>
            </article>

            <article className='content-sobre'>
                <div className='titulo'>Nossa Visão</div>
                <div className='descricao'>Ser referência no mercado automotivo em inovação, atendimento e confiabilidade, destacando-se pela tecnologia e excelência no relacionamento.</div>
            </article>
        </section>
    )
}

