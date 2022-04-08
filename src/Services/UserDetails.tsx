import axios from "axios";

const spotify = axios.create({
  baseURL: 'https://api.spotify.com',
})

export class UserDetails {
  async getDetails(token: string) {
    const response = await spotify.get('/v1/me', {
      headers: { Authorization: `'Bearer ${token}'` },
    })
    return response;
  }
}

