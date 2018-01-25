import React from "react";
import "./App.css";
import PropTypes from "prop-types";
import SuperComponent from "./components/SuperComponent";
import Parent from "./components/Parent";

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
      <div>This better say "Hello World": <SuperComponent message={"Hello World"} /> </div>
      {/* send in a prop called "message", give it the string "Goodbye World" */}
      <div>This better say "Goodbye World": <SuperComponent /> </div>
      {/* send in a prop called "message", give it the string "Props are awesome" */}
      <div>This better say "Props are awesome": <SuperComponent /> </div>
      {/* send in a prop called "message", give it the string "I totally get this now" */}
      <div>This better say "I totally get this now": <SuperComponent /> </div>


      {/* send in a prop called "magicNumber", give it the number 42*/}
      <div>This better say 42: <SuperComponent /> </div>
      {/* send in a prop called "magicNumber", give it the number 21*/}
      <div>This better say 21: <SuperComponent /> </div>


      {/* send in a prop called "product", give it the variable product*/}
      <div>This better say "ajax": <SuperComponent /> </div>
      {/* send in a prop called "product", give it an object with a key of "name" and a value "pepsi"*/}
      <div>This better say "pepsi": <SuperComponent /> </div>
      {/* send in a prop called "product", give it an object with a key of "name" and a value "nike"*/}
      <div>This better say "nike": <SuperComponent /> </div>


      {/* send in a prop called "names", with the value of the variable names*/}
      <div>This better say "Bob, Stand, Todd, Ted" : <SuperComponent /> </div>
      {/* send in a prop called "names", give it an array ["Brodie","Alicia","Margo"]*/}
      <div>This better say "Brodie, Alicia, Margo" : <SuperComponent /> </div>
      {/* send in a prop called "names", give it an array ["Titus","Axel","Claire"]*/}
      <div>This better say "Titus, Axel, Claire" : <SuperComponent /> </div>

      {/* Use App's props*/}
      {/* send in a prop called "products", give it the products array from App's props*/}
      <div>This better say "Hand Sanitizer": <SuperComponent /> </div>
      {/* send in a prop called "names", give it the names array from App's props*/}
      <div>This better say "Robin, Lily, Barney": <SuperComponent /> </div>
      {/* send in a prop called "magicNumber", give it the magicNumber from App's props*/}
      <div>This better say "99": <SuperComponent /> </div>
      {/* send in a prop called "message", give it the contact.firstName from App's props*/}
      <div>This better say "Luke": <SuperComponent /> </div>
      {/* send in a prop called "message", give it the contact.lastName from App's props*/}
      <div>This better say "Skywalker": <SuperComponent /> </div>
      {/* send in a prop called "message", give it the contact.occupation from App's props*/}
      <div>This better say "farmer": <SuperComponent /> </div>
      {/* send in a prop called "message", give it the contact.address from App's props*/}
      <div>This better say "300 MiddleOfNoWhere st Tatooine": <SuperComponent /> </div>
      <Parent />
    </div>
  );
}
App.propTypes = {
  products: PropTypes.array.isRequired,
  names: PropTypes.array.isRequired,
  magicNumber: PropTypes.number.isRequired,
  contact: PropTypes.object.isRequired
};
export default App;
