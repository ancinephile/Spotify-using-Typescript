import { observer } from 'mobx-react';
import React from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import { useStore } from './Store/Store';

const Footer: React.FC = observer(() => {
    const store = useStore();
    const token: string | null = localStorage.getItem('token');
    const isPlaying: boolean = store.isPlaying;

    return (
        <div >{token ?
            <SpotifyPlayer play={isPlaying} token={token}
                uris={store.uri ? [store.uri] : []}
                autoPlay={true} showSaveIcon
                styles={{ bgColor: 'black', color: 'white', sliderColor: '#1cb954', trackNameColor: 'white', }} /> :
            <div></div>}
        </div>
    )
})

export default Footer