import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './container/ItemListContainer'
import ItemDetailContainer from './container/ItemDetailContainer'
import Home from './components/Home'
import Footer from './components/Footer'
import Services from './components/Services'
import Contact from './components/Contact'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar/>
        </header>
        <Switch>
          <Route path="/productos/:category">
            <section className="App-container"> 
              <ItemListContainer/>
            </section>
          </Route>
          <Route path="/productos">
            <section className="App-container">
              <ItemListContainer/>
            </section>
          </Route>
          <Route path="/item/:id">
            <section className="App-container"> 
              <ItemDetailContainer/>
            </section>
          </Route>
          <Route path="/servicios">
            <Services/>
          </Route>
          <Route path="/contacto">
            <Contact/>
          </Route>
          <Route path="/carrito">
            {/* <Cart /> */}
          </Route>
          <Route path="/"> {/* Como default al final para que caiga en home si hay un error*/}
            <Home />
          </Route>
        </Switch>
        <footer>
          <Footer/>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
