'use strict'
const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const chatbot = new Telegram.Telegram('')
class EventsController extends TelegramBaseController {

  vagasUdiAction(scopeUdi) {
    let vagasudi = `Sankhya - Analista de Sistemas Jr. - Contato: contato@sankhya.com.br

Sankhya - Analista de Sistemas Jr. 
Contato: contato@sankhya.com.br

Cedro - Programador Sr. 
Contato: th@cedro.com.br

Cedro - Analista de Negócios Jr/Pl/Sr/Es.  
Contato: th@cedro.com.br

Everis - Programador Jr. 
Contato: gustavo.granato.silva@everis.com

Everis - Estagiário 
Contato: gustavo.granato.silva@everis.com

Everis - Gerente de Projetos 
Contato: gustavo.granato.silva@everis.com

Softbox - Desenvolvedor Front-end 
Contato: softbox@softbox.com.br

Neppo - Analista de Sistemas 
Contato: gupy.neppo.com.br`
    
        scopeUdi.sendMessage(vagasudi);
  }

  vagasUraAction(scopeUra) {
    let vagasura = `Nelltech - Analista de Sistemas Jr. - Contato: contato@nelltech.com.br

Grupo Selpe - Analista de Sistemas Jr. 
Contato: contato@selpe.com.br

Central IT - Programador Sr. 
Contato: th@centralit.com.br

Hospital Madrecor - Analista de Negócios Jr/Pl/Sr/Es.  
Contato: th@madrecor.com.br `

  scopeUra.sendMessage(vagasura);
  }

  eventosRegiaoAction(scopeEventos) {
    let eventosregiao = ` Torneio de programação - Inscrição: htz.me/inscr
Descrição: Encontro de programadores no salão 10 para 
desenvolver sistemas legado de forma que ajuda alguma empresa ou alguma 
entidade carente.

Hackaton - Inscrição: htz.me/hack
Descrição: Hackaton realizado na universidade tal com premiação 
no valor de R$ 3000,00.

Palestra - Inscrição: htz.me/palestra
Descrição: Palestra de muito conteúdo do Arquiteto de Sistemas da TQI
falando sobre coisas que o programador deve evitar de fazer.`

  scopeEventos.sendMessage(eventosregiao);
  }

get routes() {
    return {
      'vagasUdi': 'vagasUdiAction',
      'vagasUra': 'vagasUraAction',
      'eventosRegiao': 'eventosRegiaoAction'
      
    }
  }
}
chatbot.router
       .when(
         new TextCommand('/vagasudi', 'vagasUdi'), new EventsController()
       )
chatbot.router
      .when(
         new TextCommand('/vagasura', 'vagasUra'), new EventsController()
         )
chatbot.router
      .when(
         new TextCommand('/eventosregiao', 'eventosRegiao'), new EventsController()
         )