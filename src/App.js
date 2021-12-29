import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const deleteUserHandler = userId => {
    const updatedUsers = usersList.filter(user => user.id !== userId);
    setUsersList(updatedUsers)
   console.log(userId);
  };

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} deleteHandler={deleteUserHandler}/>
    </div>
  );
}

export default App;
