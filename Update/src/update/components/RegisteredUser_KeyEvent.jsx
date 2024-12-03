import React, { useState,useId, useEffect } from 'react'

const RegisteredUser_KeyEvent = () => {
    const userID=Date.now();
    const [users,setUsers]=useState([]);
    const [form,setForm]=useState({
        id:"",
        userName:"",
        address:"",
    })
    const [isEditing,setIsEditing]=useState(null);
// Tracking for user that will delete
    const [selectedUserId, setSelectedUserId] = useState(null); 

    const handleInputChange=(event)=>{
        const {name,value}=event.target
        setForm((prevForm)=>({...prevForm,[name]:value}))


    }
    const handleEdit=(id)=>{
        // first we returning editing user from users and find method 
        // for find first user that will match to current user id 
        // that will passed through isEditing(id)
        const userToEdit=users.find((user)=>user.id===id)

        // Then we set state of username and address to inputs field 
        // that will shown for edit and 
        // Update button submit same userName and address 
        setForm({
            userName:userToEdit.userName,
            address:userToEdit.address
        })

        // passing user id to setIsEditing
        setIsEditing(id);

        

    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(isEditing !==null){
            // Editing
            setUsers((prevUsers)=>prevUsers.map((user)=>user.id===isEditing?{...user,...form}:user))
            // after editing trigger with user id  again null
            setIsEditing(null)
        }else{
            //  adding new User
            setUsers((prevUser)=>[...prevUser,{...form,id:userID}])
        }
        // clear up
        setForm({
            userName:"",
            address:""
        })
    }

    // delete
    const handleDelete=(id)=>{
        setUsers((prevUser)=> prevUser.filter((user)=>user.id===id))
        // Pass user id for Delete
        setSelectedUserId(id)


    }
    useEffect(()=>{
        const handleKeyPress=(event)=>{
            // filter event based on key
            if(event.key==="Enter"){
                event.preventDefault()
                // calling handleSubmit funtion triggered on ENTER 
                // pass event for trigger
                handleSubmit(event)
            }else if(event.key==="Delete" && selectedUserId !==null ){
                handleDelete(selectedUserId)
            }
        }
        window.addEventListener("keydown",handleKeyPress)

        return ()=>{
            window.removeEventListener("keydown",handleKeyPress)
        }
    },[form,selectedUserId])    
  return (
    <div className='w-full h-svh flex flex-col justify-center items-center'>
      <form onSubmit={handleSubmit} action="" className='flex flex-col space-y-4'>
        <div className='flex flex-col space-y-2'>
            <label htmlFor="userName">Name</label>
            <input name='userName' onChange={handleInputChange} value={form.userName} type="text" placeholder='Enter Name' className='px-4 py-2 text-center placeholder:text-slate-300 ring ring-slate-300 rounded-md outline-none focus:ring-sky-200'/>
        </div>
        <div className='flex flex-col space-y-2'>
            <label htmlFor="address">Address</label>
            <input name='address' onChange={handleInputChange} value={form.address} type="text" placeholder='Enter Address' className='px-4 py-2 text-center placeholder:text-slate-300 ring ring-slate-300 rounded-md outline-none focus:ring-sky-200'/>
        </div>
        <button className={`px-4 py-2 font-semibold uppercase rounded-md shadow-lg ${isEditing?"bg-green-700 text-white transition-colors hover:bg-blue-900":"bg-sky-700 text-white transition-colors hover:bg-blue-900"}`}>
            {isEditing?"Update":"Create"
            }</button>
      </form>
      <div className='my-8 w-full flex justify-center'>
        <ul className=' p-4 w-[70%] flex flex-col items-center justify-center gap-x-8 rounded-lg'>
            {
                users.length!==0 && users.map(user=>
<li key={user.id} className='flex gap-x-4 items-center mb-4'>  <span>{user.userName}</span> <span>From</span> <span>{user.address}</span> <span className='flex gap-x-3 items-center'>
<button onClick={()=>handleEdit(user.id)} className='px-4 py-2 bg-sky-100 border border-sky-500  text-blue-900 font-medium rounded-md hover:bg-blue-900 transition-colors hover:text-white'>EDIT</button>
<button onClick={()=>handleDelete(user.id)} className='px-4 py-2 bg-red-50 border border-red-700  text-red-500 font-medium rounded-md hover:bg-red-600 transition-colors hover:text-white'>DELETE</button></span>
</li>
                )
                
            }
            
        </ul>
      </div>
    </div>
  )
}

export default RegisteredUser_KeyEvent
