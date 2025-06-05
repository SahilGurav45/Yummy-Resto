import React, { useEffect } from "react";
import statsData from "../data/statsData";

const Stats = () => {
  useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/purecounterjs@1.5.0/dist/purecounter_vanilla.js";
  script.async = true;

  script.onload = () => {
    setTimeout(() => {
      if (window.PureCounter) {
        new window.PureCounter();
      } else {
        console.error("PureCounter not loaded");
      }
    }, 500); // delay to ensure DOM is ready
  };

  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  };
}, []);


  return (
    <section id="stats" className="stats section dark-background">
      {/* <img src="assets/img/stats-bg.jpg" alt="" data-aos="fade-in" /> */}
      <img src="https://via.placeholder.com/300x200" alt="temp" />
      <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {statsData.map((stat) => (
            <div className="col-lg-3 col-md-6" key={stat.id}>
              <div className="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end={stat.end}
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
