const client_id = process.env.SPOTIFY_CLIENT_ID;
const scope = "user-modify-playback-state";
const url = process.env.URL;

export const spotifyAuthRedirect = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&scope=${scope}&redirect_uri=${url}`;