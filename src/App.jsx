import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Chefs from './components/Chefs';
import Gallary from './components/Gallary';
import BookTable from './components/BookTable';
import Contact from './components/Contact';
import PageNotFound from './components/PageNotFound';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();



const App = () => {
  return (
    <>

      <Router>
        

        <Routes>


          {/* parent routing */}
          <Route path='/' element={<Layout/>}>

            {/* Index routing */}
            <Route index element={<Home/>} />

            {/* child routing */}
            <Route path='/about' element={<About/>}></Route>
            <Route path='/Menu' element={<Menu/>}/>
            <Route path='/Chefs' element={<Chefs/>}/>
            <Route path='/Gallary' element={<Gallary/>}/>
            <Route path='/BookTable' element={<BookTable/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/BookTable' element={<BookTable/>}></Route>
           

            </Route>
           

            {/* fallback routing */}
            <Route path='*' element={<PageNotFound/>}></Route>
     

      

        </Routes>
      </Router>


    </>
  )
}

export default App