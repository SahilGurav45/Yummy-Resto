import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-danger text-light fw-bold">
                <NavLink to='/' className="navbar-brand text-gray px-3 fw-bold"><h2>Yummy</h2></NavLink>


                <ul className='navbar-nav m-auto'>
                    <li className='nav-item mx-3'>
                        <NavLink to="/" className="nav-link text-light fw-bold">Home</NavLink>
                    </li>

                    <li className='nav-item mx-3'>
                        <NavLink to="/about" className="nav-link text-light fw-bold">About</NavLink>
                    </li>

                    <li className='nav-item mx-3'>
                        <NavLink to="/Menu" className="nav-link text-light fw-bold">Menu</NavLink>
                    </li>

                    <li className='nav-item mx-3'>
                        <NavLink to="/Events "className="nav-link text-light fw-bold">Events</NavLink>
                    </li>

                    <li className='nav-item mx-3'>
                        <NavLink to="/Chefs "className="nav-link text-light fw-bold">Chefs</NavLink>
                    </li>

                    
                    <li className='nav-item mx-3'>
                        <NavLink to="/Gallary "className="nav-link text-light fw-bold">Gallary</NavLink>
                    </li>

                    
                    <li className='nav-item mx-3'>
                        <NavLink to="/Dropdown "className="nav-link text-light fw-bold">Dropdown</NavLink>
                    </li>

                    
                    {/* <li className='nav-item mx-3'>
                        <NavLink to="/Contact "className="nav-link text-light fw-bold">Contact</NavLink>
                    </li> */}

                    {/* <li className='nav-item mx-5'>
                    <NavLink to="/Booking "className="nav-link text-light fw-bold"><button className='btn btn-dark'>Book Table</button></NavLink>
                    </li> */}

                    <li className='nav-item mx-3'>
                        <NavLink to="/Contact "className="nav-link text-light fw-bold">Contact</NavLink>
                    </li>

                    <li className='nav-item mx-5'>
                    <NavLink to="/BookTable "className="nav-link text-light fw-bold"><button className='btn btn-dark'>Book Table</button></NavLink>
                    </li>



                </ul>
            </nav>

        </>
    )
}

export default Navbar
