import React from 'react'

const Explicty_Added_Enter_Key = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: ''
      });
      const [submittedData, setSubmittedData] = useState(null);
    
      // Handle input change for both fields
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();  // Prevents page reload on form submission
        if (formData.name && formData.address) {
          setSubmittedData(formData);
        }
      };
    
      // Handle Enter key press for form submission
      const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();  // Prevent the default behavior of form submission
          handleSubmit(e);     // Trigger the form submit programmatically
        }
      };
    
      return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h1 className="text-2xl font-semibold text-center mb-4">React Form Example</h1>
            
            {/* Form with onSubmit handler */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyPress} // Capture Enter key press on name input
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address:</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyPress} // Capture Enter key press on address input
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your address"
                />
              </div>
              
              <div>
                <button
                  type="submit"
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
}

export default Explicty_Added_Enter_Key
