import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import LandingPage from './Routes/LandingPage';
import AdoptAPetPage from './Routes/AdoptAPetPage';
import NewFamilyPage from './Routes/NewFamilyPage';

function App() {
  return (
    <div className="App">

      <header className="App-header"><Link to='/'>
        <h1>Petful</h1>
        </Link></header>
    
      <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route path='/adoption' component={AdoptAPetPage}/>
      <Route path='/new-family' component={NewFamilyPage}/>
      <Route path='/' component={LandingPage}/>
      </Switch>
      
    </div>
  );
}

export default App;
