import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';
import RouterMain from './RouterMain/RouterMain';

function App() {
  return (
    <div className="max-w-[40rem] my-0 mx-auto flex flex-col min-h-[calc(100vh_+_10rem)]">
      <Header />
      <RouterMain />
      <Footer />
    </div>
  );
}

export default App;
