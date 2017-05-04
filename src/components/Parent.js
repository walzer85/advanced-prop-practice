import React from "react";
import PropTypes from "prop-types";
import Child from "./Child";

function Parent(props) {

  return (
    <div>
      {/* 
        Child is just a function as you can obviously see from the code of Child.js
        We should understand how functions work else we are in big trouble
        How many times can you call a function?
        What can you send into functions as arguments?
        How do you call a function?
        How do you pass arguments into a functoin?
        Using a component in JSX is the same as calling the function 
      */}

      <Child name={"Bob"} />
      {/* 
        React converts the above into:
        
        var props = {name:"Bob"};
        Child(props)  
      */}
      


      {/* 
        var props = {age:33};
        Child(props)  
      */}
      <Child age={33} />

      {/* 
        var props = {
          address:{
            street:"325 aca rd.",
            city: "Austin",
            zip: "78701"
          }
          };
        Child(props)  
      */}
      <Child address={{
        street: "325 aca rd.",
        city: "Austin",
        zip: "78701"
      }} />





    </div>
  );
}


export default Parent;
