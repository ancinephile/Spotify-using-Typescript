import { observer } from 'mobx-react';
import React from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import { Store } from './Store/Store';

const Footer: React.FC = observer(() => {
    const token: string | null = localStorage.getItem('token');
    const isPlaying: boolean = Store.isPlaying;

    return (
        <div >{token ?
            <SpotifyPlayer play={isPlaying} token={token}
                uris={Store.uri ? [Store.uri] : []}
                autoPlay={true} showSaveIcon
                styles={{ bgColor: 'black', color: 'white', sliderColor: '#1cb954', trackNameColor: 'white', }} /> :
            <div></div>}
        </div>
    )
})

export default Footer