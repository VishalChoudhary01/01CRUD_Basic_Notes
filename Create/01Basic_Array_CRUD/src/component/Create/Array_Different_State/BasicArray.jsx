import {useState} from 'react'

const BasicArray = () => {
    const [items,setItems]=useState([])
    const [inputValue,setInputValue]=useState("");
  
    
    const handleInputChange=(event)=>{
      setInputValue(event.target.value)
     
    }
  
    
  
    const handleCreate=()=>{
      if(inputValue){
        const updatedItemsList=[...items,inputValue];
        setItems(updatedItemsList)
        setInputValue("");
  
      }
      
    }
    
  
    
    return (
      <>
    <div className="w-[90] h-svh mx-auto flex items-center justify-center">
      <div className="">
        <div  className="space-x-4">
        <input onChange={handleInputChange} value={inputValue} type="text" placeholder="Enter Item" className="ring outline-none focus:ring-green-500"/>
        <button onClick={handleCreate} className="p-3 rounded-md bg-black text-white">Create</button> 
        </div>
        <ul>
          {
            items.map((item,index)=>
            <li key={index} >{item}</li>
            )
          }
        </ul>
      </div>
      </div> 
      </>
    )
}

export default BasicArray
