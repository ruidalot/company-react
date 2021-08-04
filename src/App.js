import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Sobrenos from './Sobrenos';
import Equipa from './Equipa';
import Servicos from './Servicos';
import Contactos from './Contactos';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Sobrenos">
              <Sobrenos />
            </Route>
            <Route path="/Equipa">
              <Equipa />
            </Route>
            <Route path="/Servicos">
              <Servicos />
            </Route>
            <Route path="/Contactos">
              <Contactos />
            </Route>
          </Switch>
        <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
