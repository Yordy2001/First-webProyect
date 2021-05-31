import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inpuvalue, setInputValue] = useState('');

    const handleImputchanche = (e) => {
        setInputValue(e.target.value)
    }

    const handleAdd = (e) => {
        e.preventDefault();

        if (inpuvalue.trim().length > 2) {
            setCategories(cat => [...cat, inpuvalue]);
            setInputValue('');
        }
    }

    return (

        <form onSubmit={handleAdd}>
            <h1> {inpuvalue} </h1>
            <input
                type='text'
                value={inpuvalue}
                onChange={handleImputchanche}
            />
        </form>

    )

}

AddCategory.prototype = {
    // setImpuValue: PropTypes.array.isRequired,
    setCategories: PropTypes.func.isRequired
}