/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import provasocial from './assets/provasocial.jpg'
import provaviva from './assets/provaviva.jpg'
import fotopagina from './assets/fotopagina.jpg'
import resultado from './assets/resultado.jpg'
import apresentação from './assets/apresentação.jpg'

import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  Star,
  ShieldCheck,
  HelpCircle,
  Play,
  ChevronDown,
  ChevronUp,
  Zap,
  TrendingUp,
  Target,
  Users,
  Gift,
  Clock
} from "lucide-react";

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-800 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-semibold text-lg hover:text-red-500 transition-colors"
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>

      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="mt-2 text-zinc-400 leading-relaxed"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4">

      {/* 1ª Dobra - Hero */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.08)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-widest mb-6 border border-red-500/20">
              Método Validado 2026
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold leading-[1.1] mb-6">
              PARE DE SER <span className="text-red-600">ESCRAVO</span> DO SEU CHEFE E CRIE SEU PRÓPRIO IMPÉRIO.
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Descubra como criar um infoproduto do absoluto zero e garantir pelo menos <span className="text-white font-bold">1 salário mínimo extra</span> todos os meses trabalhando apenas pelo celular.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#oferta" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2">
                Quero Garantir Minha Vaga <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <p className="mt-4 text-sm text-zinc-500 flex items-center justify-center lg:justify-start gap-2">
              <ShieldCheck className="w-4 h-4 text-green-500" /> Acesso imediato após o pagamento
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-video bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 flex items-center justify-center">
              {/* Placeholder for Video */}
              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform shadow-xl shadow-red-600/40">
                  <Play className="w-8 h-8 text-white fill-current ml-1" />
                </div>
                <p className="text-zinc-500 font-medium">Assista ao vídeo de apresentação</p>
              </div>
              <img 
                src="https://picsum.photos/seed/business/800/450" 
                alt="Thumbnail" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problema */}
      <section className="bg-zinc-900/50 border-y border-zinc-800">
        <div className="section-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              ATÉ QUANDO VOCÊ VAI ACEITAR ESSA <span className="text-red-600 underline decoration-red-600/30 underline-offset-8">VIDA MEDÍOCRE</span>?
            </h2>
            <p className="text-zinc-400 text-lg">
              Você acorda cedo, pega ônibus lotado, aguenta desaforo de chefe e no final do mês mal sobra dinheiro para pagar os boletos. Isso não é viver, é sobreviver.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <XCircle className="w-10 h-10 text-red-500" />,
                title: "Salário que não dura",
                desc: "O mês termina e o seu dinheiro já acabou na primeira semana. Você vive no limite."
              },
              {
                icon: <XCircle className="w-10 h-10 text-red-500" />,
                title: "Falta de Liberdade/tempo",
                desc: "Você não tem tempo para sua família, para seus estudos, para seus hobbies ou para simplesmente descansar."
              },
              {
                icon: <XCircle className="w-10 h-10 text-red-500" />,
                title: "Medo do Desemprego",
                desc: "Você sabe que é apenas um número na empresa e pode ser trocado a qualquer momento."
              }
            ].map((item, i) => (
              <div key={i} className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 hover:border-red-500/50 transition-colors">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solução */}
      <section className="section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              A CHAVE PARA A SUA <span className="text-green-500">LIBERDADE</span> ESTÁ NA CRIAÇÃO DE INFOPRODUTOS.
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              Eu não estou falando de sorte. Estou falando de um <span className="text-white font-bold">MÉTODO PASSO A PASSO</span> que qualquer pessoa comum pode aplicar para transformar conhecimento em dinheiro vivo.
            </p>
            <ul className="space-y-4">
              {[
                "Como encontrar um nicho lucrativo em 24 horas",
                "A estrutura secreta de um e-book que vende sozinho",
                "Estratégias de tráfego orgânico (sem gastar 1 real em anúncios)",
                "Como escalar para 1 salário mínimo e além"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  <span className="text-zinc-200 font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img 
              src={provasocial}
              alt="Prova Social" 
              className="w-64 mx-auto rounded-2xl shadow-2xl"
              />
            <div className="absolute -bottom-6 -left-6 bg-zinc-900 p-6 rounded-2xl border border-zinc-800 shadow-2xl max-w-[240px]">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <span className="font-bold text-green-500">+R$ 6.000,00</span>
              </div>
              <p className="text-xs text-zinc-500">Faturamento gerado em 30 dias!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social */}
 <section className="section-padding text-center">

<h2 className="text-3xl md:text-4xl font-bold text-center">
  EU SOU A <span className="text-red-500">PROVA VIVA</span>
</h2>

<p className="text-zinc-400 text-center max-w-2xl mx-auto">
  Eu sou a prova viva de como é possível criar uma renda no digital 
  mesmo começando com pouco.
</p>

<div className="flex gap-6 justify-start md:justify-center mt-10 overflow-x-auto px-4">

  <img
    src={provaviva}
    alt="Prova Viva"
    className="w-60 h-72 md:w-72 md:h-72 object-cover rounded-xl shadow-xl"
  />

  <img
    src={fotopagina}
    alt="Resultado"
    className="w-60 h-72 md:w-72 md:h-72 object-cover rounded-xl shadow-xl"
  />

  <img
    src={resultado}
    alt="Resultado"
    className="w-60 h-72 md:w-72 md:h-72 object-cover rounded-xl shadow-xl"
  />

</div>

</section>

      {/* Bônus */}
      <section className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">BÔNUS <span className="text-red-600">EXCLUSIVOS</span></h2>
          <p className="text-zinc-400">Se você agir agora, levará esses presentes totalmente grátis.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Templates de Copy",
              desc: "Modelos prontos para você apenas copiar e colar nos seus anúncios.",
              value: "R$ 37,90",
              icon: <Target className="w-8 h-8 text-red-500" />
            },
            {
              title: "Suporte Personalizado",
              desc: "Acesso ao meu suporte exclusivo para networking e dúvidas.",
              value: "R$ 150,00",
              icon: <Users className="w-8 h-8 text-red-500" />
            },
            {
              title: "Checklist da Oferta",
              desc: "O passo a passo exato para não esquecer nada para a criação da sua oferta.",
              value: "R$ 57,90",
              icon: <CheckCircle2 className="w-8 h-8 text-red-500" />
            },
            {
              title: "Mentoria com Desconto",
              desc: "Agindo agora, além de aproveitar os bônus você pode solicitar uma mentoria com 50% off com 2 especialistas no assunto.",
              value: "R$ 4.000,00",
              icon: <Play className="w-8 h-8 text-red-500" />
            }
          ].map((bonus, i) => (
            <div key={i} className="bg-zinc-900/50 p-6 rounded-2xl border border-dashed border-zinc-700 hover:border-red-500/50 transition-colors text-center">
              <div className="bg-zinc-950 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-zinc-800">
                {bonus.icon}
              </div>
              <h3 className="font-bold mb-2">{bonus.title}</h3>
              <p className="text-sm text-zinc-500 mb-4">{bonus.desc}</p>
              <p className="text-xs font-bold text-zinc-400 line-through">Valor: {bonus.value}</p>
              <p className="text-xs font-bold text-green-500 uppercase mt-1">Grátis hoje</p>
            </div>
          ))}
        </div>
      </section>

      {/* Oferta */}
      <section id="oferta" className="section-padding">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-[2.5rem] border border-red-600/30 overflow-hidden shadow-2xl shadow-red-600/10">
          <div className="bg-red-600 py-4 text-center">
            <p className="text-white font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2">
              <Zap className="w-4 h-4 fill-current" /> Oferta por Tempo Limitado <Zap className="w-4 h-4 fill-current" />
            </p>
          </div>
          <div className="p-6 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-black mb-6">MÉTODO SALÁRIO DIGITAL</h2>
            <p className="text-zinc-400 mb-8 text-base sm:text-lg">Tudo o que você precisa para criar seu infoproduto e faturar seu primeiro salário mínimo online.</p>
            
            <div className="mb-10">
              <p className="text-zinc-500 line-through text-lg sm:text-xl">De R$ 497,00</p>
              <div className="flex items-center justify-center gap-1 sm:gap-2">
                <span className="text-xl sm:text-2xl font-bold text-zinc-400">Por apenas</span>
                <span className="text-5xl sm:text-6xl md:text-8xl font-black text-white">R$ 97</span>
                <span className="text-xl sm:text-2xl font-bold text-zinc-400">,00</span>
              </div>
              <p className="text-zinc-500 mt-2 text-sm sm:text-base">ou 12x de R$ 9,74 no cartão</p>
            </div>

            <a href="https://pay.kiwify.com.br/V2KfLy0" className="btn-primary w-full max-w-md block mx-auto text-lg sm:text-xl py-5 sm:py-6 mb-6">
              QUERO MINHA LIBERDADE AGORA
            </a>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-green-500" /> Compra 100% Segura</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Acesso Vitalício</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-green-500" /> Oferta Expira em breve</span>
            </div>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="section-padding text-center">
        <div className="max-w-3xl mx-auto bg-zinc-900/50 p-10 rounded-3xl border border-zinc-800">
          <ShieldCheck className="w-20 h-20 text-red-600 mx-auto mb-6" />
          <h2 className="text-3xl font-display font-bold mb-4">RISCO ZERO: 7 DIAS DE GARANTIA</h2>
          <p className="text-zinc-400 leading-relaxed">
            Eu confio tanto no meu método que te dou uma garantia incondicional. Se em até 7 dias você achar que o conteúdo não é para você, eu devolvo 100% do seu dinheiro. Sem perguntas, sem burocracia. O risco é todo meu.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">PERGUNTAS FREQUENTES</h2>
            <p className="text-zinc-400">Tire suas últimas dúvidas antes de começar.</p>
          </div>
          <div className="space-y-2">
            <FAQItem 
              question="Preciso ter um computador?" 
              answer="Não! O método foi desenvolvido para que você consiga fazer tudo apenas pelo seu celular, desde a criação até as vendas, mas ter um computador vai facilitar na hora de criar as ofertas." 
            />
            <FAQItem 
              question="Quanto tempo demora para ter resultados?" 
              answer="Isso depende da sua dedicação. Eu já fiz venda em menos de 48 horas, mas também levei 30 dias para estruturar a primeira oferta. O importante é aplicar o método." 
            />
            <FAQItem 
              question="Eu não tenho nenhum conhecimento, serve para mim?" 
              answer="Com certeza. O curso vai do absoluto zero, pegando na sua mão e ensinando cada detalhe técnico e estratégico." 
            />
            <FAQItem 
              question="Como recebo o acesso?" 
              answer="Imediatamente após a confirmação do pagamento, você receberá um e-mail com todos os dados de acesso à nossa plataforma exclusiva." 
            />
          </div>
        </div>
      </section>

      {/* Biografia */}
      <section className="section-padding border-t border-zinc-800">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <span className="text-red-500 font-bold uppercase tracking-widest text-sm mb-4 block">Quem sou eu</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">PRAZER, SOU O SEU MENTOR.</h2>
            <p className="text-zinc-400 mb-6 leading-relaxed text-sm sm:text-base">
              Depois de anos quebrando a cabeça no mercado digital e falhando miseravelmente, eu finalmente descobri o código para criar produtos que vendem todos os dias.
            </p>
            <p className="text-zinc-400 mb-8 leading-relaxed text-sm sm:text-base">
              Hoje, minha missão é ajudar pessoas comuns, principalmente estudantes que precisam de tempo para estudar a saírem da corrida dos ratos e conquistarem a liberdade financeira que o digital proporciona. Já fiz +100 alunos com a venda de material para estudante.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-6">
              <div>
                <p className="text-3xl font-black text-white">100+</p>
                <p className="text-xs text-zinc-500 uppercase">Alunos</p>
              </div>
              <div className="w-px h-10 bg-zinc-800" />
              <div>
                <p className="text-3xl font-black text-white">R$ 10K+</p>
                <p className="text-xs text-zinc-500 uppercase">Faturados</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src={apresentação}
              alt="Mentor" 
              className="rounded-3xl border border-zinc-800 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-12 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-display font-bold mb-8">MÉTODO SALÁRIO DIGITAL</h3>
          <div className="flex justify-center gap-8 mb-8 text-zinc-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Suporte</a>
          </div>
          <p className="text-zinc-600 text-xs max-w-2xl mx-auto leading-relaxed">
            Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da FACEBOOK, Inc. Os resultados podem variar de pessoa para pessoa.
          </p>
          <p className="text-zinc-700 text-[10px] mt-8">
            © 2024 Método Salário Digital. Todos os direitos reservados.
          </p>
        </div>
      </footer>
       </div>
    </div>
  );
}
