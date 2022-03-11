import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character/Character';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Layout from './components/Layout/Layout';
import Search from './components/Search/Search';


function App() {
  const mStyles = makeStyles({
    gridcomponent: {
      padding: '25px'
    }
  })
  let [characters, setCharacters] = useState([]);
  let [pageNumber, updatePageNumber] = useState(1);
  let [search, setSearch] = useState("");


  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;


  const getData = async () => {
    console.log(search);

    if (search.length < 4 && search.length != 0) {
      return;
    }
    const res = await axios.get(api);

    setCharacters(...[], res.data.results);
    console.log(characters);
  }

  useEffect(() => {
    getData();
  }, [api])

  const classes = mStyles();

  return (
    <div className="App">
      <Layout>
        <h1 className="text-center mb-3">Characters</h1>
        <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
        <Grid container spacing={4} className={classes.gridcomponent} >
          {characters.length !== 0 ? characters.map((c, index) => {
            return <Grid key={c.name + index} item xs={12} sm={6} md={4} lg={2}><Character key={c.name} character={c}></Character>     </Grid>
          }
          ) : <p>there are no data to show</p>}
        </Grid>
      </Layout>
    </div>
  );
}

export default App;
