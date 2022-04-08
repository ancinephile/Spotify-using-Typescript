import React from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { Playlist } from '../Model/Playlist'

interface PlaylistCard {
    album: Playlist
}

const AlbumSearchResult:React.FC<PlaylistCard>=({album})=> {
    const spotify = new SpotifyWebApi();
    const image= JSON.parse(JSON.stringify(album.images[0]));
    const playAlbum = (album:Playlist) => {
        spotify.setAccessToken(window.localStorage.getItem('token'));
        spotify.play({
            context_uri: album?.uri
        })
    };

    return (
        <div className="cursor-pointer" onClick={()=>playAlbum(album)}>
            <div className="p-[10px] cursor-pointer "  >
                <img src={image["url"]} alt="" className="w-[100%]" />
                <div className="container">
                    <div className="text-white">{album.name}</div>
                </div>
            </div>
        </div>
    )
}

export default AlbumSearchResult