import React from 'react';
import Head from '../Hooks/Head';
import EstruturaProduto from './EstruturaProduto';
import { Link } from 'react-router-dom';

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);
  console.log(produtos);
  React.useEffect(() => {
    async function apiProdutos() {
      const api = await fetch('https://ranekapi.origamid.dev/json/api/produto');
      const json = await api.json();
      setProdutos(json);
    }
    apiProdutos();
  }, []);

  if (produtos === null) return null;
  return (
    <section className="animate-animeLeft flex-1">
      <Head title="Ranek" description="Essa é a página dos nossos produtos" />
      <h1 className="text-2xl mb-8 font-bold text-slate-700">Produtos</h1>
      <div className="grid grid-cols-3 gap-8">
        {produtos.map((produto) => (
          <Link to={`produto/${produto.id}`} key={produto.id}>
            <EstruturaProduto produto={produto} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Produtos;
