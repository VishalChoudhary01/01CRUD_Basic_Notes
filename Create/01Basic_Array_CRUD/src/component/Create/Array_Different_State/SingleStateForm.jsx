import { useState } from "react"
const SingleStateForm = () => {
  const [data,setData]=useState([{userName:"Vishal",address:"Patna"}])
  const [formData,setFormData]=useState({
    userName:"",
    address:"",
  })

  const handleFormInputChange=(event)=>{
    // after destructing
    const {name,value}=event.target;

    //spreading all form input field ,now update particular field which input field changes
    // if userName (tag name input changes) so [name] will replace userName and value will took from that input tag value. 
    setFormData((prevFormData)=>({...prevFormData,[name]:value}))
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    const newUser={
      
      // assign value in  userName key formData is Object so we access value formData.userName
      userName:formData.userName,

      // assign value in  address key formData is Object so we access value formData.address
      address:formData.address
    }
    // now sprade previous formData in array and adding newUser Object in array
    setData((prevData)=>[...prevData,newUser]);
    
    // clearing Form Input
    setFormData({
      userName:"",
      address:"",
    })
      

  }
  
  return (
    <div className='w-full flex flex-col   justify-center items-center p-4'>
        <form onSubmit={handleSubmit} className='space-y-3 mb-16 flex flex-col  items-center' action="">
            <div>
            Name: <input name='userName' value={formData.userName} onChange={handleFormInputChange} type="text"  placeholder='Enter Name' className='outline-none ring ring-gray-200 focus:ring-sky-500 text-center'/>
            </div>
            <div>
            Address: <input name='address' value={formData.address} onChange={handleFormInputChange} type="text"  placeholder='Enter Address' className='outline-none ring ring-gray-200 focus:ring-sky-500 text-center'/>
            </div>
            <button type='submit' className='bg-slate-950 text-white font-semibold p-3 rounded-md'>ADD</button>
        </form>
        
      <div>
        <ul>
            {data.length !== 0 &&
               data.map((user,index)=>
                <li className='flex justify-between w-full gap-6' key={index}>Name: {user.userName} <span>Address:</span>{user.address}</li>
            ) 
            }
        </ul>
      </div>
    </div>
  )
}

export default SingleStateForm
