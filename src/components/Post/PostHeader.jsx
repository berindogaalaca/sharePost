import React from "react";

const PostHeader = () => {
  return (
    <div className="card-header d-flex align-items-center">
      <img
        src="https://placekitten.com/80/80"
        alt="Profil Resmi"
        className="rounded-circle mr-3 img-fluid"
        width="8%"
      />
      <div>
        <h5 className="mb-0 ms-2">Username</h5>
      </div>
    </div>
  );
};

export default PostHeader;
