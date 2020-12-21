import React from "react";
import "./profileImage.styles.scss";
export default function ProfileImage({ profileImage }) {
  return (
    <div className="profile-image">
      <img src={profileImage} alt="" />
    </div>
  );
}
