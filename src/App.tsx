import { useState } from "react";
import "./App.css";
import UserForm from "./UserForm";

function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user: any[]) => {
    setUsers([...users, user]);
  };

  return (
    <>
      <UserForm />
    </>
  );
}

export default App;
