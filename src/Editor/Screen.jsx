import React from 'react'
import Editorial from './Editorial';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import './styles.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Avatar } from '@mui/material';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

function Screen() {
  return (
    <>
    <header className='flex justify-between items-center p-3 pb-1'>
      <span>
      <Link to='/'>
        <img src={logo} alt='logo' height='50px' width='50px' className='cursor-pointer' />
      </Link>
      </span>
      <div className='flex-grow px-2 flex items-center justify-between'>
        <div>
          <h2 style={{ color: '#5f6572',padding : 3}}>
            Untitled Document
            <StarBorderOutlinedIcon style={{marginLeft : '20px',fontSize : 20}}/>
          </h2>
          <div className='flex items-center text-sm space-x-3'>
            <p className='options'>File</p>
            <p className='options'>Edit</p>
            <p className='options'>View</p>
            <p className='options'>Insert</p>
            <p className='options'>Format</p>
            <p className='options'>Tools</p>
            <p className='options'>Extensions</p>
            <p className='options'>Help</p>
          </div>
        </div>
        <div className='flex items-center space-x-2'>
          <ChatOutlinedIcon style={{ marginRight: '10px' ,cursor : 'pointer'}}/>
          <VideocamOutlinedIcon style={{ marginRight: '10px', cursor : 'pointer' }}/>
          <Button variant='contained' startIcon={<SendIcon />} style={{ marginRight: '10px',borderRadius : 20}}>
            Share
          </Button>
          <Avatar sx={{width : 40,height : 40,ml:3,backgroundColor:'#8d6e63',cursor : 'pointer'}}>K</Avatar>
        </div>
      </div>
    </header>
    <Editorial/>
    </>
  )
}

export default Screen;