// import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'

// const Navbar = () => {

//      const [openDropdown, setOpenDropdown] = useState(null);
//   const [openDeepDropdown, setOpenDeepDropdown] = useState(null);

//   const toggleDropdown = (menu) => {
//     setOpenDropdown(openDropdown === menu ? null : menu);
//   };

//   const toggleDeepDropdown = (menu) => {
//     setOpenDeepDropdown(openDeepDropdown === menu ? null : menu);
//   };

//     return (
//         <>

//             <nav className="navbar navbar-expand-lg bg-danger text-light fw-bold">
//                 <NavLink to='/' className="navbar-brand text-gray px-3 fw-bold"><h2>Yummy</h2></NavLink>


//                 <ul className='navbar-nav m-auto'>
//                     <li className='nav-item mx-3'>
//                         <NavLink to="/" className="nav-link text-light fw-bold">Home</NavLink>
//                     </li>

//                     <li className='nav-item mx-3'>
//                         <NavLink to="/about" className="nav-link text-light fw-bold">About</NavLink>
//                     </li>

//                     <li className='nav-item mx-3'>
//                         <NavLink to="/Menu" className="nav-link text-light fw-bold">Menu</NavLink>
//                     </li>

//                     <li className='nav-item mx-3'>
//                         <NavLink to="/Events "className="nav-link text-light fw-bold">Events</NavLink>
//                     </li>

//                     <li className='nav-item mx-3'>
//                         <NavLink to="/Chefs "className="nav-link text-light fw-bold">Chefs</NavLink>
//                     </li>

                    
//                     <li className='nav-item mx-3'>
//                         <NavLink to="/Gallary "className="nav-link text-light fw-bold">Gallary</NavLink>
//                     </li>

                    
//                     {/* <li className='nav-item mx-3'>
//                         <NavLink to="/Dropdown "className="nav-link text-light fw-bold">Dropdown</NavLink>
//                     </li> */}


//                     {/* <li className='nav-item mx-3'>
//                         <NavLink to="/Dropdown "className="nav-link text-light fw-bold">Dropdown</NavLink>
//                     </li> */}

//                  <li className="nav-item  text-light ">
//       <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown('main'); }}>
//         <span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
//       </a>
//       <ul style={{ display: openDropdown === 'main' ? 'block' : 'none' }}>
//         <li><NavLink to="/dropdown1">Dropdown 1</NavLink></li>

//         <li className="dropdown">
//           <a href="#" onClick={(e) => { e.preventDefault(); toggleDeepDropdown('deep'); }}>
//             <span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
//           </a>
//           <ul style={{ display: openDeepDropdown === 'deep' ? 'block' : 'none' }}>
//             <li><NavLink to="/deep-dropdown1">Deep Dropdown 1</NavLink></li>
//             <li><NavLink to="/deep-dropdown2">Deep Dropdown 2</NavLink></li>
//             <li><NavLink to="/deep-dropdown3">Deep Dropdown 3</NavLink></li>
//             <li><NavLink to="/deep-dropdown4">Deep Dropdown 4</NavLink></li>
//             <li><NavLink to="/deep-dropdown5">Deep Dropdown 5</NavLink></li>
//           </ul>
//         </li>

//         <li><NavLink to="/dropdown2">Dropdown 2</NavLink></li>
//         <li><NavLink to="/dropdown3">Dropdown 3</NavLink></li>
//         <li><NavLink to="/dropdown4">Dropdown 4</NavLink></li>
//       </ul>
//     </li>

                    
//                     {/* <li className='nav-item mx-3'>
//                         <NavLink to="/Contact "className="nav-link text-light fw-bold">Contact</NavLink>
//                     </li> */}

//                     {/* <li className='nav-item mx-5'>
//                     <NavLink to="/Booking "className="nav-link text-light fw-bold"><button className='btn btn-dark'>Book Table</button></NavLink>
//                     </li> */}

//                     <li className='nav-item mx-3'>
//                         <NavLink to="/Contact "className="nav-link text-light fw-bold">Contact</NavLink>
//                     </li>

//                     <li className='nav-item mx-5'>
//                     <NavLink to="/BookTable "className="nav-link text-light fw-bold"><button className='btn btn-dark'>Book Table</button></NavLink>
//                     </li>



//                 </ul>
//             </nav>


            
    
//       <div/>

//         </>
//     )
// }

// export default Navbar


import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'; 

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openDeepDropdown, setOpenDeepDropdown] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-danger text-light fw-bold pt-4 pb-2">
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
            <NavLink to="/Chefs" className="nav-link text-light fw-bold">Chefs</NavLink>
          </li>

          <li className='nav-item mx-3'>
            <NavLink to="/Gallary" className="nav-link text-light fw-bold">Gallary</NavLink>
          </li>

          {/* Dropdown */}
          <li
            className="nav-item dropdown mx-3"
            onMouseEnter={() => setOpenDropdown(true)}
            onMouseLeave={() => setOpenDropdown(false)}
          >
            <span className="nav-link text-light fw-bold dropdown-toggle" style={{ cursor: 'pointer' }}>
              Dropdown
            </span>
            <ul className={`dropdown-menu show-on-hover ${openDropdown ? 'show' : ''}`}>
              <li><NavLink className="dropdown-item" to="/dropdown1">Dropdown 1</NavLink></li>

              {/* Deep Dropdown */}
              <li
                className="dropdown-submenu"
                onMouseEnter={() => setOpenDeepDropdown(true)}
                onMouseLeave={() => setOpenDeepDropdown(false)}
              >
                <span className="dropdown-item dropdown-toggle" style={{ cursor: 'pointer' }}>
                  Deep Dropdown
                </span>
                <ul className={`dropdown-menu ${openDeepDropdown ? 'show' : ''}`}>
                  <li><NavLink className="dropdown-item" to="/deep-dropdown1">Deep Dropdown 1</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/deep-dropdown2">Deep Dropdown 2</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/deep-dropdown3">Deep Dropdown 3</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/deep-dropdown4">Deep Dropdown 4</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/deep-dropdown5">Deep Dropdown 5</NavLink></li>
                </ul>
              </li>

              <li><NavLink className="dropdown-item" to="/dropdown2">Dropdown 2</NavLink></li>
              <li><NavLink className="dropdown-item" to="/dropdown3">Dropdown 3</NavLink></li>
              <li><NavLink className="dropdown-item" to="/dropdown4">Dropdown 4</NavLink></li>
            </ul>
          </li>

          <li className='nav-item mx-3'>
            <NavLink to="/Contact" className="nav-link text-light fw-bold">Contact</NavLink>
          </li>

          <li className='nav-item mx-5'>
            <NavLink to="/BookTable" className="nav-link text-light fw-bold">
              <button className='btn btn-dark'>Book Table</button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;

