import { observer } from 'mobx-react';
import React from 'react'
import SpotifyWebApi from 'spotify-web-api-js';
import { Playlist } from '../Model/Playlist';
import { useStore } from '../Store/Store';

interface PlaylistCard {
    playlist: Playlist,
}

const PlaylistCards: React.FC<PlaylistCard> = observer(({ playlist }) => {
    const store = useStore();
    const spotify = new SpotifyWebApi();
    const url = JSON.stringify(playlist.images[0])
    const url1 = JSON.parse(url);
    const playPlaylist = (album: Playlist) => {
        store.setPlaying(true);
        store.setURI(album.uri);
        spotify.setAccessToken(window.localStorage.getItem('token'));
        spotify.play({
            context_uri: album?.uri
        })
    };
    return (
        <div className="p-[10px] cursor-pointer hover:bg-gray-800" key={playlist.id} onClick={() => playPlaylist(playlist)}  >
            <img src={url1["url"]} alt="" className="w-[100%]" />
            <div className="container">
                <div className="title">{playlist.name}</div>
                <div className="text-[12px] text-gray-600">{playlist.description}</div>
            </div>
        </div>
    )
})

export default PlaylistCards