import React, { useEffect, useState } from "react";

const DogAPIExample = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Obtener la lista de razas de perros al cargar el componente
    const fetchBreeds = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        const breedList = Object.keys(data.message);
        setBreeds(breedList);
        setIsLoading(false);
      } catch (error) {
        console.error("Error al obtener las razas de perros:", error);
        setIsLoading(false);
      }
    };
 
    fetchBreeds();
  }, []);

  const handleBreedSelect = async (e) => {
    // Manejar la selección de una raza de perro en el dropdown
    const breedId = e.target.value;
    setSelectedBreed(breedId);

    if (breedId) {
      try {
        const response = await fetch(
          `https://dog.ceo/api/breed/${breedId}/images/random`
        );
        const data = await response.json();
        setImage(data.message);
      } catch (error) {
        console.error("Error al obtener la imagen de la raza:", error);
      }
    } else {
      setImage("");
    }
  };

  return (
    <div>
      <h2>Razas de Perros</h2>
      {isLoading ? (
        // Mostrar mensaje de carga mientras se obtienen las razas de perros
        <p>Cargando razas de perros...</p>
      ) : (
        <div>
          {/* Dropdown para seleccionar una raza de perro */}
          <select value={selectedBreed} onChange={handleBreedSelect}>
            <option value="">Selecciona una raza</option>
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
          {/* Mostrar la imagen de la raza seleccionada */}
          {selectedBreed && image && (
            <div>
              <h3>Imagen de la raza:</h3>
              <img src={image} alt="Perro" width="450" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const OtrasSection = () => {
  return (
    <section id="otras" className="Section">
      {/* Renderizar el componente DogAPIExample dentro de la sección Otras */}
      <DogAPIExample />
    </section>
  );
};

export default OtrasSection;