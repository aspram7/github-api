import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "./UserComponent.css";

interface IUserComponentProps {
  onUserPage: () => void
  userImg: string
  userName: string
}

const UserComponent: React.FC<IUserComponentProps> = ({ onUserPage, userImg, userName }) => {
  return (
    <RouterLink to={`/users/${userName}`}>
      <div className="user-item" onClick={() => onUserPage()}>
        <div className="avatar-box">
          <img src={userImg} alt="user" />
        </div>
        <p>{userName}</p>
      </div>
    </RouterLink>
  );
};

export default UserComponent;
