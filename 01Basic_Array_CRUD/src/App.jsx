import { useState } from "react"

function App() {
  const ListItem=[{username:"vishal",password:"****"},{username:"rajesh",password:"1111"}]
  const [Items,setItems]=useState(ListItem)
  const [numbers,setNumbers]=useState([])

  console.log("Basic Intial Items",Items);
  console.log("Initial Numbers Array",numbers)
 
  const create=()=>{
    setNumbers(...numbers,setNumbers)
  }
  const handleInput=(event)=>{
    event.preventDefault();

  }
  return (
    <>
    <div>
      <input type="text" onChange={handleInput}/>
      <button className="bg-black text-white w-16 p-2 rounded-md">Add</button>
    </div>
    <div>Numbers</div>
    <ul>
    {numbers.map((number,index)=> 
     <li key={index}>{number}</li>
    )}
    </ul>

    <div></div>
    <ul>
      {}
    </ul>
    </>
  )
}

export default App
