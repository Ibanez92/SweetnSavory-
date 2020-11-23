import React,{useState,useEffect} from "react";

import Header from "../../components/Header";
import Cards from "../../components/Cards";

import "./style.css"

function Explore() {
    const [cupcakes, setCupcakes] = useState([])
  

  // Load all cupcakes and store them with setCupcakes
  // useEffect(() => {
  //   loadCupcakes()
  // }, [])

  // Loads all cupcakes and sets them to cupcakes
  // function loadCupcakes() {
  //   API.getCupcakes()
  //     .then(res =>
  //       setCupcakes(res.data)
  //     )
  //     .catch(err => console.log(err));
  // };

  // Deletes a cupcake from the database with a given id, then reloads books from the db
  // function deleteCupcakes(id) {
  //   API.deleteCupcakes(id)
  //     .then(res => loadCupcakes())
  //     .catch(err => console.log(err));
  // }

  // Handles updating component state when the user types into the input field
  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setFormObject({...formObject, [name]: value})
  // };

  // When the form is submitted, use the API.saveBook method to save the Cupcake data
  // Then reload books from the database
  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //   if (formObject.title && formObject.author) {
  //     API.saveCupcakes({
  //       imagePath: formObject.imagePath,
  //       title: formObject.title,
  //       description: formObject.description,
  //       price: formObject.price
  //     })
  //       .then(res => loadCupcakes())
  //       .catch(err => console.log(err));
  //   }
  // };

  return (
    <div>
      <Header>
       
      </Header>
      <Cards />
    </div>
  );
}

export default Explore;
