import React, { useEffect, useState } from "react";

const ContactForm = ({ addContact, user, handleUpdateContact }) => {
  console.log(user);
  const [formData, setFormData] = useState({});

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  // filled form with existing user data
  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  function handleSubmit(e) {
    e.preventDefault();
    // if user then it will update otherwise it will add
    if (user) {
      handleUpdateContact(formData);
    } else {
      addContact(formData);
    }
    setFormData({});
  }

  return (
    <div className="container mx-auto p-2">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h2 className="text-center text-2xl text-white">
          {user ? "Update contact" : "Add contact"}
        </h2>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={formData.name || ""}
          placeholder="Name"
          className="p-2 border rounded-md focus:outline-none focus:border-blue-500"
          autoComplete="off"
        />
        <input
          onChange={handleChange}
          type="text"
          name="username"
          value={formData.username || ""}
          placeholder="Username"
          autoComplete="off"
          className="p-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          onChange={handleChange}
          type="email"
          name="email"
          value={formData.email || ""}
          placeholder="Email"
          autoComplete="off"
          className="p-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          onChange={handleChange}
          type="text"
          name="phone"
          value={formData.phone || ""}
          placeholder="Phone"
          autoComplete="off"
          className="p-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          onChange={handleChange}
          type="text"
          name="website"
          value={formData.website || ""}
          placeholder="website"
          autoComplete="off"
          className="p-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          onChange={handleChange}
          type="text"
          name="address"
          value={formData.address || ""}
          placeholder="Address"
          autoComplete="off"
          className="p-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          onChange={handleChange}
          type="text"
          name="zipcode"
          value={formData.zipcode || ""}
          placeholder="Zip Code"
          autoComplete="off"
          className="p-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          onChange={handleChange}
          type="text"
          name="company"
          value={formData.company || ""}
          placeholder="Company"
          autoComplete="off"
          className="p-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          {user ? "Update Contact" : "Add Contact"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
