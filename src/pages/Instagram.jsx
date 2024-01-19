import React from "react";
import Navbar from "../components/Navbar";
import AccountCard from "../components/Account/AccountCard";
import PostCard from "../components/Post/PostCard";
import Footer from "./Footer";


function Instagram() {
  return (
    <div className="container-fluid px-0">
      <Navbar />
      <AccountCard />
      <PostCard />
      <Footer/>
    </div>
  );
}

export default Instagram;
