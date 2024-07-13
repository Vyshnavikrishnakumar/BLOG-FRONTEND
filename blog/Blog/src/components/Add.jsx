import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Add = () => {
  return (
    <div >
      <br /><br /><br /><br /><br /><br /><br />
      <Typography variant='h3'style={{ padding:'0%',fontFamily:'Lobster', color: 'white', textAlign: 'center',fontSize:'700%',textShadow:'1px 1px 25px black,0 0 25px black,0 0  50px black' }}>
      Iter Spirituale</Typography>
      <Typography variant='h5'style={{padding:'0.5%',fontFamily:'Lobster', color: 'black', textAlign: 'center'}}> Latin Spiritual Quotes</Typography>
      <br />

      <TextField variant='outlined' label='Title'></TextField>
      <br /><br /><br />
      <TextField variant='outlined' label='Description'></TextField>
      <br /><br /><br />
      <TextField variant='outlined' label='Author'></TextField>
      <br /><br /><br /><Button variant='contained'>
                 <Link to={'/'}  
                  style={{textDecoration:"none",color:'white'}}> 
                  SUBMIT
                  </Link> 
                  </Button>
    </div>
  )
}

export default Add
