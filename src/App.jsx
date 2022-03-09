import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character/Character';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Layout from './components/Layout/Layout';


function App() {
  const mStyles = makeStyles({
    gridcomponent: {
      padding: '25px'
    }
  })
  const [characters, setCharacters] = useState([]);

  const getData = async () => {
    const res = await axios.get("https://rickandmortyapi.com/api/character");

    setCharacters(...[], res.data.results);
    console.log(characters);
  }
 
  useEffect(() => {
    getData();
  }, [])

  const classes = mStyles();

  return (
    <div className="App">
      <Layout>
        <Grid container spacing={4} className={classes.gridcomponent} >
          {characters.length !== 0 ? characters.map((c) => {
            return <Grid item xs={12} sm={6} md={4} lg={2}><Character key={c.name} character={c}></Character>     </Grid>
          }
          ) : <p>there are no data to show</p>}
        </Grid>
      </Layout>
    </div>
  );
}

export default App;
