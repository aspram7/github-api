import React from "react";
import "./UserComponent.css";

interface IUserComponentProps {
  onUserPage: () => void;
  userImg?: string;
  userName?: string;
}

const UserComponent: React.FC<IUserComponentProps> = ({ onUserPage, userImg, userName }) => {
  return (
    <div className="user-item" onClick={() => onUserPage()}>
      <div className="avatar-box">
        <img src={userImg} alt="user" />
      </div>
      <p>{userName}</p>
    </div>
  );
};

export default UserComponent;
