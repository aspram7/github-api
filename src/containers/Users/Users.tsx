import React, { useState } from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import Pagination from "../../components/Pagination/Pagination";
import UserComponent from "../../components/UserComponent/UserComponent";
import { useLazyQuery } from "@apollo/client";
import { GET_USER } from "../../graphql/queries";
import "./Users.css";

interface IGetUser {
  value: String;
  per_page: Number;
  page: Number;
}

const PER_PAGE: number = 20;
let totalCount: number = 0;

const Users: React.FC = () => {
  const [value, setValue] = useState("");

  const [usersData, { loading, data }] = useLazyQuery<IGetUser>(GET_USER, {
    variables: { value: value, per_page: PER_PAGE, page: 1 },
  });

  console.log(value, 99);
  console.log(data, 88);

  const searchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onSearchUsers = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      // fetch(`http://localhost:5000/graphql?value=${value}&per_page=${PER_PAGE}&page=${1}`)
      //   .then((res) => res.json())
      //   .then((data) => {
      //     console.log(data, 11);
      //   });

      usersData();
    }
  };

  const navigatePage = (n: number) => {};
  const onUserPage = () => {};

  return (
    <div className="users-section">
      <div className="search-pagination">
        <SearchInput value={value} onSearchUsers={onSearchUsers} searchChange={searchChange} />
        <Pagination navigatePage={navigatePage} />
      </div>
      <div className="users-list">
        <UserComponent onUserPage={onUserPage} />
      </div>
    </div>
  );
};

export default Users;
