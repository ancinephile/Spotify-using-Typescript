import React, { useState } from 'react';
import { useEffect } from 'react'
import { Store } from '../Store/Store';
import { Link } from "react-router-dom";
import { observer } from 'mobx-react'
import dp from './empty_profile.png';

const Navbar: React.FC = observer(() => {
    const date: Date = new Date();
    const [heading, setHeading] = useState("");
    let show_profilePic: boolean = false;
    const user: any = Store.user;
    const token: string | null = localStorage.getItem('token');
    const userDetail = async () => {
        if (token) {
            await Store.users(token).then(res => Store.setUser(res));
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            let time: number = date.getHours();
            if (time >= 6 && time < 12) {
                setHeading("Good Morning!");
            } else if (time >= 12 && time < 16) {
                setHeading("Good Afternoon!");
            } else {
                setHeading("Good Evening!");
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [])

    useEffect(() => {
        userDetail();
    }, []);

    if (user) {
        if (user.data.images[0]) {
            show_profilePic = true;
        }
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