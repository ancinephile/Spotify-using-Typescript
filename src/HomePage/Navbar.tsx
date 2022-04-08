import React from 'react';
import { useEffect } from 'react'
import { Store } from '../Store/Store';
import { Link } from "react-router-dom";
import { observer } from 'mobx-react'
import dp from './empty_profile.png';

const spotifyStore = new Store();

const Navbar: React.FC = observer(() => {
    const date: Date = new Date();
    var time: number = date.getHours();
    var heading: string = "";
    var show_profilePic: boolean = false;
    const user: any = spotifyStore.user;
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
            show_profilePic = true;
        }
    }

    if (time >= 6 && time < 12) {
        heading = "Good Morning!";
    } else if (time >= 12 && time < 16) {
        heading = "Good Afternoon!";
    } else {
        heading = "Good Evening!"
    }

    return (
        <div>
            <div className="flex flex-col h-[15vh]">
                < h1 className="pl-[30px] text-white text-[35px] py-[20px] w-[60vh]" > {heading}</h1 >
                {user ?
                    <Link to="/profile" >
                        {show_profilePic ? <img className="absolute right-0 top-[30px] w-[50px] h-[50px] rounded-full " src={user.data.images[0].url} alt="" /> :
                             <img className="absolute right-0 top-[30px] w-[50px] h-[50px] rounded-full " src={dp} alt="" />}
                    </Link>
                    :
                    <Link to="/profile">
                         <img className="absolute right-0 top-[30px] w-[50px] h-[50px] rounded-full " src={dp} alt="" />
                    </Link>
                }
            </div >
        </div>
    )
})

export default Navbar