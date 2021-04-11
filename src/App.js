import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './container/ItemListContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <section className="App-container">
        <ItemListContainer text={'Aqui estaran todos los productos de la tienda'}/>
      </section>
    </div>
  );
}

export default App;
