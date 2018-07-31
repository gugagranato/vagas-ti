'use strict'
const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const chatbot = new Telegram.Telegram('Seu Token')
class EventsController extends TelegramBaseController {
  vagasUdiAction(scope) {
    let msg = `Sankhya - Analista de Sistemas Jr. - Contato: contato@sankhya.com.br

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
    
        scope.sendMessage(msg);
  }

get routes() {
    return {
      'vagasUdi': 'vagasUdiAction'
      
    }
  }
}
chatbot.router
       .when(
         new TextCommand('/vagasudi', 'vagasUdi'), new EventsController()
       )
