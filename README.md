# fluke
Exercícios PS Fluke 

# Exercício 1:

## Passo a passo:
A ideia é organizar o vetor de modo que o elemento único [i] sempre será diferente do elemento [i+1] e [i-1].

## Instruções:
Feito em javascript para rodar com Node.js.


# Exercício 2 (Cripke):

## Passo a passo:
Foi feito usando os seguintes tutoriais como orientação:
  - https://www.youtube.com/watch?v=unr4s3jd9qA (Para autenticação com Firebase e Hooks)
  - https://www.youtube.com/watch?v=18DkUJ669kc&t=670s (Para comunicação com a API do Cryptocompare)

## Instruções:
Dentro da pasta cripke:
```
npm install 
```
Serão instalados os node_modules e também as dependencias usadas (axios, firebase, react-router-dom, react-router).

### Página principal:
(Se não estiver logado é redirecionado para a página login)
```
http://localhost:3000/ 
```
Contém toplist com 10 criptomoedas.
E barra de procura para ter informações sobre outras criptomoedas que não estejam no toplist.
As informações mostradas foram:
  - Name (Ex: BTC; ETH...)
  - FullName (EX: Bitcoin; Ethereum)
  - PRICE (BRL)
  - CHANGE24HOUR (Variação no preço nas últimas 24hrs)
  - CHANGEDAY (Vriação no preço no último dia)
  - CHANGEHOUR (Variação no preço na última hora)
### Página Login:
```
http://localhost:3000/login 
```
Entra com e-mail e senha.
### Página de registro de novo usuário:
```
http://localhost:3000/signup
```
Registra novo usuário com e-mail e senha.

