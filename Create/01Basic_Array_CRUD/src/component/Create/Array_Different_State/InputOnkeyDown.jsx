import { useEffect, useState } from "react";

const Form_UseEffectEVENT = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [submittedData, setSubmittedData] = useState(null);
  
    // Handle form submission when Enter key is pressed
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();  // Prevents form submission from refreshing the page
        handleSubmit();
      }
    };
  
    // Handle form submit
    const handleSubmit = () => {
      if (name && address) {
        setSubmittedData({ name, address });
      }
    };
  
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
          <h1 className="text-2xl font-semibold text-center mb-4">React Form Example</h1>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={handleKeyPress}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address:</label>
              <input
                id="address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                onKeyDown={handleKeyPress}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your address"
              />
            </div>
            
            <div>
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
  
          {/* Displaying the submitted data */}
          {submittedData && (
            <div className="mt-6 p-4 border-t border-gray-200">
              <h3 className="text-xl font-semibold mb-2">Submitted Data:</h3>
              <p className="text-gray-700"><strong>Name:</strong> {submittedData.name}</p>
              <p className="text-gray-700"><strong>Address:</strong> {submittedData.address}</p>
            </div>
          )}
        </div>
      </div>
    );
  };
  


export default Form_UseEffectEVENT;
