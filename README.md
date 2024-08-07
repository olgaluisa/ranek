# Projeto Ranek

## 📄 Visão Geral do Projeto

Este projeto é uma aplicação web que exibe produtos e informações de contato, utilizando React e React Router.

## 🔨 Funcionalidades

- **Header:** Componente de navegação com links para a página de produtos e a página de contato.
- **Produtos:** Página que exibe uma lista de produtos obtidos de uma API.
- **Produto Específico:** Página que exibe os detalhes de um produto específico selecionado.
- **Contato:** Página que exibe informações de contato.
- **Footer:** Rodapé simples com direitos reservados.
- **Head:** Componente para alterar o título e a descrição da página.
- **RouterMain:** Componente que define as rotas da aplicação.


## Configuração das Rotas
As rotas foram definidas no componente RouterMain.
```
import { Route, Routes } from 'react-router-dom';
import Produtos from '../Components/Produtos';
import Contato from '../Components/Contato';
import ProdutoEspecifico from '../Components/ProdutoEspecifico';

const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Produtos />} />
      <Route path="produto/:id" element={<ProdutoEspecifico />} />
      <Route path="contato" element={<Contato />} />
    </Routes>
  );
};

export default RouterMain;

```

## Tecnologias Utilizadas

- **React:** React é uma biblioteca JavaScript para construção de interfaces de usuário. Ele permite criar componentes reutilizáveis que gerenciam seu próprio estado.
- **React Router:** React Router é uma biblioteca para roteamento em aplicações React. Ela permite definir múltiplas rotas e navegar entre elas de forma declarativa.
- **Fetch API:** A Fetch API é usada para fazer requisições HTTP assíncronas para a API externa que fornece os dados dos produtos.
- **Tailwind CSS:** Tailwind CSS é uma biblioteca de utilitários CSS que facilita a criação de estilos diretamente no JSX.

  

## Estrutura do Projeto

```src/
├── Components/
│   ├── Header.js
│   ├── Footer.js
│   ├── Produtos.js
│   ├── ProdutoEspecifico.js
│   ├── EstruturaProduto.js
│   └── Contato.js
├── Hooks/
│   └── Head.js
├── RouterMain/
│   └── RouterMain.js
├── img/
│   └── contato.jpg
├── App.js
└── index.js
```

## 📷 Project images

![image](https://github.com/user-attachments/assets/a6f00407-9b3d-463c-8708-2d5648364c66)

![image](https://github.com/user-attachments/assets/d36a9b35-635d-40c2-a035-d25275b4cf6a)

