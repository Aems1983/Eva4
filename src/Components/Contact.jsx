import React, { useState, useEffect } from 'react';

const ContactoSection = () => {
  const [records, setRecords] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    birthdate: '',
    inquiry: '',
    availability: '',
    terms: false
  });
  const [showRecords, setShowRecords] = useState(false);
  const [selectedRecordIndex, setSelectedRecordIndex] = useState(-1);

  useEffect(() => {
    // Cargar registros desde el Local Storage al iniciar
    const storedRecords = JSON.parse(localStorage.getItem('adoptionRecords'));
    if (storedRecords) {
      setRecords(storedRecords);
    }
  }, []);

  useEffect(() => {
    // Actualizar Local Storage cuando cambian los registros
    localStorage.setItem('adoptionRecords', JSON.stringify(records));
  }, [records]);

  const showAdoptions = () => {
    setShowRecords(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar formulario
    if (!validateText(formData.name) || !validateEmail(formData.email) || !validatePhone(formData.phone) || !formData.birthdate || !formData.availability || !formData.terms) {
      alert('Por favor, completa todos los campos correctamente.');
      return;
    }

    if (selectedRecordIndex !== -1) {
      // Actualizar registro existente
      const updatedRecords = [...records];
      updatedRecords[selectedRecordIndex] = formData;
      setRecords(updatedRecords);

      // Limpiar formulario y estado de selección
      setFormData({
        name: '',
        email: '',
        phone: '',
        birthdate: '',
        inquiry: '',
        availability: '',
        terms: false
      });
      setSelectedRecordIndex(-1);

      // Mostrar mensaje de actualización exitosa en una ventana emergente
      alert('¡Los datos se han actualizado exitosamente!');
    } else {
      // Crear nuevo registro
      const newRecord = { ...formData };
      setRecords([...records, newRecord]);

      // Limpiar formulario
      setFormData({
        name: '',
        email: '',
        phone: '',
        birthdate: '',
        inquiry: '',
        availability: '',
        terms: false
      });

      // Mostrar mensaje de ingreso exitoso en una ventana emergente
      alert('¡Los datos se han ingresado exitosamente!');
    }
  };

  const handleEdit = (index) => {
    // Cargar datos del registro seleccionado en el formulario para su edición
    const selectedRecord = records[index];
    setFormData(selectedRecord);
    setSelectedRecordIndex(index);
  };

  const handleDelete = (index) => {
    // Eliminar registro por índice
    const updatedRecords = [...records];
    updatedRecords.splice(index, 1);
    setRecords(updatedRecords);
  };

  /**
   * Función para validar el campo de texto.
   * @param {string} value - Valor del campo de texto.
   * @returns {boolean} - Indica si el campo de texto es válido.
   */
  const validateText = (value) => {
    if (value.trim() === '') {
      showError('name', 'El campo Nombre es obligatorio.');
      return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(value.trim())) {
      showError('name', 'Ingrese solo letras en el campo Nombre.');
      return false;
    }
    return true;
  };

  /**
   * Función para validar el campo de correo electrónico.
   * @param {string} value - Valor del campo de correo electrónico.
   * @returns {boolean} - Indica si el campo de correo electrónico es válido.
   */
  const validateEmail = (value) => {
    if (value.trim() === '') {
      showError('email', 'El campo Correo electrónico es obligatorio.');
      return false;
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value.trim())) {
      showError('email', 'Ingrese una dirección de correo electrónico válida.');
      return false;
    }
    return true;
  };

  /**
   * Función para validar el campo de número de teléfono.
   * @param {string} value - Valor del campo de número de teléfono.
   * @returns {boolean} - Indica si el campo de número de teléfono es válido.
   */
  const validatePhone = (value) => {
    if (value.trim() === '') {
      showError('phone', 'El campo Teléfono es obligatorio.');
      return false;
    }
    if (isNaN(value) || value.length !== 9 || value < 0) {
      showError('phone', 'Ingrese un valor numérico válido y no negativo de 9 dígitos en el campo Teléfono.');
      return false;
    }
    return true;
  };

  /**
   * Muestra un mensaje de error y resalta el campo de entrada correspondiente.
   * @param {string} inputId - ID del campo de entrada.
   * @param {string} message - Mensaje de error.
   */
  const showError = (inputId, message) => {
    const input = document.getElementById(inputId);
    input.classList.add('error');
    alert(message);
  };

  return (
    <section id="contacto" className="hidden">
      <h2>Formulario de adopción y/o acogida de Dachshund</h2>
      <p>
        Si tienes alguna pregunta o comentario sobre nuestro sitio web o sobre los perros salchicha
        en general, no dudes en contactarnos. Puedes enviarnos un correo electrónico o completar el 
        formulario de contacto a continuación, también si deseas adoptar o acoger a un Dachshund.
      </p>

      <form id="adoption-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Teléfono:</label>
          <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="birthdate">Fecha de nacimiento:</label>
          <input type="date" id="birthdate" name="birthdate" required value={formData.birthdate} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="inquiry">Pregunta o comentario:</label>
          <textarea id="inquiry" name="inquiry" rows="2" value={formData.inquiry} onChange={handleInputChange}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="availability">Disponibilidad de tiempo:</label>
          <select id="availability" name="availability" required value={formData.availability} onChange={handleInputChange}>
            <option value="" disabled>Selecciona una opción</option>
            <option value="Tiempo completo">Tiempo completo</option>
            <option value="Medio tiempo">Medio tiempo</option>
            <option value="Fines de semana">Fines de semana</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="terms">Acepto los términos y condiciones:</label>
          <input type="checkbox" id="terms" name="terms" required checked={formData.terms} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <input type="submit" value={selectedRecordIndex !== -1 ? 'Actualizar' : 'Ingresar'} />
          <input type="button" value="Consultar" onClick={showAdoptions} />
        </div>
      </form>

      {showRecords && (
        <>
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
              {records.map((record, index) => (
                <tr key={index}>
                  <td>{record.name}</td>
                  <td>{record.email}</td>
                  <td>{record.phone}</td>
                  <td>{record.birthdate}</td>
                  <td>{record.inquiry}</td>
                  <td>{record.availability}</td>
                  <td>
                    <button onClick={() => handleEdit(index)}>Editar</button>
                    <button onClick={() => handleDelete(index)}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </section>
  );
};

export default ContactoSection;