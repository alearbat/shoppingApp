import './css/App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './container/ItemListContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <section className="App-container">
        <h1>Nuestros productos</h1>
        <ItemListContainer/>
      </section>
    </div>
  );
}

export default App;
