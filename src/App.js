import React from "react";
import "./App.css";
import PropTypes from "prop-types";
import SuperComponent from "./components/SuperComponent";

/* eslint-disable no-unused-vars, no-console */
function App(props) {
  const product = {
    name: "ajax",
    description: "Cleans your bathroom real good"
  };
  const names = ["Bob", "Stand", "Todd", "Ted"];
  return (
    <div>
      {/* send in a prop called "message", give it the string "Hello World" */}
      <div>This better say "Hello World": <SuperComponent /> </div>


      {/* send in a prop called "magicNumber", give it the number 42*/}
      <div>This better say 42: <SuperComponent /> </div>


      {/* send in a prop called "product", give it the varible product*/}
      <div>This better say "ajax": <SuperComponent /> </div>


      {/* send in a prop called "product", give it the varible product*/}
      <div>This better say "Bob, Stand, Todd, Ted" : <SuperComponent /> </div>


      {/* send in a prop called "products", give it the products array from props*/}
      <div>This better say "Hand Sanitizer": <SuperComponent /> </div>

    </div>
  );
}
App.propTypes = {
  products: PropTypes.array.isRequired
};
export default App;
