import React from "react";

import "./profile-image.styles.css";

const ProfileImage = ({ image }) => (
  <div className="col card-img-div">
    <img
      className="img-fluid card-profile-img"
      src={`${image}`}
      alt="Profile"
    />
  </div>
);

export default ProfileImage;
