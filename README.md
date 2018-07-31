# Vagas TI-MG

Chatbot criado com a intensão de ajudar quem está procurando por vagas na área de TI e também quem busca por novos profissionais. 

## Getting Started

Abaixo estão as instruções para copiar o repositório e rodar ele em máquina local.

### Prerequisites 

Utilizaremos algumas ferramentas como: 

* Node;
* NPM; 
* Git. 

Para começar, iremos instalar o Node, que já vem com o NPM instalado. 

Vá em https://nodejs.org/en/ e clique em download da versão LTS.

Após instalado, abra o *node.js command prompt*, instale o GIT seguindo estes [passos](https://git-scm.com/book/pt-br/v1/Primeiros-passos-Instalando-Git).

Após o Git instalado e configurado, vamos ao que interessa. 


* Clone o projeto 

```
git clone https://github.com/gugagranato/vagas-ti.git
```

* Dentro da pasta vagas-ti instale os pacotes

```
npm install
```

Após os pacotes instalados, entre na pasta *vagas-ti/src* e rode o seguinte comando

```
node app.js
```

### Observações 

Para funcionar o Chatbot no seu Telegram, você deve [criar um BOT](https://blog.rodrigolira.net/2015/07/07/criando-um-bot-do-telegram-1/) e pegar o seu id, colocando dentro do arquivo *app.js*

```

const chatbot = new Telegram.Telegram('SEU ID AQUI')

```


### Authors

* [**Gustavo Granato Silva**](github.com/gugagranato)

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details




