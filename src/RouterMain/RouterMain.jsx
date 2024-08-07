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
