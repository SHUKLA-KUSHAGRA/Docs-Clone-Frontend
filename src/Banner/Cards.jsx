import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

function Cards(props) {
  return (
    <>
    <Link to='/edit'>
    <Card sx={{ maxWidth: 300 ,maxHeight : 300,cursor : 'pointer',marginX : 3}}>
      <CardMedia
        sx={{ height: 200 , width : 150 }}
        image={props.src}
        title="template"
      />
    </Card>
    </Link>
    </>
  )
}

export default Cards;