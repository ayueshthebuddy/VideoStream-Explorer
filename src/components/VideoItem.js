import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper 
        onClick={() => onVideoSelect(video)} 
        elevation={1}
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          cursor: 'pointer',
          padding: '10px',
          transition: 'transform 0.2s, box-shadow 0.2s', // Smooth transition
          '&:hover': {
            backgroundColor: '#f5f5f5', // Light grey on hover
            transform: 'scale(1.02)',    // Slight "pop" out effect
            boxShadow: 4                 // Deeper shadow on hover
          }
        }}
      >
        <img 
          style={{ marginRight: '20px', width: '120px', borderRadius: '4px' }} 
          alt="thumbnail" 
          src={video.snippet.thumbnails.medium.url} 
        />
        <div>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
            {video.snippet.title}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            {video.snippet.channelTitle}
          </Typography>
        </div>
      </Paper>
    </Grid>
  );
};

export default VideoItem;