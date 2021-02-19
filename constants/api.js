//const client_id = "d14abd6400894ddb9e50459bd431a659"; // Your client id
const client_id = process.env.SPOTIFY_CLIENT_ID;
//const url = "http://localhost:3000";
const url = document.location.origin;

export const spotifyAuthRedirect = `https://accounts.spotify.com/authorize?client_id=${client_id}&redirect_uri=${url}&response_type=token&scope=${scope}`;