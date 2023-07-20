import React from 'react';

  const showAdoptions = () => {
    // Lógica para mostrar las adopciones
  };

  const downloadAdoptions = () => {
    // Lógica para descargar los registros de adopciones
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para manejar el envío del formulario
  };

const Secciones = ({ activeSection }) => {
  return (
    <div>
      <section id="home" className={`section ${activeSection === 'home' ? 'active' : ''}`}>
        <h2>Bienvenidos al sitio web de la raza de perro Dachshund</h2>
          <p>En este sitio encontrarás toda la información que necesitas sobre la raza 
          de perro Dachshund, también conocido como perro salchicha."</p>
            <div className="grid-container">
                <div className="grid-item_3">
                <img src="https://media.istockphoto.com/id/1142683691/es/vector/linda-salchicha-dachshund-perro-de-dibujos-animados-vector-ilustraci%C3%B3n-aislada-en-blanco.jpg?s=1024x1024&w=is&k=20&c=_30qyjFQOec_x4udquyTOzC5oOrG2ATNyE0WcsM24lA=" alt="Home_1" />
                </div>

                <div className="grid-item_3">
                <img src="https://media.istockphoto.com/id/166054743/es/vector/de-perro-dachshund-nacionales-para-mascotas.jpg?s=1024x1024&w=is&k=20&c=XEap9e0A316t_bNlpDvQ1kLcFzrmgQ0cppCfhBRYqsY=" alt="Home_2" />
                </div>
            </div>
      </section>

      <section id="quienes-somos" className={`section ${activeSection === 'quienes-somos' ? 'active' : ''}`}>
        <div className="grid-item_1">
          <h2>¿Quiénes Somos?</h2>
          <p>Somos un grupo de amantes de los perros salchicha que decidimos compartir nuestra pasión con el mundo.
          <br /><br />
          Nos encanta compartir información sobre esta raza y ayudar a los dueños de Dachshund a cuidar adecuadamente a sus mascotas.
          <br /><br />
          En nuestro sitio web, encontrarás información sobre la historia de la raza, los cuidados necesarios para mantener a tu perro sano y feliz, y mucho más.
          </p>
          <br />
        </div>

        <div className="grid-item_1">
          <img src="https://scontent.fscl17-1.fna.fbcdn.net/v/t39.30808-6/249107675_10226311673600317_3419109721667169780_n.jpg?_nc_cat=103&cb=99be929b-3346023f&ccb=1-7&_nc_sid=a83260&_nc_eui2=AeFPhMRaqklwAxLEs8zkMdWW3PouAqMIkovc-i4CowiSixkydnqHlJ5oYgDhIxwpmgI&_nc_ohc=_qLGAbywrkgAX-7_8kH&_nc_ht=scontent.fscl17-1.fna&oh=00_AfBa5ZsgFcktsQBQ41rx0172IS5RRDshCwFUFmxU2CCCeQ&oe=64B53AED" alt="Quienes Somos" />
        </div>
      </section>

      <section id="historia" className={`section ${activeSection === 'historia' ? 'active' : ''}`}>
        <div class="grid-item_2">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTclh4UmnLTz0xwBl3X40-fom-EhJTDgwC0JA&usqp=CAU" alt="historia_1"></img><br></br>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSikjx5KpPljaum09_I5UiytyWpJoAYCe5HhRtUJSFo&s" alt="historia_2"></img>
        </div>
        
        <div class="grid-item_2">
          <h2>Todo sobre el carismático Dachshund</h2>
          <p>El Dachshund, también conocido como Teckel, es una raza de perro originaria de Alemania se crio para cazar conejos,
          ratones y tejones. Son de tamaño pequeño a mediano, con una apariencia distintiva que se caracteriza por su cuerpo
          alargado y patas cortas, esto se debe a que sufren de un trastorno genético que afecta el crecimiento de los huesos.
          Este trastorno se llama acondroplasia parcial y es una causa común de enanismo. Existen tres variedades de pelaje:
          liso, largo y duro, y vienen en una variedad de colores y tamaños. Son una raza popular debido a su naturaleza
          cariñosa y leal, y su capacidad para adaptarse a diferentes estilos de vida. Son perros inteligentes y entrenables,
          pero también pueden ser obstinados y tercos en ocasiones. Se sabe que son buenos con los niños y hacen buenos
          compañeros de hogar. Sin embargo, también son propensos a ciertos problemas de salud debido a su estructura física,
          como problemas de espalda y oculares. Por lo tanto, es importante que sus propietarios se aseguren de proporcionarles
          la atención médica adecuada y eviten ciertas actividades que puedan poner en riesgo su salud.</p>
        </div>

        <div class="grid-item_2">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyXTIpJQo-xE1_3kAs9YtN0eQOfmKLGKEKLq_lULsHA19wlxyEBr9c67gEAyIM0qdFEhw&usqp=CAU" alt="historia_3"></img><br></br>
        </div>
       </section>

      <section id="contacto" className={`section ${activeSection === 'contacto' ? 'active' : ''}`}>
        <h2>Formulario de adopción y/o acogida de Dachshund</h2>
      <p>
        Si tienes alguna pregunta o comentario sobre nuestro sitio web o sobre los perros salchicha
        en general, no dudes en contactarnos. Puedes enviarnos un correo electrónico o completar el 
        formulario de contacto a continuación, también si deseas adoptar o acoger a un Dachshund.
      </p>

        <form id="adoption-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Teléfono:</label>
            <input type="tel" id="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="birthdate">Fecha de nacimiento:</label>
            <input type="date" id="birthdate" required />
          </div>
          <div className="form-group">
            <label htmlFor="inquiry">Pregunta o comentario:</label>
            <textarea id="inquiry" rows="2"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="availability">Disponibilidad de tiempo:</label>
            <select id="availability" required>
              <option value="" disabled selected>Selecciona una opción</option>
              <option value="Tiempo completo">Tiempo completo</option>
              <option value="Medio tiempo">Medio tiempo</option>
              <option value="Fines de semana">Fines de semana</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="terms">Acepto los términos y condiciones:</label>
            <input type="checkbox" id="terms" required />
          </div>
          <div className="form-group">
            <input type="submit" value="Enviar" />
            <input type="button" value="Consultar" onClick={showAdoptions} />
            <input type="button" id="download-button" value="Descargar registros" onClick={downloadAdoptions} />
          </div>
        </form>

      <hr />

      <h2>Registros del Formulario:</h2>
        <table id="adoption-table" border="1">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo electrónico</th>
              <th>Teléfono</th>
              <th>Fecha de nacimiento</th>
              <th>Pregunta o comentario</th>
              <th>Disponibilidad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </section>

      <section id="otras" className={`section ${activeSection === 'otras' ? 'active' : ''}`}>
        <h2>Curiosidades</h2>
        <p>En esta sección encontraras las principales características de la raza, también puedes agregar
        cualquier información adicional que quieras incluir en tu sitio web sobre la raza de perro Dachshund.</p>
        
        <table>
          <thead>
            <tr>
              <th>Aspecto</th>
              <th>Características de la raza</th>
            </tr>
          </thead>
            <tbody>
              <tr>
                <td>Altura</td>
                <td>Entre 15 y 25 centímetros</td>
              </tr>
              <tr>
                <td>Peso</td>
                <td>Entre 3 y 12 kilogramos</td>
              </tr>
              <tr>
                <td>Esperanza de vida</td>
                <td>Entre 12 y 16 años</td>
              </tr>
              <tr>
                <td>Pelaje</td>
                <td>Denso y suave, puede ser corto, largo o duro y viene en varios colores como marrón, negro, gris, y crema</td>
              </tr>
              <tr>
                <td>Personalidad</td>
                <td>Son perros valientes, inteligentes y leales a sus dueños. Les encanta estar en compañía y son muy cariñosos.</td>
              </tr>
              <tr>
                <td>Salud</td>
                <td>Propensos a problemas de espalda debido a su estructura ósea larga y baja al suelo</td>
              </tr>
              <tr>
                <td>Tamaño</td>
                <td>Pequeño a mediano (3 variedades: estándar, miniatura y kaninchen)</td>
              </tr>
              <tr>
                <td>Cazadores</td>
                <td>Los Dachshunds fueron criados originalmente para cazar tejones y otros animales de madriguera.</td>
              </tr>
              <tr>
                <td>Personalidades únicas</td>
                <td>Cada Dachshund tiene su propia personalidad, lo que los hace únicos y especiales.</td>
              </tr>
              <tr>
                <td>Adaptabilidad</td>
                <td>A pesar de su tamaño pequeño, los Dachshunds son capaces de adaptarse a diferentes situaciones y estilos de vida.</td>
              </tr>
            </tbody>
          </table>
      </section>

      <section id="seccion-libre" className={`section ${activeSection === 'seccion-libre' ? 'active' : ''}`}>
        <div class="grid-item">
          <h2>Sección libre</h2>
          <p>Estas son las cinco "A"s de cuidados del Dachshund</p>
            <ul>
              <li>Amor</li>
              <li>Atención</li>
              <li>Aire libre</li>
              <li>Actividad Física</li>
              <li>Alimentación Sana</li>
            </ul>
            <img src="https://1.bp.blogspot.com/-TBQcCXUdd24/X29fXfELFEI/AAAAAAAAs_o/DduzesAJEZkxc4ZbKqwu5c7SWyKg1jBJQCLcBGAsYHQ/w1200-h630-p-k-no-nu/How_social_are_Dachshunds_5.webp" alt="perro salchicha_1"></img>
        </div>
        
        <div class="grid-item">
          <h3>¿Cómo los alimentamos?</h3>
          <p>Como todo animal, requiere de un alimento con las características nutricionales acorde 
          a su especie. Por lo tanto, debemos buscar alimentos con el aporte de proteínas necesarios. 
          Los Dachshund tienden a ser un tanto glotones, por ende, debemos ser estrictos con su ingesta
          diaria.
          </p>
          <img src="https://cdn-iphjd.nitrocdn.com/tYEzXOsWcOXmtTTvQEPwMXzmMRALYZDP/assets/images/optimized/rev-7817916/wp-content/uploads/2020/12/cachorro-teckel-arlequin.jpg" alt="perro salchicha_2"></img>
        </div>
        
        <div class="grid-item">
          <h3>¿Qué cuidados requiere?</h3>
          <p>Los Dachshund pueden llegar a ser muy longevos si les damos los cuidados pertinentes. 
          En primer lugar, debemos cuidar que nuestro perro esté en su peso ideal; una subida de 
          peso causa, entre otras dolencias, problemas con sus extremidades y columna. Es importante
          cuidar de que no salten de altura ni que sean expuestos a constantes ires y venires por 
          escaleras de peldaños muy altos.</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL-rDvjoHbPKuJXYY58GHD_-CcBsNrNVTWKg&usqp=CAU" alt="perro salchicha_3"></img>
        </div>
        
        
        <div class="grid-item">
          <h3>¿Cuántas variedades?</h3>
          <p>Hay tres variedades de Dachshund según el tamaño y el tipo de pelo. Dentro de las 
          variedades por tamaño, es importante recalcar que lo medimos es su circunferencia toráxica
          en la adultez. Así encontramos los Dachshund estándar, miniatura y los kaninchen. Según el
          tipo de pelo, encontramos pelo corto, pelo duro o "pelo de alambre" y pelo largo.</p>
            <ul>
              <li>Kaninchen (25-27 cms. de circunferencia toráxica)</li>
              <li>Miniatura (32-35 cms. de circunferencia toráxica)</li>
              <li>Estándar (más de 35 cms. de circunferencia toráxica)</li>
            </ul>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRadsnfxKc9Xu3DL9D__IgqJtseh1NxvyQrMA&usqp=CAU" alt="perro salchicha_4"></img>
          </div> 
      </section>   
    </div>
  );
};

export default Secciones;