import React from 'react'
import SpotifyWebApi from 'spotify-web-api-js';
import { Playlist } from '../Model/Playlist'
import { useStore } from '../Store/Store';

interface PlaylistCard {
    track: Playlist
}

const TrackSearchResult: React.FC<PlaylistCard> = ({ track }) => {
    const store = useStore();
    const Track = JSON.parse(JSON.stringify(track.album));
    const spotify = new SpotifyWebApi();
    const playTrack = (track: Playlist) => {
        store.setPlaying(true);
        store.setURI(track.uri);
        spotify.setAccessToken(window.localStorage.getItem('token'));
        spotify.play({
            uris: [track?.uri]
        })
    };

    return (
        <div className="Song">
            <div className="flex flex-row m-2 align-items-center cursor-pointer bg-black" onClick={() => playTrack(track)}>
                <img src={Track["images"]["0"]["url"]} alt="" className="h-[64px] w-[64px]" />
                <div className="ml-3 pl-[10px]">
                    <div className="text-white">{track.name}</div>
                    <div className="text-gray-600">{Track["artists"]["0"]["name"]}</div>
                </div>
            </div>
        </div>
    )
}

export default TrackSearchResult