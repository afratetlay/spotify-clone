// https://developer.spotify.com/documentation/web-playback-sdk.quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize"; // this is the end point

const redirectUri = "http://localhost:3000/";

const clientId = "3a65fb5ed3fa40ffb8e11cc49f0d4c30"; // We received when we set up spotify

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      // #accessToken=musupersecretkey&name=afra
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
// 1. Click Login button
// 2. Redirect to Spotify login page
// 3. Redirect to home page once logged in
