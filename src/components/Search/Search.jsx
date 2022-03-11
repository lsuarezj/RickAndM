import { Button, TextField } from '@mui/material';
import React from 'react'

const Search = ({ setSearch, updatePageNumber }) => {
    let searchBtn = (e) => {
        e.preventDefault();
    };

    return (
        <form>
            <TextField id="outlined-basic" label="Search" variant="filled"
                onChange={(e) => {
                    updatePageNumber(1);
                    setSearch(e.target.value);
                }}
                placeholder="Search for characters"
                type="text" sx={{ color: 'white' }} 
            />
            <Button variant="contained" color="primary"
                onClick={searchBtn}>
                Search
            </Button>
        </form>
    );
};

export default Search