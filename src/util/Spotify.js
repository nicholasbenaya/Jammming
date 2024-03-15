const redirect_uri = "http://localhost:3000/";
const apiUrl = "https://api.spotify.com/v1";
let accessToken = "";

const Spotify = {
  _clientId: "ab8bfa2239654351ab0539d521e51f7a",
  get clientId() {
    return this._clientId;
  },
  async getAccessToken() {
    // if there is a token already, return the token immediately
    if (accessToken) return accessToken;
    // if authorized, extract the token along with its expiry
    const tokenInUrl = window.location.href.match(/access_token=([^&]*)/);
    const expiry = window.location.href.match(/expires_in=([^&]*)/);
    if (tokenInUrl && expiry) {
      accessToken = tokenInUrl[1];
      window.setTimeout(() => {
        accessToken = "";
        window.history.pushState("Access Token", null, "/");
      }, Number(expiry[1]) * 1000);
      return accessToken; // return the token
    }

    // if unauthorized, ask for authorization
    const url = `https://accounts.spotify.com/authorize?client_id=${this.clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirect_uri}`;
    window.location = url;
  },
  async getUserId() {
    let userId = "";
    const url = apiUrl + "/me";
    const token = await this.getAccessToken();
    // console.log("(in getUserId) token:", token);
     try {
      const response = await fetch(url, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        const jsonResponse = await response.json();
        userId = jsonResponse.id;
        // console.log("(in getUserId) userID: ", userId);
        return userId;
      } else {
        throw new Error("Cannot fetch UserID!");
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  async createPlaylist(playlistName) {
    if (!playlistName) return;
    const userId = await this.getUserId();
    // console.log("(in createPlaylist) userID:", userId);
    const token = await this.getAccessToken();
    // console.log("(in createPlaylist) token:", token);
    let playlistId = "";
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/users/${userId}/playlists`,
        {
          method: "post",
          headers: { Authorization: `Bearer ${token}` },
          body: JSON.stringify({
            name: playlistName,
          }),
        }
      );
      if (response.ok) {
        const jsonResponse = await response.json();
        playlistId = jsonResponse.id;
        // console.log(playlistId);
        return playlistId;
      } else {
        throw new Error("Cannot Create Playlist!");
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  async addTracksToPlaylist(playlistName, uris) {
    const token = await this.getAccessToken();
    // console.log("(in addTracksToPlaylist) token:", token);
    const playlistId = await this.createPlaylist(playlistName);
    // console.log("(in addTrackToPlaylist) playlistId:", playlistId);
    const addTrackUrl = apiUrl + `/playlists/${playlistId}/tracks`;
    try {
      const addTrackResponse = await fetch(addTrackUrl, {
        method: "post",
        headers: { Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          uris: uris,
        }),
      });
      if (addTrackResponse.ok) {
        return;
      } else {
        throw new Error("Cannot add Tracks to Playlist!");
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  async searchForTracks(query) {
    const token = await this.getAccessToken();
    let tracks;
    // console.log("(In searchForTracks) token:", token);
    const urlToFetch = apiUrl + `/search?q=${query}&type=track`;
    try {
      const response = await fetch(urlToFetch, {
        method: "GET",
        headers: {Authorization: `Bearer ${token}`}
      })
      if(response.ok) {
        const jsonResponse = await response.json();
        tracks = jsonResponse.tracks.items.map(track => (
          {
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri
          }
        ));
        return tracks;
      } else {
        throw new Error("Failed to fetch for tracks!");
      }
    } catch(error) {
      console.error(error);
      throw error;
    }
  }
};

export default Spotify;
