import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
// import React, { Component } from 'react';


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball', 'One Punch', 'Naruto'])

    // const handleAdd = () => {
    //     setCategories([...categories, 'asdasd']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr></hr>

            {/* <button onClick={handleAdd}> Add Categories </button> */}
            <ol>
                {
                    categories.map((data, index) => {
                        return <li key={index}>{data}</li>
                    })
                }
            </ol>
        </>

    )
}


export default GifExpertApp