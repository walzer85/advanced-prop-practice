import React from "react";
import PropTypes from "prop-types";

// This is just a function that takes one parameter that should be an object
// How do I know props is an object?
// Normally because I said so, if i made the function, I decide what gets passed in
// But because this is React, it has to be an object
function Child(props) {
  /*
  let props = {
    name:"bob",
    age: 16,
    favoriteColor: "blue",
    address:{
      street: "101 main st"
      city:"Austin",
      zip: "78741"
      
    }

  }
   */
  let address = "";
  if (props.address) {
    address = props.address.street + props.address.city + props.address.zip;
  }

  return (
    <div>
      <h1>Child</h1>
      <h3>{props.name}</h3>
      <h3>{props.age}</h3>
      <h3>
        {address}
      </h3>
    </div>
  );
}


export default Child;

