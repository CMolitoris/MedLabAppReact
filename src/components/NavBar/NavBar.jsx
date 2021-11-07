import React from 'react';
import { Badge } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './NavBar.css';


const NavBar = (props) => {


    return ( 
        <nav className="navbar-color">
          
            <ul className='nav justify-content-center offset-lg-4'>
            <li className='nav-item'><Link to  = '/' className='nav-link'><i className="bi bi-hurricane"></i> Apex Solutions</Link></li>
                <li className='nav-item'><Link to  = '/' className='nav-link'><i className="bi bi-house-fill"></i> Home</Link></li>
                {!props.user && 
                    <React.Fragment>
                        <li >
                            <a className='nav-link' onClick = {props.toggleLogModal}><i className="bi bi-key-fill"></i>  Log In</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' onClick = {props.toggleRegisterModal}><i className="bi bi-shield-lock-fill"></i>  Register</a>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-link navbar-text'><i className="bi bi-pen-fill"></i>  Labs </Link>
                        </li>
                    </React.Fragment>
                }
                {props.user && 
                    <React.Fragment>
                        <li className='nav-item'>
                            <Link to='/forms' className='nav-link'><i className="bi bi-pen-fill"></i> Labs </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/account' className='nav-link'><i className="bi bi-person-fill"></i> Account</Link>
                        </li>
                        <li className='nav-item'>
                            <a onClick = {props.logoutUser} className='nav-link'><i className="bi bi-door-open-fill"></i> Log Out</a>
                        </li>
                    </React.Fragment>
                }
            </ul>
        </nav>
     );
}
 
export default NavBar;