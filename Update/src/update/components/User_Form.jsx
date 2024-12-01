import { useState } from 'react'

const User_Form = () => {
    const user_id=Date.now()
    const [userData,setUserData]=useState([])
    const [formData,setFormData]=useState({
        id:"",
        userName:"",
        address:"",

    })
    const [isEditting,setEditting]=useState(null);

    const handleChange=(event)=>{
        const {name,value}=event.target
        setFormData((prevFormData)=>({...prevFormData,[name]:value}));
        
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(isEditting !== null){
            // editting
            setUserData((prevData)=>prevData.map((user)=>
                // here if user id === isEditting sprare user  
            user.id===isEditting?{...user,...formData}:user))
            setEditting(null);
        }
        else{
            // adding user
            setUserData((prevData)=>[...prevData,{...formData,id:user_id}])
        }

        // refresh input 
            setFormData({
                userName:"",
                address:"",
            })
        
    }

    //
     
    //
    // delete user
    const handleDelete=(id)=>{

        setUserData((prevData)=>prevData.filter((user)=>user.id !==id)) 
        // sprading all prevoius data which user id do not match with current id its will deleted. 
    }

    // editting user
    const handleEdit=(id)=>{
    
        // updated Inputs
    const userToEdit=userData.find((user)=>user.id===id);
    
    //assign updated Value 
    setFormData({
    userName:userToEdit.userName,
    address:userToEdit.address,
    })
    setEditting(id)
    }
  return (
    <div className='w-full h-svh flex justify-center items-center'>
        <div className='flex flex-col items-center'>
            <form onSubmit={handleSubmit} action="" className='flex flex-col space-y-4'>
                <div className='flex flex-col font-semibold space-y-2'>
                    <label htmlFor="userName">Name</label>
                    <input value={formData.userName} type="text" onChange={handleChange} name='userName' className='p-2 outline-none ring ring-gray-300 rounded-md focus:ring-sky-200' placeholder='Enter name'/>
                </div>
                <div className='flex font-semibold flex-col space-y-2'>
                    <label htmlFor="address">Address</label>
                    <input value={formData.address} type="text" onChange={handleChange} name='address' className='p-2 outline-none ring ring-gray-300 rounded-md focus:ring-sky-200' placeholder='Enter Address'/>
                </div>
                <button type='submit' className={` px-3 py-2 rounded-md shadow-xl font-medium uppercase ${isEditting?"bg-slate-900 hover:bg-green-700 active:bg-green-900 text-white transition-all ":"bg-blue-600 hover:bg-slate-700 active:bg-black text-white transition-all "}`}>
                    {isEditting?"Update":"Create User"}
                </button>
            </form>
            <div className='my-4'>
                <ul>

                {userData.length !==0 && userData.map((user)=>(
                    <li key={user.id} className='bg-slate-100 capitalize font-normal flex gap-x-4 items-center mb-2 p-4 rounded-lg shadow-lg'> <span>{user.userName}</span> <span>from</span> <span>{user.address}</span> 
                    <span className='flex gap-x-2'>
                    <button onClick={()=>handleDelete(user.id)} className='bg-violet-50 hover:bg-red-500  hover:text-white transition-all text-red-600 px-4 py-2 rounded-md border border-red-400 uppercase'>Delete</button>    
                    <button onClick={()=>handleEdit(user.id)} className='bg-sky-50 hover:bg-blue-600 hover:text-white transition-all text-blue-600 uppercase px-4 py-2 rounded-md border border-sky-400'>EDIT</button>    
                    </span></li>
                ))}
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default User_Form
