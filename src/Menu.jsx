import React from 'react'

import './main.css'

function Menu() {
  return (
    <div>
     

     <div className="container">
      <div className="row">
        <div className="col-md-12">


        {/* <!-- Menu Section --> */}
    <section id="menu" className="menu section">

        {/* <!-- Section Title --> */}
        <div className="container section-title  justify-content-center display-flex !important" data-aos="fade-up" >
          <p  style={{display:'flex', justifyContent:'center', fontSize:'40px'}}><span>Check Our</span> <span style={{color:'#CE1212'}} className="description-title">Yummy Menu</span></p>
        </div>
        {/* <!-- End Section Title --> */}
  
        <div className="container">
  
          <ul className="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
  
            <li className="nav-item">
              <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#menu-starters">
                <h4 style={{fontSize:'20px', color:'black'}}>Starters</h4>
              </a>
            </li>
            {/* <!-- End tab nav item --> */}
  
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-breakfast">
                <h4 style={{fontSize:'20px', color:'black'}}>Breakfast</h4>
              </a>
              {/* <!-- End tab nav item --> */}
  
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-lunch">
                <h4 style={{fontSize:'20px', color:'black'}}>Lunch</h4>
              </a>
            </li>
            {/* <!-- End tab nav item --> */}
  
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-dinner">
                <h4 style={{fontSize:'20px',color:'black'}}>Dinner</h4>
              </a>
            </li>
            {/* <!-- End tab nav item --> */}
  
          </ul>
  
          <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
  
            <div className="tab-pane fade active show" id="menu-starters">
  
              <div className="tab-header text-center">
                <p style={{fontSize:'10px'}}>Menu</p>
                <h3 style={{fontSize:'40px',color:'#CE1212'}}>Starters</h3>
              </div>
  
              <div className="row gy-5">
  
                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-1.png" className="glightbox"><img src="assets/img/menu/menu-item-1.png" className="menu-img img-fluid" alt=""/></a>
                  <h4>Magnam Tiste</h4>
                  <p style={{color:'#636669'}}className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p style={{color:'#CE1212',fontSize:'25px'}} className="price ">
                    $5.95
                  </p>
                </div>
                {/* <!-- Menu Item --> */}
  
                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-2.png" className="glightbox"><img src="assets/img/menu/menu-item-2.png" className="menu-img img-fluid" alt=""/></a>
                  <h4>Aut Luia</h4>
                  <p style={{color:'#636669'}}  className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p style={{color:'#CE1212', fontSize:'25px'}} className="price">
                    $14.95
                  </p>
                </div>
                {/* <!-- Menu Item --> */}
  
                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-3.png" className="glightbox"><img src="assets/img/menu/menu-item-3.png" className="menu-img img-fluid" alt=""/></a>
                  <h4>Est Eligendi</h4>
                  <p style={{color:'#636669'}}   className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p style={{color:'#CE1212', fontSize:'25px'}} className="price">
                    $8.95
                  </p>
                </div>
                {/* <!-- Menu Item --> */}
  
                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-4.png" className="glightbox"><img src="assets/img/menu/menu-item-4.png" className="menu-img img-fluid" alt=""/></a>
                  <h4>Eos Luibusdam</h4>
                  <p style={{color:'#636669'}}   className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p style={{color:'#CE1212', fontSize:'25px'}}  className="price">
                    $12.95
                  </p>
                </div>
                {/* <!-- Menu Item --> */}
  
                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-5.png" className="glightbox"><img src="assets/img/menu/menu-item-5.png" className="menu-img img-fluid" alt=""/></a>
                  <h4>Eos Luibusdam</h4>
                  <p style={{color:'#636669'}}   className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p style={{color:'#CE1212', fontSize:'25px'}}  className="price">
                    $12.95
                  </p>
                </div>
                {/* <!-- Menu Item --> */}
  
                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-6.png" className="glightbox"><img src="assets/img/menu/menu-item-6.png" className="menu-img img-fluid" alt=""/></a>
                  <h4>Laboriosam Direva</h4>
                  <p style={{color:'#636669'}}   className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p style={{color:'#CE1212', fontSize:'25px'}}  className="price">
                    $9.95
                  </p>
                </div>
                {/* <!-- Menu Item --> */}
  
              </div>
            </div>
            {/* <!-- End Starter Menu Content --> */}
  
            <div className="tab-pane fade" id="menu-breakfast">
  
              <div className="tab-header text-center">
                <p style={{fontSize:'10px'}}>Menu</p>
                <h3 style={{fontSize:'40px',color:'#CE1212'}}>Breakfast</h3>
              </div>
  
              <div className="row gy-5">
  
                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-1.png" className="glightbox"><img src="assets/img/menu/menu-item-1.png" className="menu-img img-fluid" alt=""/></a>
                  <h4>Magnam Tiste</h4>
                  <p style={{color:'#636669'}}    className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p style={{color:'#CE1212', fontSize:'25px'}} className="price">
                    $5.95
                  </p>
                 </div>
                {/* // <!-- Menu Item -->  */}
  
                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-2.png" className="glightbox"><img src="assets/img/menu/menu-item-2.png" className="menu-img img-fluid" alt=""/></a>
                  <h4>Aut Luia</h4>
                  <p style={{color:'#636669'}}   className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p style={{color:'#CE1212', fontSize:'25px'}} className="price">
                    $14.95
                  </p>
                </div>
                {/* <!-- Menu Item --> */}
  
                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-3.png" className="glightbox"><img src="assets/img/menu/menu-item-3.png" className="menu-img img-fluid" alt=""/></a>
                  <h4>Est Eligendi</h4>
                  <p style={{color:'#636669'}}   className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p style={{color:'#CE1212', fontSize:'25px'}} className="price">
                    $8.95
                  </p>
                </div>
                {/* <!-- Menu Item --> */}
  
                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-4.png" className="glightbox"><img src="assets/img/menu/menu-item-4.png" className="menu-img img-fluid" alt=""/></a>
                  <h4>Eos Luibusdam</h4>
                  <p style={{color:'#636669'}}  className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p style={{color:'#CE1212', fontSize:'25px'}} className="price">
                    $12.95
                  </p>
                </div>
                {/* <!-- Menu Item --> */}
  
                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-5.png" className="glightbox"><img src="assets/img/menu/menu-item-5.png" className="menu-img img-fluid" alt=""/></a>
                  <h4>Eos Luibusdam</h4>
                  <p  style={{color:'#636669'}} className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p style={{color:'#CE1212', fontSize:'25px'}} className="price">
                    $12.95
                  </p>
                </div>
                {/* <!-- Menu Item --> */}
  
                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-6.png" className="glightbox"><img src="assets/img/menu/menu-item-6.png" className="menu-img img-fluid" alt=""/></a>
                  <h4>Laboriosam Direva</h4>
                  <p style={{color:'#636669'}} className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p style={{color:'#CE1212', fontSize:'25px'}} className="price">
                    $9.95
                  </p>
                </div>
                {/* <!-- Menu Item --> */}
  
              </div>
            </div>
            {/* <!-- End Breakfast Menu Content --> */}
  
            <div className="tab-pane fade" id="menu-lunch">
  
              <div className="tab-header text-center">
                <p style={{fontSize:'10px'}}>Menu</p>
                <h3 style={{fontSize:'40px',color:'#CE1212'}}>Lunch</h3>
              </div>
  
              <div className="row gy-5">
  
                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-1.png" className="glightbox"><img src="assets/img/menu/menu-item-1.png" className="menu-img img-fluid" alt=""/></a>
                  <h4>Magnam Tiste</h4>
                  <p style={{color:'#636669'}} className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p style={{color:'#CE1212', fontSize:'25px'}} className="price">
                    $5.95
                  </p>
                </div>
                {/* <!-- Menu Item --> */}
  
                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-2.png" className="glightbox"><img src="assets/img/menu/menu-item-2.png" className="menu-img img-fluid" alt=""/></a>
                  <h4>Aut Luia</h4>
                  <p  style={{color:'#636669'}}  className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p style={{color:'#CE1212', fontSize:'25px'}} className="price">
                    $14.95
                  </p>
                </div>
                {/* <!-- Menu Item --> */}
  
                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-3.png" className="glightbox"><img src="assets/img/menu/menu-item-3.png" className="menu-img img-fluid" alt=""/></a>
                  <h4>Est Eligendi</h4>
                  <p  style={{color:'#636669'}} className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p style={{color:'#CE1212', fontSize:'25px'}} className="price">
                    $8.95
                  </p>
                </div>
                {/* <!-- Menu Item --> */}
  
                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-4.png" className="glightbox"><img src="assets/img/menu/menu-item-4.png" className="menu-img img-fluid" alt=""/></a>
                  <h4>Eos Luibusdam</h4>
                  <p style={{color:'#636669'}} className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p style={{color:'#CE1212', fontSize:'25px'}} className="price">
                    $12.95
                  </p>
                </div>
                {/* <!-- Menu Item --> */}
  
                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-5.png" className="glightbox"><img src="assets/img/menu/menu-item-5.png" className="menu-img img-fluid" alt=""/></a>
                  <h4>Eos Luibusdam</h4>
                  <p style={{color:'#636669'}}  className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p style={{color:'#CE1212', fontSize:'25px'}} className="price">
                    $12.95
                  </p>
                </div>
                {/* <!-- Menu Item --> */}
  
                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-6.png" className="glightbox"><img src="assets/img/menu/menu-item-6.png" className="menu-img img-fluid" alt=""/></a>
                  <h4>Laboriosam Direva</h4>
                  <p style={{color:'#636669'}}  className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p style={{color:'#CE1212', fontSize:'25px'}}  className="price">
                    $9.95
                  </p>
                </div>
                {/* <!-- Menu Item --> */}
  
              </div>
            </div>
            {/* <!-- End Lunch Menu Content --> */}
  
            <div className="tab-pane fade" id="menu-dinner">
  
              <div className="tab-header text-center">
                <p style={{fontSize:'10px'}}>Menu</p>
                <h3 style={{fontSize:'25px',color:'#CE1212'}}>Dinner</h3>
              </div>
  
              <div className="row gy-5">
  
                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-1.png" className="glightbox"><img src="assets/img/menu/menu-item-1.png" className="menu-img img-fluid" alt=""/></a>
                  <h4>Magnam Tiste</h4>
                  <p style={{color:'#636669'}}  className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p style={{color:'#CE1212', fontSize:'25px'}}  className="price">
                    $5.95
                  </p>
                </div>
                {/* <!-- Menu Item --> */}
  
                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-2.png" className="glightbox"><img src="assets/img/menu/menu-item-2.png" className="menu-img img-fluid" alt=""/></a>
                  <h4>Aut Luia</h4>
                  <p  style={{color:'#636669'}}  className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p style={{color:'#CE1212', fontSize:'25px'}}  className="price">
                    $14.95
                  </p>
                </div>
                {/* <!-- Menu Item --> */}
  
                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-3.png" className="glightbox"><img src="assets/img/menu/menu-item-3.png" className="menu-img img-fluid" alt=""/></a>
                  <h4>Est Eligendi</h4>
                  <p  style={{color:'#636669'}}   className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p style={{color:'#CE1212', fontSize:'25px'}}  className="price">
                    $8.95
                  </p>
                </div>
                {/* <!-- Menu Item --> */}
  
                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-4.png" className="glightbox"><img src="assets/img/menu/menu-item-4.png" className="menu-img img-fluid" alt=""/></a>
                  <h4>Eos Luibusdam</h4>
                  <p style={{color:'#636669'}}  className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p style={{color:'#CE1212', fontSize:'25px'}}  className="price">
                    $12.95
                  </p>
                </div>
                {/* <!-- Menu Item --> */}
  
                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-5.png" className="glightbox"><img src="assets/img/menu/menu-item-5.png" className="menu-img img-fluid" alt=""/></a>
                  <h4>Eos Luibusdam</h4>
                  <p style={{color:'#636669'}}   className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p style={{color:'#CE1212', fontSize:'25px'}} className="price">
                    $12.95
                  </p>
                </div>
                {/* <!-- Menu Item --> */}
  
                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-6.png" className="glightbox"><img src="assets/img/menu/menu-item-6.png" className="menu-img img-fluid" alt=""/></a>
                  <h4>Laboriosam Direva</h4>
                  <p style={{color:'#636669'}}   className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p style={{color:'#CE1212', fontSize:'25px'}}  className="price">
                    $9.95
                  </p>
                </div>
                {/* <!-- Menu Item --> */}
  
              </div>
            </div>
            {/* <!-- End Dinner Menu Content --> */}
  
          </div>
  
        </div>
  
      </section>
      {/* <!-- /Menu Section --> */}

        </div>
      </div>
     </div>


    </div>
  )
}

export default Menu
