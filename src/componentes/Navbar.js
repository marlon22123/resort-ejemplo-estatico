import React, { Component } from 'react'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import logo from "../imagenes/logo.svg";
export default class Navbar extends Component {
    state={
        isOpen:false
    }
    handleToggle=()=>{
        this.setState({
            isOpen: !this.setState.isOpen
        })
    }
    render() {
        return (
            <nav className='navbar'>
                <div className='nav-center'>
                    <div className='nav-header'>
                        <Link to='/'>
                        <img src={logo} alt="Ejemplo Resort"></img>
                        </Link>
                        <button className='nav-btn' type='button' onClick={this.handleToggle}>
                            <FaAlignRight className='nav-icon'></FaAlignRight>
                        </button>
                    </div>
                    <ul className={this.state.isOpen? 'nav-links show-nav': 'nav-links'} >
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/rooms'>Rooms</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
