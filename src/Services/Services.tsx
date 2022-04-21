import axios from "axios";

const spotify = axios.create({
    baseURL: 'https://api.spotify.com',
})

export const getArtistTrack = async (token: string) => {
    const response = await spotify.get('/v1/artists/4YRxDV8wJFPHPTeXepOstw/albums', {
        headers: { Authorization: `'Bearer ${token}'` },
    })
    return response;
}

export const getFeaturedPlaylist = async (token: string) => {
    const response = await spotify.get('/v1/browse/featured-playlists', {
        headers: { Authorization: `'Bearer ${token}'` },
    })
    return response;
}

export const getDetails = async (token: string) => {
    const response = await spotify.get('/v1/me', {
        headers: { Authorization: `'Bearer ${token}'` },
    })
    return response;
}

