import { useState } from 'react';

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

  const handleSelectAll = () => {
    setCheckboxes(Array(checkboxLabels.length).fill(true));
  };

  const handleUnselectAll = () => {
    setCheckboxes(Array(checkboxLabels.length).fill(false));
  };

  return (
    <div className='mt-[2rem]  mb-[1rem]'>
      <div className="original-container-style bg-[#2c2c2c] rounded-xl">
        <div className="p-4   ">
          <div className="mb-4">
            <label className="block mb-8 text-white">Filter Options:</label>
            {checkboxLabels.map((label, index) => (
              <div key={index} className="flex items-center mb-2 justify-between">
                <span className="text-white mr-2 mb-2">{label}</span>
                <label
                  className="relative flex cursor-pointer items-center rounded-full "
                  data-ripple-dark="true"
                >
                  <input
                    type="checkbox"
                    checked={checkboxes[index]}
                    onChange={() => handleCheckboxChange(index)}
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-amber-500 checked:bg-amber-500 checked:before:bg-amber-500 "
                  />
                  <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-black opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </label>
              </div>
            ))}
          </div>

          <div className="flex justify-between">
            <button
              onClick={handleSelectAll}
              className="bg-white text-black px-4 py-2 mr-2 rounded-full hover:bg-gray-300"
            >
              Select All
            </button>
            <button
              onClick={handleUnselectAll}
              className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-300"
            >
              Unselect All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterBlock;
