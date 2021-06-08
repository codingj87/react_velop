import React, { useState, useRef } from "react";
import "./styles.css";
import Hello from "./Hello";
import InputSample from "./InputSample";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

export default function App() {
  const [inputs, setInputs] = useState({
    name: "",
    email: ""
  });

  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false
    }
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };

    setUsers([...users, user]);

    setInputs({
      username: "",
      email: ""
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <>
      <CreateUser
        usename={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}
