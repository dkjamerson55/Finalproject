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
        <div className='container'>
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
                    <div className="navbar-start">
                        <NavLink className="navbar-item" activeClassName="is-active" to="/">
                        Home
                        </NavLink>

                        <NavLink
                        className="navbar-item"
                        activeClassName="is-active"
                        to="/users"
                        >
                        Users
                        </NavLink>

                        <NavLink
                        className="navbar-item"
                        activeClassName="is-active"
                        to="/posts"
                        >
                        Profile
                        </NavLink>
                    </div>
                </div>
        </div>

    </nav>
  )
}

export default Navbar