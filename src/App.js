import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import { Header } from './mycomponents/header.js';
import { Skills } from './mycomponents/skills.js'
import { Contact } from './mycomponents/contact.js'
import { Footer } from './mycomponents/footer.js'
import { Home } from './mycomponents/home.js'
import {Career} from './mycomponents/career.js'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/skills">
          <Skills />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
          <Route exact path="/career">
          <Career />
        </Route>
      </Switch> 
      <Footer />
    </Router>
  );
}

export default App;
