import React from 'react';
import About from './About';
import Menu from './Menu';
import Chefs from './Chefs';
import Gallary from './Gallary';
import Contact from './Contact';
import BookTable from './BookTable';


const Home = () => {
    return (
        <>
             <div className="container">

                <div className="row">

                    <div className="col-md-12 p-5" >

                    <div className="row">
                    <div className="col-md-6  p-5">

                        <h1 className="display-4 fw-600" style={{fontVariant:'small-caps'}}>
                            Enjoy Your Healthy <br/>
                            Delicious Food

                        </h1>

                        <p className="blockquote my-3">We are team of talented designers making websites with Bootstrap</p>

                        <div className="mt-4">
                            <button className="btn btn-danger px-4 fw-bold"
                                style = {{borderRadius:'20px', backgroundColor:'#CE1212'}}>Book A Table</button>
                                <button className="btn btn-light px-4 fw-bold" style= {{borderRadius:'20px'}}><i
                                  className="bi bi-fast-forward-circle-fill" style=   {{color:'#CE1212', fontSize:'large'}}> </i>Watch
                                    Video</button>
                        </div>

                    </div>


                    

                  


                    {/* <!-- section 2 --> */}
                    <div className="col-md-6  text-center">
                        <img src="./assets/hero-img.png" className="img-fluid foodImage" alt="" style= {{height:'590px'}}/>
                    </div>
                </div>
                   

                <div className="whatsapp_box">
        <a href="https://wa.link/tjffch"> <i className="bi bi-whatsapp"></i></a>

      </div>
                    </div>
                </div>


              
            </div>

           <About/>
           <Menu/>
           <Chefs/>
           <Gallary/>
           <Contact/>
           <BookTable/>
            
        </>
    )
}

export default Home
