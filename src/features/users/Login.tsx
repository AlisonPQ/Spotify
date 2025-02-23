import { Container, Stack } from "@mui/material";
import { getSpotifyAuthURL } from "../../app/api/auth";
import SpotifyButton from "../../app/common/SpotifyButton";

const Login = () => {
  const handleLogin = () => {
    window.location.href = getSpotifyAuthURL();
  };

  return (
    <Container sx={{ textAlign: "center", mt: 5 }}>
      <Stack spacing={2} direction="column" alignItems="center">
        <SpotifyButton variant="outlined" onClick={handleLogin}>Sign Up with Spotify</SpotifyButton>
      </Stack>
    </Container>
  );
};

export default Login;
