import React from 'react';

const CuriosidadesSection = () => {
  return (
    <section id="curiosidades" className="hidden">
      <h2>Curiosidades</h2>
      <p>
        En esta sección encontrarás las principales características de la raza, también puedes agregar cualquier 
        información adicional que quieras incluir en tu sitio web sobre la raza de perro Dachshund.
      </p>
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
  );
};

export default CuriosidadesSection;