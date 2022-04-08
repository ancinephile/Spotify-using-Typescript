import axios from "axios";

const spotify = axios.create({
    baseURL: 'https://api.spotify.com',
  })
  
  export class ArtistTrackService {
    async getArtistTrack(token: string) {
      const response = await spotify.get('/v1/artists/4YRxDV8wJFPHPTeXepOstw/albums', {
        headers: { Authorization: `'Bearer ${token}'` },
      })
      return response;
    }
  }