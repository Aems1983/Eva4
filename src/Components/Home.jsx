import React from 'react';

const HomeSection = () => {
  return (
    <section id="home">
      <h2>Bienvenidos al sitio web de la raza de perro Dachshund</h2>
      <p>En este sitio encontrarás toda la información que necesitas sobre la 
        raza de perro Dachshund, también conocido como perro "salchicha".</p>
      <div className="grid-container">
        <div className="grid-item_3">
          <img src="https://media.istockphoto.com/id/1142683691/es/vector/linda-salchicha-dachshund-perro-de-dibujos-animados-vector-ilustraci%C3%B3n-aislada-en-blanco.jpg?s=1024x1024&w=is&k=20&c=_30qyjFQOec_x4udquyTOzC5oOrG2ATNyE0WcsM24lA=" alt="Home_1" />
        </div>
        <div className="grid-item_3">
          <img src="https://media.istockphoto.com/id/166054743/es/vector/de-perro-dachshund-nacionales-para-mascotas.jpg?s=1024x1024&w=is&k=20&c=XEap9e0A316t_bNlpDvQ1kLcFzrmgQ0cppCfhBRYqsY=" alt="Home_2" />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;