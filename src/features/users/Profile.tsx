import { useEffect, useState } from "react";
import { User } from "../../app/models/user";
import { useStore } from "../../app/stores/store";
import { useAuth } from "../../app/context/AuthContext";
import { Avatar, Card, CardContent, CircularProgress, styled, Typography } from "@mui/material";
import SpotifyButton from "../../app/common/SpotifyButton";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const ProfileCard = styled(Card)({
  maxWidth: 400,
  backgroundColor: "#121212",
  color: "white",
  textAlign: "center",
  borderRadius: "12px",
  padding: "20px",
  margin: "auto",
  boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
});

const ProfileAvatar = styled(Avatar)({
  width: 120,
  height: 120,
  margin: "auto",
  border: "3px solid #1DB954",
});

export default observer(function Profile() {
  const [user, setUser] = useState<User | undefined>(undefined);
  const { userStore } = useStore();
  const { token } = useAuth();

  const navigate = useNavigate();

  const goToMyTopArtists = () => {
    navigate("/topartists");
  };

  useEffect(() => {
    if (token) {
      userStore.getUserProfile(token).finally(() => {setUser(userStore.user)});
    }
  }, [token, userStore]);

  if (!user) {
    return <CircularProgress sx={{ color: "#1DB954", display: "block", margin: "auto" }} />;
  }
  
  return (
    <>
      <ProfileCard>
        <ProfileAvatar src={user.images.length > 0 ? user.images[0].url : ""} />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {user.display_name}
          </Typography>
          <Typography variant="subtitle1" color="gray">
            @{user.id}
          </Typography>
          <Typography variant="body2">{user.email}</Typography>
          <Typography variant="body2">{user.followers.total} Followers</Typography>
          <Typography variant="body2">🌍 {user.country}</Typography>
        </CardContent>
      </ProfileCard>
      <SpotifyButton onClick={goToMyTopArtists} >See my top Artists</SpotifyButton>
    </>
  );
});