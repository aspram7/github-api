import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { useParams } from "react-router";
import { useLazyQuery } from "@apollo/client";
import { GET_USER_INFO } from "../../graphql/queries";
import Pagination from "../../components/Pagination/Pagination";
import goBack from "../../assets/long-left-arrow.svg";
import "./User.css";

interface IUser {
   user: IUserInfo
}

interface IUserInfo {
    login: string
    avatar_url: string
    name: string
    company: string
    email: string
    followers: number
    following: number
    location: string
    bio: string
}

interface IUserName {
    name: string
}

interface ParamTypes {
  user: string
}

const User: React.FC = () => {
    const history = useHistory();
     const { user } = useParams<ParamTypes>();

      const[ getUserInfo, { data }] = useLazyQuery<IUser, IUserName>(GET_USER_INFO, {
          variables: { name: user}
      })

    useEffect(() => {
         getUserInfo();

     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    

    return (
        <div className="user-section">
        <div className="back-arrow" onClick={() => history.goBack()}>
            <img src={goBack} alt="prev" />
            Back to Users
        </div>
        <div className="user-profile">
            <div className="user-item">
            <div className="avatar-box">
                <img className="user-img" src={data && data?.user.avatar_url} alt="user" />
            </div>
            <p className="user-name">{data && data?.user.login} </p>
            </div>
            <div className="user-about">
                {data && 
                <div>
                <p>Name: {data?.user.name}</p>
                <p>Company: {data?.user.company}</p>
                <p>Email: {data?.user.email}</p>
                <p>Followers: {data?.user.followers}</p>
                <p>Following: {data?.user.following}</p>
                <p>Location: {data?.user.location}</p>
                <p>Bio: {data?.user.bio}</p>
                </div>}
                
            </div>
        </div>
        <div className="repositories-pagination">
            <p>User's repositories</p>
            {/* <Pagination classNameNext={usersData ? (usersData.users.total_count  / PER_PAGE > page ? "" : "disabled") : "disabled"}  classNamePrev={page > 1 ? "" : "disabled"} navigatePage={navigatePage} /> */}
        </div>
        <section className="repos-list"></section>
        </div>
    )
}

export default User;