import React from "react";
import chefsData from "../data/chefData";

const Chefs = () => {
  return (
    <section id="chefs" className="chefs section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Chefs</h2>
        <p>
          <span>Our</span>{" "}
          <span className="description-title">Professional Chefs</span>
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {chefsData.map((chef, index) => (
            <div
              className="col-lg-4 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
              key={chef.id}
            >
              <div className="team-member">
                <div className="member-img">
                  <img src={chef.image} className="img-fluid" alt={chef.name} />
                  <div className="social">
                    <a href={chef.socials.twitter}>
                      <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href={chef.socials.facebook}>
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href={chef.socials.instagram}>
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href={chef.socials.linkedin}>
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>{chef.name}</h4>
                  <span>{chef.title}</span>
                  <p>{chef.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chefs;
