import React, { useState } from "react";
import menuItems from "../data/menuData";
import 'bootstrap/dist/css/bootstrap.min.css';
import Testimonials from "./Testimonials";

const MenuComponent = () => {
  const [category, setCategory] = useState("breakfast");

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div className="container my-4">
        <div className="container section-title  justify-content-center display-flex !important" data-aos="fade-up" >
          <p  style={{display:'flex', justifyContent:'center', fontSize:'40px'}}><span>Check Our</span> <span style={{color:'#CE1212'}} className="description-title">Yummy Menu</span></p>
        </div>
      
      <div className="d-flex justify-content-center mb-4">
        {["starter","breakfast", "lunch", "dinner"].map((cat) => (
          <button
            key={cat}
            style={{fontSize:'18px'}}
            // className={`btn mx-2 ${category === cat ? "btn-primary" : "btn-outline-primary"}`}
             className={`btn mx-2 fw-bold ${category === cat ? "btn-danger" : "btn"}`}
            onClick={() => handleCategoryChange(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="row">
        {menuItems[category].map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card h-100">
              <img src={item.image} className="card-img-top" alt={item.name}/>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Testimonials/>
    </div>
  );
};

export default MenuComponent;
