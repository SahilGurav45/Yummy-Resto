import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Layout from './Layout';
import AdminLayout from './AdminLayout';
import Menu from './Menu';
import Events from './Events';
import Chefs from './Chefs';
import PageNotFound from './PageNotFound';
import BookTable from './BookTable';
import Contacts from './Contacts';

const App = () => {
  return (
    <>

      <Router>
        

        <Routes>


          {/* parent routing */}
          <Route path='/' element={<Layout />}>

            {/* Index routing */}
            <Route index element={<Home />} />

            {/* child routing */}
            <Route path='/about' element={<About />}></Route>
            <Route path='/Menu' element={<Menu/>}/>
            <Route path='/Events' element={<Events/>}/>
            <Route path='/Chefs' element={<Chefs/>}/>
            <Route path='/BookTable' element={<BookTable/>}/>
            <Route path='/Contact' element={<Contacts/>}/>
            {/* <Route path='/BookTable' element={<BookTable/>}></Route> */}
           


           

            {/* fallback routing */}
            <Route path='*' element={<PageNotFound />}></Route>


          </Route>


          {/* ****************************************************** */}

          {/* Admin panel */}

          <Route path='/admin' element={<AdminLayout/>}>

                <Route index path='/admin/login' element={<h1>Login Page</h1>}/>
                <Route path='/admin/forgotpass' element={<h1>Forgot Password Page</h1>}/>
          
          </Route> 


        </Routes>
      </Router>


    </>
  )
}

export default App
