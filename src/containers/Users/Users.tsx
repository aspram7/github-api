import React, { useState } from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import Pagination from "../../components/Pagination/Pagination";
import UserComponent from "../../components/UserComponent/UserComponent";
import { useApolloClient } from "@apollo/client";
import { GET_USER } from "../../graphql/queries";
import "./Users.css";

interface IGetUser {
  value: string;
  per_page: number;
  page: number;
}

interface IUsers {
    users: IUser
}

interface IUser {
    total_count: number,
    items: Array<IUsersItems>
}

interface IUsersItems {
    login: string,
    avatar_url: string
}

const PER_PAGE: number = 20;
let page: number = 1;

const Users: React.FC = () => {
  const [value, setValue] = useState("");
  const [usersData, setUsersData] = useState<IUsers>();

  const client = useApolloClient();

  const searchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const getUsers = async () => {
       const { data } =  await client.query<IUsers, IGetUser>({
                query: GET_USER, 
                variables: { value: value, per_page: PER_PAGE, page: page },
           });
        setUsersData(data); 
  } 

  const onSearchUsers =  (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
        page = 1;
        try {
            getUsers();
        }
        catch(err) {
            console.log(err);
        }
    }
};

  const navigatePage = (n: number) => {
      page += n;
      getUsers();
  };

  return (
    <div className="users-section">
      <div className="search-pagination">
        <SearchInput value={value} onSearchUsers={onSearchUsers} searchChange={searchChange} />
        <Pagination classNameNext={usersData ? (usersData.users.total_count  / PER_PAGE > page ? "" : "disabled") : "disabled"}  classNamePrev={page > 1 ? "" : "disabled"} navigatePage={navigatePage} />
      </div>
      <div className="users-list">
          {usersData?.users.items && usersData?.users.items.map((item, idx) => {
              return  <UserComponent key={idx} userImg={item.avatar_url} userName={item.login} />
          })}
       
      </div>
    </div>
  );
};

export default Users;
