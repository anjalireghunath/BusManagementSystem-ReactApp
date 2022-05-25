import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-danger">
  <div className="container-fluid">
      <Link className="navbar-brand" to='/'>BUS MANAGEMENT</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
            <Link className="nav-link active" to="/">ADD BUS</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link active" to="/search">SEARCH BUS</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link active" to="/view">VIEW ALL BUS</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Header