import ListGroup from "./Components/ListGroup";
import Alert from "./Components/Alert";


function App() {
  let Elements = ["Mumbai", "Delhi", "Goa", "Pune", "Banglore"];
  const handleSelect = (item:string)=>{
    console.log(item);
  }
  return (
    <div>
      <ListGroup item={Elements} heading="City" onSelectedIndex = {handleSelect}/>
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  );
}

export default App;
