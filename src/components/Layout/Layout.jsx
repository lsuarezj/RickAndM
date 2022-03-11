import { Box } from '@mui/material'
import React from 'react'
import Filter from '../Filter/Filter'

const Layout = ({ children }) => {
    return (
        <Box component={'div'} >
            <Box component={'div'} display={'inline-grid'} sx={{ width: '20%' }} >
                <Filter></Filter>
            </Box>
            <Box component={'div'} display={'inline-grid'} sx={{ width: '80%' }}>
                <main>{children}</main>
            </Box>
        </Box>
    )
}

export default Layout 