import React from 'react';

const SelectOption = () => {

    return (
        <select style={{
            borderRadius: "3px",
            padding: "17px",
            borderColor: "#b6b6b6",
            '&::placeholder': {
                color: '#c5ea3f', 
                opacity: '0.8',
            },
        }}>
            <option></option>
        </select>
    );

};

export default SelectOption;