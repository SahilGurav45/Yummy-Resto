import React from 'react';
import Stats from './Stats';

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {/* About Section */}
          <section id="about" className="about section">
            <div className="container section-title" data-aos="fade-up">
              <p>
                <span>Learn More </span>
                <span style={{ color: '#CE1212' }} className="description-title">About Us</span>
              </p>
            </div>

            <div className="container">
              <div className="row gy-4">
                {/* Image and Booking Info */}
                <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">

                  <img src="./assets/img/about.jpg" className="img-fluid mb-4" alt="" />

                  <div className="book-a-table p-5">
                    <h3>Book a Table</h3>
                    <p style={{ color: '#CE1212' }}>+1 5589 55488 55</p>
                  </div>
                </div>

                {/* Text Content */}
                <div className="col-lg-5" data-aos="fade-up" data-aos-delay="250">
                  <div className="content ps-0 ps-lg-5">
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <ul>
                      <li><i className="bi bi-check-circle-fill"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                      <li><i className="bi bi-check-circle-fill"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                      <li><i className="bi bi-check-circle-fill"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>

                    <div className="position-relative mt-4">

                      <img src="./assets/img/about-2.jpg" className="img-fluid" alt="" />
                      <a
                        href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                        className="glightbox pulsating-play-btn"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Us Section */}
          <section id="why-us" className="why-us">
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                  <div className="why-box p-3">
                    <h3>Why Choose Yummy</h3>
                    <p style={{ color: '#FFFFFF' }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                    </p>
                    <div className="text-center h-20 p-3">
                      <span className='why-box-span'>
                        Learn More
                      </span>{' '}
                      <i className="bi bi-chevron-right"></i>
                    </div>
                  </div>
                </div>

                {/* Info Cards */}
                <div className="col-lg-8 d-flex align-items-stretch">
                  <div className="row gy-4" data-aos="fade-up" data-aos-delay="200">
                    <div className="col-xl-4">
                      <div
                        className="icon-box d-flex flex-column justify-content-center align-items-center"
                        style={{ backgroundColor: '#ffffff', paddingBottom: '80px', paddingLeft: '6px' }}
                      >
                        <i className="bi bi-clipboard-data"></i>
                        <h4 style={{ color: '#CE1212' }}>Corporis voluptates officia eiusmod</h4>
                        <p style={{ color: '#797979' }}>
                          Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip
                        </p>
                      </div>
                    </div>

                    <div className="col-xl-4" data-aos="fade-up" data-aos-delay="300">
                      <div
                        className="icon-box d-flex flex-column justify-content-center align-items-center"
                        style={{ backgroundColor: '#ffffff', paddingBottom: '80px', paddingLeft: '6px' }}
                      >
                        <i className="bi bi-gem"></i>
                        <h4 style={{ color: '#CE1212' }}>Ullamco laboris ladore lore pan</h4>
                        <p style={{ color: '#797979' }}>
                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        </p>
                      </div>
                    </div>

                    <div className="col-xl-4" data-aos="fade-up" data-aos-delay="400">
                      <div
                        className="icon-box d-flex flex-column justify-content-center align-items-center p-3"
                        style={{ backgroundColor: '#ffffff' }}
                      >
                        <i className="bi bi-inboxes"></i>
                        <h4 style={{ color: '#CE1212' }}>Labore consequatur incidid dolore</h4>
                        <p style={{ color: '#676767' }}>
                          Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* <Stats/> */}
    </div>

   
  );
};

 

export default About;
