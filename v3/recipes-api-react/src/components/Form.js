import React from 'react';


const Form = (props) => (
    <form onSubmit={props.getRecipe}>
        <input type="text" name="recipeName" placeholder="e.g. chicken tikka"/>
        <button type="submit" value="Search">Search</button>
    </form>
)

export default Form;