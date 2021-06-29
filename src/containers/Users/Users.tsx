import React, { useState } from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import "./Users.css";

const Users: React.FC = () => {
    const [value, setValue] = useState("");

    const searchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const onSearchUsers = (event: React.KeyboardEvent) => {
        if(event.key === "Enter"){
            console.log(value);    
        }
    }

    return (
        <div className="users-section">
            <SearchInput value={value} onSearchUsers={onSearchUsers} searchChange={searchChange} />
        </div>
    )
}

export default Users;