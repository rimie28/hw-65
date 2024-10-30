import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pages from './Components/Pages.tsx';
import Admin from './Components/Admin.tsx';

function App() {


  return (
    <Router>
    <div>
      <nav className="p-3 navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
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
        <Route path="/pages/:pageName" element={<Pages/>}></Route>
        <Route path="/pages/admin" element={<Admin/>}></Route>
      </Routes>
      </div>
    </div>
    </Router>
  )
}

export default App
