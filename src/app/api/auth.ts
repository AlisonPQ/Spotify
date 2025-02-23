const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
const authUrl = import.meta.env.VITE_SPOTIFY_AUTH_ENDPOINT;
const scopes = import.meta.env.VITE_SPOTIFY_SCOPES.split(",");

export const getSpotifyAuthURL = (): string => {
  const url = `${authUrl}?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(
    redirectUri
  )}&scope=${encodeURIComponent(scopes.join(" "))}`;
  return url;
};

export const getTokenFromUrl = (): string | null => {
  const hash = window.location.hash.substring(1); // Remove `#`
  const params = new URLSearchParams(hash);
  return params.get("access_token");
};
