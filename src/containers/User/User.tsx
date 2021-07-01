import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import { useLazyQuery } from "@apollo/client";
import { GET_USER_INFO, GET_USER_REPOS } from "../../graphql/queries";
import Pagination from "../../components/Pagination/Pagination";
import goBack from "../../assets/long-left-arrow.svg";
import "./User.css";

interface IUser {
  user: IUserInfo;
}

interface IUserInfo {
  login: string;
  avatar_url: string;
  name: string;
  company: string;
  email: string;
  followers: number;
  following: number;
  location: string;
  bio: string;
  public_repos: number
}

interface IUserName {
  name: string;
}

interface ParamTypes {
  user: string;
}

interface IGetUserRepos {
  name: string;
  per_page: number;
  page: number;
}

interface IUserRepos {
  userRepos: Array<IUserReposItems>;
}

interface IUserReposItems {
  html_url: string;
  name: string;
}

const PER_PAGE: number = 10;
let page: number = 1;

const User: React.FC = () => {
  const history = useHistory();
  const { user } = useParams<ParamTypes>();

  const [getUserInfo, { data: dataUserInfo }] = useLazyQuery<IUser, IUserName>(GET_USER_INFO, {
    variables: { name: user },
  });

  const [getUserRepos, { data: dataUserRepo }] = useLazyQuery<IUserRepos, IGetUserRepos>(
    GET_USER_REPOS,
    {
      variables: { name: user, per_page: PER_PAGE, page: page },
    }
  );

  useEffect(() => {
    getUserInfo();
    getUserRepos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

   const navigatePage = (n: number) => {
      page += n;
      getUserRepos();
  };
  


  return (
    <div className="user-section">
      <div className="back-arrow" onClick={() => history.goBack()}>
        <img src={goBack} alt="prev" />
        Back to Users
      </div>
      <div className="user-profile">
        <div className="user-item">
          <div className="avatar-box">
            <img
              className="user-img"
              src={dataUserInfo && dataUserInfo?.user.avatar_url}
              alt="user"
            />
          </div>
          <p className="user-name">{dataUserInfo && dataUserInfo?.user.login} </p>
        </div>
        <div className="user-about">
          {dataUserInfo && (
            <div>
              <p>Name: {dataUserInfo?.user.name}</p>
              <p>Company: {dataUserInfo?.user.company}</p>
              <p>Email: {dataUserInfo?.user.email}</p>
              <p>Followers: {dataUserInfo?.user.followers}</p>
              <p>Following: {dataUserInfo?.user.following}</p>
              <p>Location: {dataUserInfo?.user.location}</p>
              <p>Bio: {dataUserInfo?.user.bio}</p>
            </div>
          )}
        </div>
      </div>
      <div className="repositories-pagination">
        <p>User's repositories</p>
        <Pagination classNameNext={dataUserInfo ? (dataUserInfo?.user.public_repos  / PER_PAGE > page ? "" : "disabled") : "disabled"}  classNamePrev={page > 1 ? "" : "disabled"} navigatePage={navigatePage} />
      </div>
      <div className="repos-list">
          {dataUserRepo?.userRepos &&  dataUserRepo?.userRepos.map((item, idx) => {
              return <div className="repo-item" key={idx}> 
                  <p>{item.name}</p>
                 <a href={item.html_url} target="_blank" rel="noopener noreferrer">{item.html_url}</a>
             </div>
          }) 
          }
      </div>
    </div>
  );
};

export default User;
