# Car Dealer App

![Image 1](./public/1.png)
![Image 2](./public/2.png)
![Image 3](./public/3.png)
![Image 4](./public/4.png)
![Image 5](./public/5.png)
![Image 6](./public/6.png)

<p align="center">
  <img src="./public/mobile2.png" alt="Image 7" width="200" style="padding-right: 200px;" />
  <img src="./public/mobile1.png" alt="Image 8" width="200" />
</p>

## Visão Geral

O **Car Dealer App** é uma aplicação desenvolvida em Next.js que permite aos usuários filtrar veículos por marca e ano de fabricação. A aplicação utiliza a API do National Highway Traffic Safety Administration (NHTSA) para buscar informações sobre marcas e modelos de veículos.

## Funcionalidades

- Exibição de uma lista de marcas de veículos.
- Filtragem de veículos por marca e ano.
- Carregamento dinâmico de dados utilizando a API.
- Design responsivo e moderno utilizando Tailwind CSS.

## Arquitetura

A aplicação é estruturada da seguinte forma:

- **Páginas**: Utiliza a estrutura de páginas do Next.js, com rotas dinâmicas para exibir os resultados da pesquisa.
- **Componentes**: Componentes reutilizáveis para exibição de listas de veículos e formulários.
- **Estilização**: Utiliza Tailwind CSS para um design clean e responsivo.
- **Dados**: A aplicação se conecta a uma API externa para buscar dados sobre marcas e modelos de veículos.

## Maiores Desafios e Soluções

Durante o desenvolvimento do **Car Dealer App**, enfrentei alguns desafios, incluindo:

### Integração com a API

**Desafio:** A conexão e o manuseio de dados da API da NHTSA apresentaram algumas dificuldades, especialmente em relação ao tratamento de erros e à formatação dos dados recebidos.  
**Solução:** Utilize `try/catch` para capturar erros durante a chamada à API e implementei um estado de carregamento para melhorar a experiência do usuário. Também formatei os dados assim que os recebi, garantindo que o aplicativo fosse robusto.

### Implementação do Tailwind CSS

**Desafio:** Aprender a usar o Tailwind CSS para estilizar a aplicação de forma eficiente e responsiva foi um desafio, já que nunca tinha tido contato com essa ferramenta. O estilo não ficou tão bom quanto eu esperava, mas gostei de aprender algo novo e prometo que, com mais tempo, ficarei mais proficiente nessa ferramenta.  
**Solução:** Estudei a documentação oficial do Tailwind CSS e utilizei componentes pré-estilizados como referência, além de experimentar diferentes utilitários para compreender melhor como funcionam.

### Configuração do Ambiente de Desenvolvimento

**Desafio:** A configuração das variáveis de ambiente no Vercel e a transição do `.env.local` para variáveis de ambiente compartilhadas.  
**Solução:** Criei variáveis de ambiente diretamente no painel do Vercel, garantindo que fossem utilizadas durante a construção e a execução da aplicação.

### Desafios de Hidratação do React

**Desafio:** Tive problemas com erros de hidratação do React, o que exigiu uma investigação cuidadosa.  
**Solução:** Verifiquei a consistência entre a renderização do lado do servidor e do lado do cliente, evitando o uso de variáveis dinâmicas que poderiam causar discrepâncias.

### Estilização de Componentes

**Desafio:** Manter uma consistência visual e uma boa experiência do usuário em diferentes tamanhos de tela.  
**Solução:** Utilizei classes responsivas do Tailwind CSS e testei a aplicação em diferentes dispositivos e tamanhos de tela, ajustando os estilos conforme necessário para garantir uma experiência de usuário fluida.


## Instruções para Executar o Aplicativo

1. **Clone o Repositório:**

   ```bash
   git clone https://github.com/seuusuario/car-dealer-app.git
   cd car-dealer-app

2. **Vercel:**

   ```bash
   https://car-dealer-c1h2phegn-wryans-projects.vercel.app/
