import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Link, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Status = ({ handleChange, expanded }) => {
    let stats = ['Alive', 'Dead', 'Unknow']
    return (
        <><Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header">
                <Typography sx={{ width: '33%', flexShrink: 0 }}>Status</Typography>

            </AccordionSummary>
            <AccordionDetails>
                {stats.map(s => <Button key={s} variant="outlined">{s}</Button>)}
            </AccordionDetails>
        </Accordion></>
    )
}

export default Status 