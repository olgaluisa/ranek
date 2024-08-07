import React from 'react';
import { useParams } from 'react-router-dom';
import Head from '../Hooks/Head';

const ProdutoEspecifico = () => {
  const params = useParams();
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  console.log(produto);
  React.useEffect(() => {
    async function api() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://ranekapi.origamid.dev/json/api/produto/${params.id}`,
        );
        const json = await response.json();
        setProduto(json);
      } catch (erro) {
        setError(`um erro ocorreu ${erro}`);
      } finally {
        setLoading(false);
      }
    }
    api();
  }, [params]);

  if (loading)
    return (
      <div className="w-5 h-5 rounded-[50%] bg-white border-4 border-solid border-[#ccc] border-r-transparent animate-loading"></div>
    );
  if (error) return <p>{error}</p>;
  if (produto === null) return null;
  return (
    <section className="animate-animeLeft grid grid-cols-2 gap-8 flex-1">
      <Head
        title={`Ranek | ${produto.nome}`}
        description={`Esse é o nosso produto :  ${produto.nome}`}
      />

      <img
        key={produto.fotos[0].src}
        src={produto.fotos[0].src}
        alt={produto.fotos[0].titulo}
        className="max-w-full block rounded-lg mb-8"
      />

      <div>
        <h1 className="text-2xl  font-bold text-slate-700">{produto.nome}</h1>
        <span className="p-2 bg-[#91fb5d] inline-block text-[#017e01] font-padrao rounded my-3">
          R$ {produto.preco}
        </span>
        <p className="font-padrao text-[1.2rem] leading-[1.2] text-slate-950">
          {produto.descricao}
        </p>
      </div>
    </section>
  );
};

export default ProdutoEspecifico;
