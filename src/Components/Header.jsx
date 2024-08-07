import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="my-8">
      <ul className="flex gap-4">
        <li className="py-2 px-4 text-slate-700 bg-[#eee] hover:bg-[#ddd] text-[1.2rem] font-padrao rounded ">
          <NavLink to="/" end>
            Produtos
          </NavLink>
        </li>
        <li className="py-2 px-4 text-slate-700 bg-[#eee] hover:bg-[#ddd] text-[1.2rem] font-padrao rounded ">
          <NavLink to="contato">Contato</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
