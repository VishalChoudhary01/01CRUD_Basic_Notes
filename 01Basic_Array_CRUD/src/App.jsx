import React, { useState } from "react";

function App() {
  // Step 1: Initialize state
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", address: "123 Main St" },
    { id: 2, name: "Jane Smith", address: "456 Oak Ave" },
  ]);

  // Step 2: State to track the current editing user's info
  const [editingUser, setEditingUser] = useState(null);
  const [newName, setNewName] = useState("");
  const [newAddress, setNewAddress] = useState("");

  // Step 3: Handle the Edit button click
  const handleEdit = (user) => {
    setEditingUser(user);
    setNewName(user.name);
    setNewAddress(user.address);
  };

  // Step 4: Handle form submission (updating the array)
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const updatedUsers = users.map((user) => {
      if (user.id === editingUser.id) {
        // Update the user with new values
        return { ...user, name: newName, address: newAddress };
      }
      return user;
    });
    setUsers(updatedUsers); // Update the state with the new array
    setEditingUser(null); // Clear the editing state
    setNewName("");
    setNewAddress("");
  };

  // Step 5: Display users and the edit form
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">User List</h2>
      <ul className="list-none">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex justify-between items-center bg-gray-100 p-3 mb-2 rounded-lg shadow"
          >
            <span>{user.name} - {user.address}</span>
            <button
              onClick={() => handleEdit(user)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Edit
            </button>
          </li>
        ))}
      </ul>

      {/* Step 6: Edit form */}
      {editingUser && (
        <div className="mt-6 p-6 bg-white rounded-lg shadow-lg w-1/3 mx-auto">
          <h3 className="text-xl font-semibold mb-4">Edit User</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name:
              </label>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Enter name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address:
              </label>
              <input
                type="text"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
                placeholder="Enter address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Update
              </button>
              <button
                type="button"
                onClick={() => setEditingUser(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
