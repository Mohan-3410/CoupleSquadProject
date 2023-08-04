import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const apiUrl = "https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/users";
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div>
      <h1>List of Users</h1>
      <div id="containerMain">
      {users.map((user)=>(
        <Link to={`/users/${user.id}`}>
          <div className="user-card" key={user.id}>
            <img
              className="user-avatar"
              src={user.avatar}
              alt={`${user.name}'s avatar`}
            />
            <div className="user-info">
              <div className="user-name">{user.name}</div>
              <div className="user-email">{user.email}</div>
            </div>
          </div>
        </Link>
      ))}
        
      </div>
      {/* <ul>
          {users.map(user => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul> */}
    </div>
  );
};

export default UsersPage;
