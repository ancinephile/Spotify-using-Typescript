import React from 'react';
import { observer } from 'mobx-react'
import { Store } from '../Store/Store';
import { useEffect } from 'react'
import dp from './empty_profile.png';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const spotifyStore = new Store();
var openInSpotify: string = "";
const ProfileView: React.FC = () => {
    var Show_pic = false;
    const user = spotifyStore.user;
    const token: string | null = localStorage.getItem('token');
    const userDetail = async () => {
        if (token) {
            await spotifyStore.users(token).then(res => spotifyStore.setUser(res));
        }
    }
    useEffect(() => {
        userDetail();
    });


    if (user) {
        if (user.data.images[0]) {
            Show_pic = true;
        }
        openInSpotify = `https://open.spotify.com/user/${user.data.id}`;
    }

    return (
        <div className="flex flex-col">
            <div className="text-white text-[40px] py-[20px] px-[50px]">Profile</div>
            {user ?
                <div className="flex flex-row">
                    <div className="h-64 w-64 px-[30px]">
                        {Show_pic ?
                            <img className="rounded-full" src={user.data.images[0].url} alt="" /> : <img className="rounded-full" src={dp} alt="" />}
                    </div>
                    <div>
                        <br></br>
                        <div className="text-white text-[30px]">{user.data.display_name}</div>
                        <div className="text-gray-600">{user.data.email}</div><br></br>
                        <button className="p-[10px] w-[200px] text-white bg-[#1ed760] rounded-full hover:bg-white hover:text-[#1ed760]" onClick={() => window.open(openInSpotify)}>Open in Spotify{OpenInNewIcon && <OpenInNewIcon />}</button>
                    </div>
                </div> : <div className="text-center text-[30px] text-[#1ed760]">Loading.....</div>}
        </div>
    )
}

const Profile = observer(ProfileView)
export default Profile;