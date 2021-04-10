import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import Navbar from './components/layout/navbar'
import NotFound from './components/pages/NotFound'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser'
import User from './components/users/User'
function App() {
  return (
    <Router>
    <div className="App">
    <h1>Hello REact</h1>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/users/add" component={AddUser}/>
      <Route exact path="/users/edit/:id" component={EditUser}/>
      <Route exact path="/users/:id" component={User} />
      <Route exact component={NotFound} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
