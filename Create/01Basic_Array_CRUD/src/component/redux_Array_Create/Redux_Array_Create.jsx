import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createUser,deleteUser } from './slice/userSlice';
const Redux_Array_Create = () => {
  const [formData,setFormData]=useState({
    userName:"",
    address:"",
  })
  const userDispatch=useDispatch();

  const users=useSelector((state)=>state.users);

  const handleSubmit=(event)=>{
    event.preventDefault();
    userDispatch(createUser({...formData}));
    setFormData({
      userName:"",
      address:""
    })
  }

  const handleDelete=(userName)=>{
userDispatch(deleteUser({userName}))
  }

  const handleChange=(event)=>{
    const {name,value}=event.target
    setFormData((prevFormData)=>({...prevFormData,[name]:value}))
  }
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
    <h2 className="text-2xl font-semibold text-gray-700 mb-6">Add a New User</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="userName" className="block text-sm font-medium text-gray-600">Username</label>
        <input
          type="text"
          id="userName"
          name='userName'
          onInput={handleChange}
          value={formData.userName}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-600">Address</label>
        <input
          type="text"
          name="address"
          id="address"
          value={formData.address}
          onInput={handleChange}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Add User
      </button>
    </form>
  
    <h2 className="text-2xl font-semibold text-gray-700 mt-10 mb-4">Users List</h2>
    <ul className="space-y-2">
      {users.length !==0 && users.map((user, index) => (
        <li key={index} className="p-4 bg-gray-50 border border-gray-200 rounded-lg flex justify-between items-center">
          <span className="text-lg font-medium text-gray-700">{user.userName}</span>
          <span className="text-sm text-gray-500">{user.address}</span>
          <span onClick={()=>handleDelete(user.userName)} className='px-4 py-1 bg-pink-50 rounded-md cursor-pointer border border-pink-300 text-red-500 font-medium'>DELETE</span>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Redux_Array_Create
