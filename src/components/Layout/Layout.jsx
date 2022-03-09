import { Box } from '@mui/material'
import React from 'react'
import Filter from '../Filter/Filter'

const Layout = ({ children }) => {
    return (
        <Box component={'div'} >
            <Box component={'div'} display={'inline-grid'} >
                <Filter></Filter>
            </Box>
            <Box component={'div'} display={'inline-grid'}>
                <main>{children}</main>
            </Box>
        </Box>
    )
}

export default Layout 