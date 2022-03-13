import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';


const mStyles = makeStyles({
    characterDead: {
        filter: `sepia(1)`
    },
    characterUnknow: {
        filter: `grayscale(1)`
    },
    characterAlive: {
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2);'
    }
});

const Character = ({ character }) => {

    const classes = mStyles();

    const getFontSize = (text) => {
        if (text.length > 20)
            return text.split(" ")[0].length > 10 ? '1rem' : '1rem';
        else
            return text.split(" ")[0].length > 10 ? '1.2rem' : '1.4rem';
    };

    let status = character.status === 'Alive' ? classes.characterAlive : classes.characterDead;

    return (
        <Card >
            <CardMedia
                component="img"
                image={character.image}
                alt={character.name}
                className={(character.status === 'unknown' ? classes.characterUnknow : status)}
                sx={{ objectFit: 'contain' }} />
            <CardContent className='character'>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: getFontSize(character.name), fontWeight: '500' }}>
                    {character.name}
                </Typography>
                <Typography variant="body2" component="div">
                    <Typography color="text.secondary" ><strong>Species: </strong>{character.species}</Typography>
                    <Typography color="text.secondary"><strong>Gender: </strong>{character.gender}</Typography>
                    <Typography color="text.secondary" className={character.status}><strong>Status: </strong>{character.status}</Typography>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Character