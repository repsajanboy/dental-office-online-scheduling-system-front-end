import React from "react";
import { useState } from "react";

function Profile() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 123-456-7890",
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setUser(formData);
    setEditMode(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          My Profile
        </h1>

        <div className="space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Name
            </label>
            {editMode ? (
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            ) : (
              <p className="text-gray-800">{user.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Email
            </label>
            {editMode ? (
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            ) : (
              <p className="text-gray-800">{user.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Phone
            </label>
            {editMode ? (
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            ) : (
              <p className="text-gray-800">{user.phone}</p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            {editMode ? (
              <>
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setEditMode(false);
                    setFormData(user);
                  }}
                  className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setEditMode(true)}
                className="px-6 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
