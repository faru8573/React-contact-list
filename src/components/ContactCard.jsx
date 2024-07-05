import React from "react";

const ContactCard = ({
  handleDelete,
  updateContact,
  id,
  name,
  username,
  phone,
  email,
  website,
  address,
  zipcode,
  company,
}) => {
  return (
    <div className="h-full bg-slate-700 shadow-lg rounded-lg overflow-hidden mb-8">
      <div className="w-[20em] h-[30em] p-6 flex flex-col justify-between gap-1">
        <button
          onClick={() => updateContact(id)}
          className="bg-gray-400 hover:bg-cyan-500 p-2 rounded-md"
        >
          Update
        </button>
        <div className="text-gray-300">
          <h2 className="text-3xl font-bold mb-2">{name}</h2>
          <div className="">
            <span className="font-semibold text-gray-100">Username:</span>{" "}
            {username}
          </div>
          <div className="">
            <span className="font-semibold text-gray-100">Email:</span> {email}
          </div>
          <div className="">
            <span className="font-semibold text-gray-100">Phone:</span> {phone}
          </div>
        </div>
        <div className="text-gray-300">
          <h3 className="text-2xl font-semibold mb-1">Address:</h3>
          <div className="flex flex-col">
            <div>
              <span className="font-semibold text-gray-100 label">Street:</span>{" "}
              {address}
            </div>

            <div>
              <span className="font-semibold text-gray-100 label">
                Zipcode:
              </span>{" "}
              {zipcode}
            </div>
          </div>
        </div>
        <div className="text-gray-300">
          <div className="mb-2">
            <span className="font-semibold text-gray-100">Company:</span>{" "}
            {company}
          </div>
        </div>

        <button
          onClick={() => handleDelete(id)}
          className="bg-yellow-500 hover:bg-red-500 p-2 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
