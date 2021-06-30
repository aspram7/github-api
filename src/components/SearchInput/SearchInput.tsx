import React from "react";
import "./SearchInput.css";

interface ISearchInputProps {
  value: string;
  onSearchUsers: (event: React.KeyboardEvent) => void;
  searchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<ISearchInputProps> = ({ value, onSearchUsers, searchChange }) => {
  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        value={value}
        onKeyDown={onSearchUsers}
        onChange={searchChange}
        placeholder="Search for users"
      />
    </div>
  );
};

export default SearchInput;
