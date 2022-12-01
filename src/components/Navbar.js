import React, { Component } from 'react'
import logo2 from '../logo2.jpg'

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="https://en.wikipedia.org/wiki/Dai_(cryptocurrency)"
          target="_blank"
          rel="noopener noreferrer"
        >
         
          <img src={logo2} width="50" height="50" className="d-inline-block align-top" alt="" />
          &nbsp; TokenEx
        </a>

        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-secondary">
              <small id="account">{this.props.account}</small>
            </small>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
