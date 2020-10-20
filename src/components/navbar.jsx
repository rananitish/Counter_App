import React, { Component } from 'react'
class Navbar extends Component {
    //stateless functional components
    render() { 
        return ( <nav className="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar <span className="badge badge-pill badge-secondary">{this.props.length}</span></a>
      </nav> );
    }
}
 
export default Navbar;