import React from "react";

import ProfileImage from "../profile-image/profile-image.component";

import "./social-card.styles.css";

const SocialCard = ({ post }) => (
  <div className="social-card">
    <div className="container">
      <div className="row">
        <ProfileImage image={post.profilePic} />
        <div className="col-10">
          <div className="card-heading">
            <p>
              <strong>{post.userName}</strong>
              <span> {post.userHandle}</span>
              <sup> . </sup>
              <span>{post.posted}</span>
            </p>
          </div>
          <div className="card">
            <img
              className="img-fluid post-img"
              src={`${post.postImg}`}
              alt="Card cap"
            />
            <img
              className="img-fluid body-profile-img"
              src={`${post.profilePic}`}
              alt="Profile"
            />
            <div className="card-body">
              <p className="card-text">
                <strong>Learning React? Start Small.</strong>
              </p>
              <p>{post.post}</p>
              <p>
                <span>dev.to</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SocialCard;
