import Post from "components/Post";
import AddPost from "components/templates/AddPost";
import React from "react";

function Dashboard() {
  return (
    <div>
      <AddPost />
      <Post/>
    </div>
  );
}

export default Dashboard;
