import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';

const Character = ({ character }) => {

    const mStyles = makeStyles({
        characterDead: {
            filter: `grayscale(1)`
        },
        characterAlive: {
            border: 'Solid 5px green'
        }
    });
    const classes = mStyles();
    console.log(character.status == 'Alive' ? classes.characterAlive : classes.characterDead);

    return (
        <Card className={(character.status == 'Alive' ? classes.characterAlive : classes.characterDead)}>
            <CardMedia
                component="img"
                image={character.image}
                alt={character.name}
                sx={{ objectFit: 'contain' }}

            />
            <CardContent className='character'>
                <Typography gutterBottom variant="h5" component="div">
                    {character.name}
                </Typography>
                <Typography variant="body2" component="div">
                    <Typography color="text.secondary" ><strong>Species: </strong>{character.species}</Typography>
                    <Typography color="text.secondary"><strong>Gender: </strong>{character.gender}</Typography>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Character