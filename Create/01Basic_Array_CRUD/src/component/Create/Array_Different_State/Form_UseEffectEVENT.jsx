import { useEffect, useState } from "react";

const Form_UseEffectEVENT = () => {
  const [data, setData] = useState([]);  // State to hold the submitted data
  const [formData, setFormData] = useState({ userName: "", address: "" });  // Form state for inputs

  // Handle form submission
  const handleSubmit = () => {
    if (formData.userName && formData.address) {
      const newUser = { userName: formData.userName, address: formData.address };
      setData((prevData) => [...prevData, newUser]);  // Add new user to data
      setFormData({ userName: "", address: "" });  // Clear the form inputs
    }
  };

  // Set up the keydown event listener for Enter key press
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission on Enter key press
        handleSubmit();  // Submit form on Enter key press
      }
    };

    // Add event listener when component mounts
    window.addEventListener("keydown", handleKeyPress);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [formData]);  // Depend on formData to re-attach the event listener when formData changes

  // Handle form input changes
  const handleFormInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,  // Update the corresponding input in the formData state
    }));
  };

  return (
    <div className="flex w-full flex-col space-y-5 justify-center items-center h-svh">
      <form
        onSubmit={(e) => {
          e.preventDefault();  // Prevent default form behavior on submit
          handleSubmit();
        }}
        className="space-y-4"
      >
        <div className="w-full flex justify-center gap-x-2">
          <span>Name:</span>
          <input
            onChange={handleFormInputChange}
            name="userName"
            type="text"
            className="outline-none ring ring-sky-200 focus:ring-sky-500 text-center"
            placeholder="Enter Name"
            value={formData.userName}  // Controlled input
          />
        </div>
        <div className="w-full flex justify-center gap-x-2">
          <span>Address:</span>
          <input
            onChange={handleFormInputChange}
            name="address"
            type="text"
            className="outline-none ring ring-sky-200 focus:ring-sky-500 text-center"
            placeholder="Enter Address"
            value={formData.address}  // Controlled input
          />
        </div>
        <div>
          <button type="submit" className="bg-slate-900 text-white font-medium p-3 rounded-md">
            Press Enter
          </button>
        </div>
      </form>
      <div>
        <ul className="w-full ">
          {data.length !== 0 &&
            data.map((item, index) => (
              <li
                key={index}
                className="bg-slate-900 mb-3 px-[5rem] py-[1rem] rounded-md uppercase space-x-4 text-white text-center"
              >
                <span>{item.userName}</span> <span>from</span> <span>{item.address}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Form_UseEffectEVENT;
