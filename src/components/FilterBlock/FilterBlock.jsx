import { useState, useEffect } from 'react';
function FilterBlock() {
  const checkboxLabels = ['Coments', 'Linkes', 'Reviews', 'Metions', 'Puchases', 'Menssages'];

  const [checkboxes, setCheckboxes] = useState(Array(checkboxLabels.length).fill(false));

  const handleCheckboxChange = (index) => {
    setCheckboxes((prevCheckboxes) => {
      const newCheckboxes = [...prevCheckboxes];
      newCheckboxes[index] = !newCheckboxes[index];
      return newCheckboxes;
    });
  };

  const handleButtonClick = (buttonType) => {
    // Lógica para manejar los clics de los botones
    console.log(`Button ${buttonType} clicked`);
  };

  return (
    <div className="original-container-style bg-gray-900">
      <div className="p-4  border borde0 rounded-md">
        <div className="mb-4">
          <label className="block mb-2 text-white">Filter Options:</label>
          {checkboxLabels.map((label, index) => (
            <div key={index} className="flex items-center mb-2 justify-between">
              <span className="text-white mr-2">{label}</span>
              <input
                type="checkbox"
                checked={checkboxes[index]}
                onChange={() => handleCheckboxChange(index)}
                className="ml-auto bg-orange-500 " // Alinea a la mano derecha usando la clase ml-auto (margin-left: auto)
              />
            </div>
          ))}
        </div>


        <div className="flex justify-between">
          <button
            onClick={() => handleButtonClick('Button 1')}
            className="bg-white text-black px-4 py-2 mr-2 rounded-md hover:bg-blue-700"
          >
            Select All
          </button>
          <button
            onClick={() => handleButtonClick('Button 2')}
            className="bg-white text-black px-4 py-2 rounded-md hover:bg-green-700"
          >
            Unselect All
          </button>
        </div>
      </div>
    </div>

  );
}

export default FilterBlock