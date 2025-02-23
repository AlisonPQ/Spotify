import { useEffect, useState } from "react";
import { Artist } from "../../app/models/artist";
import { useStore } from "../../app/stores/store";
import { useAuth } from "../../app/context/AuthContext";
import { Avatar, Box, Card, CardContent, CircularProgress, Grid, Typography } from "@mui/material";
import SpotifyButton from "../../app/common/SpotifyButton";
import { useNavigate } from "react-router-dom";

export default function TopArtists() {
  const [artists, setArtists] = useState<Artist[] | undefined>([]);
  const { artistStore } = useStore();
  const { token } = useAuth();
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  useEffect(() => {
    if (token) {
      artistStore.getArtists(token).finally(() => { setArtists(artistStore.artists) });
    }
  }, [artistStore, token]);

  if (!artists) {
    return <CircularProgress sx={{ color: "#1DB954", display: "block", margin: "auto" }} />;
  }

  return (
    <>
      <div style={{ padding: '20px' }}>
        <SpotifyButton onClick={goBack} >Go back</SpotifyButton>
        <h1>My Top Artists</h1>
        <Grid container spacing={3}>
          {artists.map((artist, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  display: 'flex',
                  backgroundColor: '#121212',
                  color: '#fff',
                  height: '200px',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    transition: 'transform 0.2s ease-in-out',
                  }
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2 }}>
                  <Avatar
                    alt={artist.name}
                    src={artist.images.length > 0 ? artist.images[0].url : ""}
                    sx={{ width: 100, height: 100 }}
                  />
                </Box>
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h6">{artist.name}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
