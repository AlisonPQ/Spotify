# Spotify API

## 1. Clone this repository

`git@github.com:AlisonPQ/Spotify.git`

## 2. So what?

``` bash
cd Spotify
npm install
```

At this point this project is using this packages:

``` javascript
    "@mui/material": "^6.4.5",
    "mobx": "^6.13.2",
    "mobx-react-lite": "^4.0.7",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^7.2.0"
```

Before run this project, you should create an app and get a `CLIENT_ID` and copy it into .env file (yeah, you will nedd to create one), so you are gonna be able to see all configuration that you need in `.env.development` as an example like this:

``` bash
VITE_CLIENT_ID=id_client
VITE_REDIRECT_URI=http://localhost:3000/callback
VITE_AUTH_ENDPOINT=https://accounts.spotify.com/authorize
VITE_SCOPES = user-read-private,user-read-email,user-top-read
```

Run the project using the sript: 

``` bash
npm run dev
```

## 3. Features

- Your Spotify profile
- Your top artists
