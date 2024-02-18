import React from "react";
import ReactDOM from "react-dom/client";

//JSX

const heading = (
<h1 id="title" key="h2">
  Namaste React
 </h1>
 );

 // React Component
 // Functional - NEW

 //Name of component start with capital letter - is it a good practise
 const HeaderComponent = () =>{
  return(
    <>
    {heading}
      <h1>Namaste React Functional Component</h1>
    <h2> This is a h2 tag</h2>
    </>
  );
 }




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);