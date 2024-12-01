import React, { useEffect, useState } from 'react';

const LocalStorageCreate_Read = () => {
    const [users,setUsers]=useState([]);
    const [formData, setFormData] = useState({
        userName: "",
        address: "",
    });

    // Handle state change through input fields
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        
        // Debug: Log the input change to ensure it's firing
        console.log('Input changed:', name, value);

        // Update FormData while spreading previous data
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    // Retrieve data from localStorage on component mount
    useEffect(() => {
        const storedData = localStorage.getItem('userData');
        if (storedData) {
        const parsedData=JSON.parse(storedData);
        console.log("Data Loaded from LocalStoarge",parsedData)
        }
        else{
            console.log("No data found in Local Storage");
        }
    }, []);

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        const newUser={...formData};
        const storedData=localStorage.getItem("users");
        const userList=storedData?JSON.parse(storedData):[]

        userList.push(newUser);
        localStorage.setItem("users",JSON.stringify(userList))

        setUsers(userList);

        setFormData({
            userName:"",
            address:""
        })
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
            {/* Form Section */}
            <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold text-center mb-6">Professional Center</h2>
                <form onSubmit={handleSubmit}>
                    {/* Name Input */}
                    <div className="mb-4">
                        <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            id="userName"
                            name="userName"
                            type="text"
                            value={formData.userName} // Bind value to state
                            onChange={handleInputChange} // Change to `onChange`
                            placeholder="Enter your name"
                            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>

                    {/* Address Input */}
                    <div className="mb-6">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                            Address
                        </label>
                        <input
                            id="address"
                            name="address"
                            type="text"
                            value={formData.address} // Bind value to state
                            onChange={handleInputChange} // Change to `onChange`
                            placeholder="Enter your address"
                            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Submit
                    </button>
                </form>
            </div>

            {/* List Section */}
            <div className="max-w-4xl w-full px-6 py-8">
                <h3 className="text-xl font-semibold text-center mb-4">List of Items</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-6">
                    
                    {
                    users.length !==0 && users.map((user,index)=>(
                        <li key={index} className="bg-white p-6 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition duration-200">
                        <pre className="text-sm text-gray-700">
                            <span>{user.userName}  </span> <span>form</span> <span>{user.address}</span>
                        </pre>
                    </li>
                    ))
                    /* {(formData.userName.trim() || formData.address.trim()) && (
                        
                    )} */}
                </ul>
            </div>
        </div>
    );
};

export default LocalStorageCreate_Read;
