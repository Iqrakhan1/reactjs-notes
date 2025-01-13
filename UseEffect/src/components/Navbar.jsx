import react, { useEffect, useState } from "react";

function Navbar(props) {
  const [count, setCount] = useState(0);
  //use effect run wehn component was changed or state was changed

  //case 1: it will be renderd on every render
  //   useEffect(() => {
  //     alert("i will run on every render! ");
  //   });

  //case 2: it will be rund only when component mount /lode

  //   useEffect(() => {
  //     alert("page loded");
  //   }, []);

  //case 3: it will be run only when specific state change
  //example
  //   useEffect(() => {
  //     alert(`I will run only when count is ${count}`);
  //   }, [count]);

  return (
    <>
      <div>I am nav Bar {props.color} </div>
    </>
  );
}

export default Navbar;
