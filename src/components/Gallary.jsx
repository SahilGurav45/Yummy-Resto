import React from "react";

const images = [
  "/assets/img/gallery/gallery-1.jpg",
  "/assets/img/gallery/gallery-2.jpg",
  "/assets/img/gallery/gallery-3.jpg",
  "/assets/img/gallery/gallery-4.jpg",
  "/assets/img/gallery/gallery-5.jpg",
  "/assets/img/gallery/gallery-6.jpg",
  "/assets/img/gallery/gallery-7.jpg",
  "/assets/img/gallery/gallery-8.jpg",
];

const Gallery = () => {
  const galleryGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "16px",
  };

  const imgStyle = {
    width: "100%",
    borderRadius: "8px",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  };

  return (
    <section id="gallery" className="gallery section light-background" data-aos="fade-up">
      <div className="container section-title">
        <h2>Gallery</h2>
        <p>
          <span>Check</span> <span className="description-title">Our Gallery</span>
        </p>
      </div>

      <div style={galleryGridStyle}>
        {images.map((img, idx) => (
          <div key={idx} className="gallery-item">
            <img
              src={img}
              alt={`Gallery Image ${idx + 1}`}
              style={imgStyle}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
