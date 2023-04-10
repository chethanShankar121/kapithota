import React from "react";
import './Search.scss';
import SearchIcon from '@mui/icons-material/Search';
import { Input, Space } from 'antd';
const { Search } = Input;

const SearchComponent = props => {

    const onSearch = value => {
        console.log(value);
    }
    return (
        <div className="flex flex-align-center flex-start" id="search-wrapper">
            <Search placeholder="input search text" onSearch={onSearch} enterButton style={{color: '#555555', backgroundColor: "#ededed", outline: "#555555"}} />
        </div>
    )
}

export default SearchComponent;