import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div>

            <center className='my-4'>
                <h2 className='text-danger fw-bold'><i>404 - Page Not Found </i></h2>
                <p>Looking for something?
                We're sorry. The Web address you entered is not a functioning page on our site.</p>

               <NavLink to='/' className="btn btn-outline-danger fw-bold px-4"> Go to Home Page</NavLink>
            </center>

        </div>
    )
}

export default PageNotFound
