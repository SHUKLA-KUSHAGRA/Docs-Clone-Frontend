import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

function Cards(props) {
  return (
    <>
    <Card sx={{ maxWidth: 300 ,maxHeight : 300,cursor : 'pointer',marginX : 3}}>
      <CardMedia
        sx={{ height: 200 , width : 150 }}
        image={props.src}
        title="template"
      />
    </Card>
    </>
  )
}

export default Cards;