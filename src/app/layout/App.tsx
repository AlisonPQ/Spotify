import { observer } from "mobx-react-lite";
import Login from "../../features/users/Login";
import { useAuth } from "../context/AuthContext";
import Profile from "../../features/users/Profile";
import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#1DB954" },
    background: { default: "#181818", paper: "#121212" },
    text: { primary: "#ffffff" },
  },
});

function App() {
  const { token } = useAuth();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ display: "flex", justifyContent: "center", height: "100vh", alignItems: "center" }}>
        {token ? (
          <Profile />
        ) : (
          <Login />
        )}
      </Container>
    </ThemeProvider>

  )
}

export default observer(App);
