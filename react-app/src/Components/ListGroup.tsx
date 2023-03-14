import { useState } from "react";

function ListGroup() {
  let Elements = ["Mumbai", "Delhi", "Goa", "Pune", "Banglore"];
  
//   useState function will automatically update the state of selectedIndex under the hood
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>List View</h1>
      {Elements.length === 0 && <p> No Elements Present </p>}
      <ul className="list-group">
        {Elements.map((element, index) => (
          <li   
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            key={element}
            onClick={()=> setSelectedIndex(index)   }
          >
            {element}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
