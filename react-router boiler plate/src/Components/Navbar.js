import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    //isOpen used to trigger menu for mobile/tablets
    const [isOpen, setOpen] = useState(false);
  return (
    <nav 
    className='navbar is-primary'
    role='navigation'
    aria-label='main navigation'
    >
        <div className='nav-container'>
            <div className='navbar-brand'>
                <a
                    role='button'
                    className= {`navbar-menu menu ${isOpen && 'is-active'}`}
                    aria-label='menu'
                    aria-expanded= 'false'
                    onClick={()=> setOpen(!isOpen)}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
                <div className={`navbar-menu ${isOpen && "is-active"}`}>
                    <div className="navbar-nav">
                        <NavLink 
                        className="navbar-item" 
                        activeClassName="is-active" 
                        to="/"
                        style={{textDecoration: 'none'}}
                        >
                        Home
                        </NavLink>

                        <NavLink
                        className="navbar-item"
                        activeClassName="is-active"
                        to="/users"
                        style={{textDecoration: 'none'}}
                        >
                        Users
                        </NavLink>

                        <NavLink
                        className="navbar-item"
                        activeClassName="is-active"
                        to="/posts"
                        style={{textDecoration: 'none'}}
                        >
                        Posts
                        </NavLink>
                    </div>
                </div>
        </div>

    </nav>
  )
}

export default Navbar