import React from 'react'

const Footer = () => {
  return (
    <div>
      

      {/* <div className='p-4 bg-dark text-center text-light w-100' style={{ position: 'fixed', bottom: '0' }}>
                <h2>Footer Section</h2>
                </div> */}


                
      <footer id="footer" className="footer dark-background">

<div className="container">
<div className="row gy-3">
    <div className="col-lg-3 col-md-6 d-flex">
      <i className="bi bi-geo-alt icon"></i>
      <div className="address">
        <h4>Address</h4>
        <p>A108 Adam Street</p>
        <p>New York, NY 535022</p>
        <p></p>
      </div>

    </div>

    <div className="col-lg-3 col-md-6 d-flex">
      <i className="bi bi-telephone icon"></i>
      <div>
        <h4>Contact</h4>
        <p>
          <strong>Phone:</strong> <span>+1 5589 55488 55</span><br/>
          <strong>Email:</strong> <span>info@example.com</span><br/>
        </p>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 d-flex">
      <i className="bi bi-clock icon"></i>
      <div>
        <h4>Opening Hours</h4>
        <p>
          <strong>Mon-Sat:</strong> <span>11AM - 23PM</span><br/>
          <strong>Sunday</strong>: <span>Closed</span>
        </p>
      </div>
    </div>

    <div className="col-lg-3 col-md-6">
      <h4>Follow Us</h4>
      <div className="social-links d-flex">
        <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
      </div>
    </div>

  </div>
</div>



<div className="whatsapp_box" style={{height:'43px',width:'50px',backgroundColor:'green',position:'fixed',right:'13px',bottom:'70px',borderRadius:'50%'}}>
        <a href="https://wa.link/tjffch"> <i className="bi bi-whatsapp"></i></a>

      </div>


     

</footer>





    </div>
  )
}

export default Footer
