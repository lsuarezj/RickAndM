import { Accordion, AccordionDetails, AccordionSummary, Box, Link, Typography } from '@mui/material'
import React from 'react'
import Status from './Status'

const Filter = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box><h1>Filter</h1>
            <Link>Clear Filters</Link>
            <Box>
                <Status handleChange={handleChange} expanded={expanded}></Status>
            </Box>
        </Box>
    )
}

export default Filter