const EstruturaProduto = ({ produto }) => {
  return (
    <div>
      <img
        src={produto.fotos[0].src}
        alt={produto.fotos[0].titulo}
        className="max-w-full block rounded-lg"
      />
      <h1 className="my-[.5rem] mx-0 text-xl font-semibold text-slate-600">
        {produto.nome}
      </h1>
    </div>
  );
};

export default EstruturaProduto;
