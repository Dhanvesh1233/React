import React from "react";
import "./home.css";
import welcome from "../assets/welcome.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Congratulations, you have logged in successfully!</h1>
      <img src={welcome} alt="Success" />
    </div>
  );
};

export default Home;
