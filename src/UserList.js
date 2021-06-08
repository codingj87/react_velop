import React from "react";

const User = ({ user, onRemove, onToggle }) => {
  const style = {
    cursor: "pointer",
    color: user.active ? "green" : "black"
  };
  return (
    <div>
      <b>
        <div style={style} onClick={() => onToggle(user.id)}>
          {user.username}
        </div>
        : {user.email}
        <button onClick={() => onRemove(user.id)}>삭제</button>
      </b>
    </div>
  );
};

const UserList = ({ users, onRemove, onToggle }) => {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default UserList;
