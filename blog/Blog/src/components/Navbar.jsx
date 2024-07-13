import React, { useEffect, useState } from 'react'
import { AppBar, Box, Button, Card, CardContent, CardMedia, Grid, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Navbar = () => {
 
  return (
    <div>
      <Typography></Typography>
      <Box>
        <AppBar color='primary'>
            <Toolbar>
                <Typography variant='h4' fontFamily= 'Lobster'>Iter per Sanctum Quotes</Typography>
                <Button variant='contained' color="error" borderRadius='20px'style={{ marginLeft: 'auto' }  } > 
                  <Link to={'/'} 
                  style={{textDecoration:"none",color:'white'}}> 
                  HOME 
                  </Link> 
                  </Button>&nbsp;&nbsp;
                <Button variant='contained'color="success">
                 <Link to={'/a'}  
                  style={{textDecoration:"none",color:'white'}}> 
                  ADD
                  </Link> 
                  </Button>
                </Toolbar>
        </AppBar>
      </Box>
      
      

    </div>
  )
}

export default Navbar
