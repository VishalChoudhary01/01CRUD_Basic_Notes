import {useState} from 'react'

const SomeObjectPush = () => {
    const initialObject=[{username:"Vishal",address:"Patna"},{username:"Monal",address:"Delhi"}];
    const [data,setData]=useState(initialObject)
    const [username,setUserName]=useState("");
    const [address,setAddress]=useState("");

    const handleInputChange=(event)=>{

        // destructing name (input tag name) and value (value from input tag value pass )
        const {name,value}=event.target

        // look at value and name on click and type on particular input tag
        console.log("Name on Input -> event.target",name)
        console.log("value on Input -> event.target",value)

        // adding Value on Change that will visible while typing

        if(name==="userName"){
            // update State of Name
            setUserName(value)
        }
        // update State of Address
        else if(name==="address"){
            setAddress(value)
        }
    }

    const handleSubmit=(event)=>{
                // avoiding event from reloading page
                event.preventDefault();
                const newUser={ username:username,address:address};

                setData((prevDataState)=>[...prevDataState,newUser])
                
                // clearing states of name and address input feilds.
                setUserName("")
                setAddress("")
    }


  return (
    <div className='w-full flex flex-col   justify-center items-center p-4'>
        <form onSubmit={handleSubmit} className='space-y-3 mb-16 flex flex-col  items-center' action="">
            <div>
            Name: <input name='userName' value={username} onChange={handleInputChange} type="text"  placeholder='Enter Name' className='outline-none ring ring-gray-200 focus:ring-sky-500 text-center'/>
            </div>
            <div>
            Address: <input name='address' value={address} onChange={handleInputChange} type="text"  placeholder='Enter Address' className='outline-none ring ring-gray-200 focus:ring-sky-500 text-center'/>
            </div>
            <button type='submit' className='bg-slate-950 text-white font-semibold p-3 rounded-md'>ADD</button>
        </form>
        
      <div>
        <ul>
            {data.length !==0 &&
               data.map((user,index)=>
                <li className='flex justify-between w-full gap-6' key={index}>Name: {user.username} <span>Address:</span>{user.address}</li>
            ) 
            }
        </ul>
      </div>
    </div>
  )
}

export default SomeObjectPush
