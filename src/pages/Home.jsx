import React, { useEffect, useState } from "react";
import ContactCard from "../components/ContactCard";
import axios from "axios";
import ContactForm from "../components/ContactForm";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSeletedUser] = useState(null);

  useEffect(() => {
    function fetchContact() {
      axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        const { data } = res;
        // transforming all data so that easily we can access in component
        if (data.length > 0) {
          const transformedData = data.map((d) => ({
            id: d.id,
            name: d.name,
            username: d.username,
            email: d.email,
            phone: d.phone,
            website: d.website,
            address: d.address.city,
            zipcode: d.address.zipcode,
            company: d.company.name,
          }));
          setUsers(transformedData);
        }
      });
    }
    fetchContact();
  }, []);

  function addContact(data) {
    axios
      .post("https://jsonplaceholder.typicode.com/users", data)
      .then((res) => {
        console.log(res);
        setUsers((prev) => [...prev, { id: users.length + 1, ...data }]);
      });
  }

  // using id finding the user then set it to selectedUser state
  function updateContact(id) {
    const findUser = users.find((user) => user.id === id);
    if (findUser) {
      setSeletedUser(findUser);
    }
  }
  // looping over the existing user then if id matches with updateData id then setUser to updateData
  function handleUpdateContact(updateData) {
    axios
      .put(
        `https://jsonplaceholder.typicode.com/users/${updateData.id}`,
        updateData
      )
      .then((res) => {
        console.log(res);
        setUsers((prev) =>
          prev.map((user) => (user.id === updateData.id ? updateData : user))
        );
      });
  }

  function handleDelete(id) {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        console.log(res);
        setUsers((prev) => prev.filter((user) => user.id !== id));
      });
  }

  return (
    <div className="container mx-auto p-4 min-h-screen flex flex-col items-center ">
      <div className="flex w-full mx-auto md:w-2/4">
        <ContactForm
          addContact={addContact}
          user={selectedUser}
          handleUpdateContact={handleUpdateContact}
        />
      </div>
      <div className="flex flex-col md:flex-row flex-wrap gap-[2em] items-center">
        {users.map((user) => (
          <ContactCard
            key={user.id}
            {...user}
            updateContact={updateContact}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
