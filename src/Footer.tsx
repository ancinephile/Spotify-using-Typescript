import { observer } from 'mobx-react';
import React from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import { Store } from './Store/Store';

interface FooterProps {
    store: Store;
}
const Footer: React.FC<FooterProps> = observer(({ store }) => {
    const token: string | null = localStorage.getItem('token');
    const isPlaying: boolean = store.isPlaying;

    return (
        <div >{token ?
            <SpotifyPlayer play={isPlaying} token={token} uris={store.uri ? [store.uri] : ["spotify:artist:6HQYnRM4OzToCYPpVBInuU"]}
                styles={{ bgColor: 'black', color: 'white', sliderColor: '#1cb954', trackNameColor: 'white', }} /> :
            <div></div>}
        </div>
    )
})

export default Footer