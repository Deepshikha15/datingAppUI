import React from 'react';
import './SwipeButton.css';
import ReplayIcon from '@mui/icons-material/Replay';
import ClearIcon from '@mui/icons-material/Clear';
import GradeIcon from '@mui/icons-material/Grade';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';

export default function SwipeButton() {
  return (
    <div className='swipeButtons'>
        <IconButton className='swipeButtons__repeat'>
            <ReplayIcon fontSize='large'/>
        </IconButton>
        <IconButton className='swipeButtons__left'>
            <ClearIcon fontSize='large'/>
        </IconButton>
        <IconButton className='swipeButtons__star'>
            <GradeIcon fontSize='large'/>
        </IconButton>
        <IconButton className='swipeButtons__right'>
            <FavoriteBorderIcon fontSize='large'/>
        </IconButton>
        <IconButton className='swipeButtons__lightning'>
            <FlashOnIcon fontSize='large'/>
        </IconButton>
    </div>
  )
}
