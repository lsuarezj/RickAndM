import { Box, TextField } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import React from 'react'

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'white',
    },
    'label.Mui-root': {
        color: 'white'
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#2960be',
    },
    '& .MuiOutlinedInput-root': {
        "& .MuiInputBase-input": {
            color: "white"
        },
        '& fieldset': {
            borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: '#2960be',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#2960be',
        },
    },
});

const Search = ({ setSearch, updatePageNumber }) => {

    return (
        <form>
            <Box width={'80vw'}>
                <CssTextField id="Search" label="Search"
                    onChange={(e) => {
                        updatePageNumber(1);
                        setSearch(e.target.value);
                    }}
                    placeholder="Search for characters"
                    type="text" fullWidth={true}
                />
            </Box>
        </form>
    );
};

export default Search