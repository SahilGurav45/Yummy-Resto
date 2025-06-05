import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import testimonialsData from "../data/testimonialsData";
import "swiper/css";
import "swiper/css/pagination";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>TESTIMONIALS</h2>
        <p>
          What Are They <span className="description-title">Saying About Us</span>
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView={"auto"}
          className="init-swiper"
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-item">
                <div className="row gy-4 justify-content-center">
                  <div className="col-lg-6">
                    <div className="testimonial-content">
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>{testimonial.content}</span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                      <h3>{testimonial.name}</h3>
                      <h4>{testimonial.title}</h4>
                      <div className="stars">
                        {[...Array(5)].map((_, index) => (
                          <i className="bi bi-star-fill" key={index}></i>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 text-center">
                    <img
                      src={testimonial.image}
                      className="img-fluid testimonial-img"
                      alt={testimonial.name}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
