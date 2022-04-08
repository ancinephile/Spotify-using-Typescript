import React from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';

const Footer: React.FC = () => {
    const token: string | null = localStorage.getItem('token');

    return (
        <div >{token ?
            <SpotifyPlayer play={true} token={token}
                styles={{ bgColor: 'black', color: 'white', sliderColor: '#1cb954', trackNameColor: 'white', }} /> :
            <div></div>}
        </div>
    )
}

export default Footer