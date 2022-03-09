import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

const Character = ({ character }) => {
    return (
        <Card>
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
                <Typography variant="body2" color="text.secondary">
                    <Typography color="text.secondary" ><strong>Species: </strong>{character.species}</Typography>
                    <Typography color="text.secondary"><strong>Gender: </strong>{character.gender}</Typography>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Character