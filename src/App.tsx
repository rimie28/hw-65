import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pages from './Components/Pages.tsx';

function App() {


  return (
    <Router>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          <NavLink className="navbar-brand" to="/">Home</NavLink>
          <li className="nav-item">
            <NavLink className="nav-link" to="/pages/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/pages/contacts">Contacts</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/pages/divisions">Divisions</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/pages/faq">FAQ</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/pages/admin">Admin</NavLink>
          </li>
        </ul>
      </nav>

      <div className="container">
      <Routes>
        <Route path="/"/>
        <Route path="/pages/:pageName" element={<Pages/>}></Route>
      </Routes>
      </div>
    </div>
    </Router>
  )
}

export default App
