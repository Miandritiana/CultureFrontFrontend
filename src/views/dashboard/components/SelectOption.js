import React, { useState } from 'react';

const SelectOption = ({ options, onSelect }) => {

  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    onSelect(selectedValue); // Call the onSelect function with the selected value
  };

  return (
    <select
      value={selectedOption}
      onChange={handleChange}
      style={{
        borderRadius: "3px",
        padding: "17px",
        borderColor: "#b6b6b6",
        '&::placeholder': {
            color: '#c5ea3f', 
            opacity: '0.8',
        },
    }}>
      {options.map(option => (
        <option key={option.idCategorieCulture} value={option.idCategorieCulture}>{option.nomCateCult}</option>
      ))}
    </select>
  );
};

export default SelectOption;
