import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [output, setOutput] = useState([]); 
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                console.log(res.data);
                setOutput(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div style= {{   backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15swQ3LYEkjA2IAOH4KsxIZVdDRWhOgovvQ&s')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh'
            }}>
                <br /><br /><br />
            <Typography variant='h1' style={{ padding:'0%',fontFamily:'Lobster', color: 'white', textAlign: 'center',fontSize:'400%',textShadow:'1px 1px 25px black,0 0 25px black,0 0  50px black' }}>Iter ad illustrationem spiritualem</Typography>
           <br /><br /> <Grid container spacing={3} justifyContent="center">
                {output.map((val, i) => (
                    <Grid item xs={12} md={4} key={i}>
                        <Card variant='outlined' style={{ border:'5px solid  darkblue',borderRadius:'20px',backgroundColor:'white', color: 'black', textAlign: 'center', height: '90%' }}>
                            <CardMedia
                                
                            />
                            <CardContent>
                                <Typography variant="h4" style={{ padding:'0 0 0 0',fontFamily: 'Lobster', color: 'darkblue' }}>
                                    {val.id}
                                </Typography>
                                <Typography variant="h6" style={{ fontFamily: 'Times New Roman', color: 'black' }}>
                                     {val.title}
                                </Typography>
                                <Typography variant="h1" style={{ padding:'0 0 9% 0', fontFamily: 'Times New Roman', color: 'grey',fontSize:'20px' }}>
                                     {val.body}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}


export default Home
