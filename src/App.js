import React, { useState } from "react";
import { Grid, Container } from "@mui/material"; // Added Container for better centering
import { SearchBar, VideoList, VideoDetail } from "./components";
import youtube from "./api/youtube";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null); // Changed to null

  const handleSubmit = async (searchTerm) => {
    const { data: { items } } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyAlQg7NeWOj9OKWDXrFdC2Fg_w4L7RQ0Jg", // Keep an eye on this, usually best in .env!
        q: searchTerm,
      }
    });

    setVideos(items);
    setSelectedVideo(items[0]); // This automatically picks the first video after search
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} justifyContent="center" style={{ marginTop: '20px' }}>
        <Grid item xs={12}>
          <SearchBar onFormSubmit={handleSubmit} />
        </Grid>
        
        {/* If we have a video, show the player (8 cols). If not, maybe show a message. */}
        <Grid item xs={12} md={8}>
          <VideoDetail video={selectedVideo} />
        </Grid>

        {/* Sidebar (4 cols) */}
        <Grid item xs={12} md={4}>
          <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;