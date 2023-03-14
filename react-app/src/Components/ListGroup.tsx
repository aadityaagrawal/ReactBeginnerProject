import { useState } from "react";

interface Props{
    item : string [],
    heading : string

}

function ListGroup({item, heading}: Props) {
  
  
//   useState function will automatically update the state of selectedIndex under the hood
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {item.length === 0 && <p> No item Present </p>}
      <ul className="list-group">
        {item.map((element, index) => (
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
