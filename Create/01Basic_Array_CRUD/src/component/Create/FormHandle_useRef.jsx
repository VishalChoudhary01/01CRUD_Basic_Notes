import React, { useState ,useRef} from 'react'

const FormHandle_useRef = () => {
    const [data,setData]= useState([{userName:"Vishal",address:"Patna"}])
    const userNameRef=useRef(null);
    const addressRef=useRef(null);


    

    const handleSubmit=(event)=>{

        // assign value through current.value
        const newUser={
        userName:userNameRef.current.value,
        address:addressRef.current.value,
            }
        event.preventDefault();
        setData((prevData)=>[...prevData,newUser]);

    }


  return (
    <div className='w-full flex h-svh flex-col items-center justify-center'>
      <form className='flex space-y-4 flex-col items-center' onSubmit={handleSubmit} action="">
        <div>
            Name:<input ref={userNameRef} type='text' placeholder='Enter Name' className=' text-center outline-none ring-1 ring-sky-200 focus:ring-sky-500'/>
        </div>
        <div>
            Address:<input ref={addressRef} type='text' placeholder='Enter Address' className='text-center outline-none ring-1 ring-sky-200 focus:ring-sky-500'/>
        </div>
        <button type='submit' className='bg-slate-900 text-white font-bold p-3 rounded-md'>ADD</button>
      </form>
      <div className='mt-36'>
        <ul>
            {data.length !==0 &&
            data.map((item,index)=>
            <li key={index}>{item.userName} from {item.address}</li>
            )}
        </ul>
      </div>
    </div>
  )
}

export default FormHandle_useRef
