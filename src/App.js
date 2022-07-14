import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";

const spotify = new SpotifyWebApi();

// 3a65fb5ed3fa40ffb8e11cc49f0d4c30
function App() {
  const [token, setToken] = useState(null);
  //Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl(); // We got the token from the URL
    window.location.hash = ""; // Stripped it so it no longer sits in the URL
    const _token = hash.access_token; // Then stored it inside of the state below, we have the token in memory

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token); // giving the access token to spotify api

      spotify.getMe().then((user) => {
        console.log("hello", user);
      });
    }

    console.log("I HAVE A TOKEN ", token);
  }, []);
  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
