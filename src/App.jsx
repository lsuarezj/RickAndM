import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character/Character';
import { Box, Grid, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Layout from './components/Layout/Layout';
import Search from './components/Search/Search';
import Pagination from '@mui/material/Pagination';

function App() {
  const mStyles = makeStyles({
    gridcomponent: {
      padding: '25px'
    }
  })
  let [characters, setCharacters] = useState([]);
  let [pageNumber, updatePageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [TotalPageCount, setTotalPageCount] = useState(0);
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;


  const getData = async () => {
    if (search.length < 4 && search.length != 0) {
      return;
    }
    const res = await axios.get(api);
    console.log(res);
    setCharacters(...[], res.data.results);
    setTotalPageCount(res.data.info.pages);
  }

  useEffect(() => {
    getData();
  }, [api])

  const handlePageChange = (event, value) => {
    updatePageNumber(value);
  };
  const classes = mStyles();

  return (
    <div className="App">
      <Layout>
        <Box display="flex" flexWrap={"wrap"} >
          <Box m="auto">
            <h1 className="text-center mb-3">Characters</h1>
          </Box>
          <Box m="auto" sx={{ padding: '5px' }}>
            <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
          </Box>
          <Box m="auto" sx={{ padding: '5px' }}>
            <Pagination size='large' count={TotalPageCount} page={pageNumber} onChange={handlePageChange} color="primary" />
          </Box>
          <Box>
            <Grid container spacing={4} className={classes.gridcomponent} >
              {characters.length !== 0 ? characters.map((c, index) => {
                return <Grid key={c.name + index} item xs={12} sm={6} md={4} lg={2}><Character key={c.name} character={c}></Character>     </Grid>
              }
              ) : <p>there are no data to show</p>}
            </Grid>
          </Box>
          <Box m="auto">
            <Pagination size='large' count={TotalPageCount} page={pageNumber} onChange={handlePageChange} color="primary" />
          </Box>
        </Box>
      </Layout>
    </div>
  );
}

export default App;
