import axios from "axios";

const spotify = axios.create({
    baseURL: 'https://api.spotify.com',
  })
  
  export class FeaturedPlaylistService {
    async getFeaturedPlaylist(token: string) {
      const response = await spotify.get('/v1/browse/featured-playlists', {
        headers: { Authorization: `'Bearer ${token}'` },
      })
      return response;
    }
  }