import ListGroup from "./Components/ListGroup";



function App() {
  let Elements = ["Mumbai", "Delhi", "Goa", "Pune", "Banglore"];
  return (
    <div>
      <ListGroup item={Elements} heading="City "/>
    </div>
  );
}

export default App;
