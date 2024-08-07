import Head from '../Hooks/Head';
import imagem from '../img/contato.jpg';

const Contato = () => {
  return (
    <section className="grid grid-cols-2 gap-8 animate-animeLeft flex-1">
      <Head title="Ranek | Contato" description="Essa é a página de contato" />
      <img
        src={imagem}
        alt="imagem de uma maquina de escrever"
        className="max-w-full block rounded-lg"
      />
      <div>
        <h1 className="text-2xl mb-8 font-bold text-slate-700">
          Entre em contato:
        </h1>
        <ul>
          <li className="text-lg font-padrao text-slate-950 mb-[.8rem] before:inline-block before:w-5 before:h-[2px] before:bg-[#ddd] before:mr-[10px]">
            fulanoali27@gmail.com
          </li>
          <li className="text-lg font-padrao text-slate-950 mb-[.8rem] before:inline-block before:w-5 before:h-[2px] before:bg-[#ddd] before:mr-[10px]">
            99999-9999
          </li>
          <li className="text-lg font-padrao text-slate-950 mb-[.8rem] before:inline-block before:w-5 before:h-[2px] before:bg-[#ddd] before:mr-[10px]">
            Rua aqui perto, 15 - Botafogo RJ
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
