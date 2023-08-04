// src/components/UserProfilePage.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserProfilePage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data based on the provided id from the provided API when the component mounts
    fetch(`https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div id="container">
      <img id="avatar" src={user.avatar} alt={`${user.name}'s avatar`} />
      <div id="name"><h2>{user.name}</h2></div>
      <hr></hr>
      <div id="about"><p>{user.about}</p></div>
    </div>
  );
};

export default UserProfilePage;
