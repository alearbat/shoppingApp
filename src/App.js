import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import CartListContainer from './container/CartListContainer';
import AdminPanelContainer from './container/AdminPanelContainer';
import Home from './components/Home';
import Footer from './components/Footer';
import Services from './components/Services';
import Contact from './components/Contact';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ShoppingCart } from './context/cartContext';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <ShoppingCart>
          <header className="App-header">
            <NavBar/>
          </header>
          <Switch>
              <Route path="/productos/:categoryId">
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
              <Route path="/carrito">
                <section className="App-container"> 
                  <CartListContainer/>
                </section>
              </Route>
            <Route path="/servicios">
              <Services/>
            </Route>
            <Route path="/contacto">
              <Contact/>
            </Route>
            <Route path="/adminPanel/:currentStatus">
              <AdminPanelContainer/>
            </Route>
            <Route path="/adminPanel">
              <AdminPanelContainer/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <footer>
            <Footer/>
          </footer>
        </ShoppingCart>
      </div>
    </BrowserRouter>
  );
}

export default App;
