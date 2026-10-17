import React from 'react'
import "./faq.css"

export default function index() {
    return (
        <section className='container faq'>
            <article className='content-faq'>
                <div className='titulo'>Como funciona o financiamento de veículos?</div>
                <div className='descricao'>Trabalhamos com os principais bancos parceiros para oferecer taxas competitivas e parcelamento em até 60 vezes, sujeito à análise de crédito.</div>
            </article>

            <article className='content-faq'>
                <div className='titulo'>Vocês aceitam meu carro usado na troca?</div>
                <div className='descricao'>Sim! Fazemos uma avaliação justa e transparente do seu veículo usado para utilizá-lo como parte do pagamento na compra de outro carro.</div>
            </article>

            <article className='content-faq'>
                <div className='titulo'>Todos os veículos possuem garantia?</div>
                <div className='descricao'>Sim, todos os veículos do nosso estoque passam por vistoria cautelar completa e contam com garantia de motor e câmbio.</div>
            </article>

            <article className='content-faq'>
                <div className='titulo'>Posso agendar um test drive?</div>
                <div className='descricao'>Com certeza! Basta entrar em contato pelo nosso WhatsApp ou telefone para agendar o melhor dia e horário para conhecer o veículo pessoalmente.</div>
            </article>
        </section>
    )
}
