import React, { useState, useEffect } from 'react';
import Login from "./Login/Login";
import { ParamsFromUrl } from './Utils/ParamsFromUrl'
import Sidebar from "../src/HomePage/Sidebar";
import HomePage from './HomePage/HomePage';
import Profile from './HomePage/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './HomePage/Search';
import Footer from './Footer';

const LandingPage: React.FC = () => {
    const [token, setToken] = useState<string>("");

    const logout = () => {
        setToken("");
    }

    useEffect(() => {
        const hash = ParamsFromUrl()
        window.location.hash = "";
        const _token: string = hash.access_token;
        if (_token) {
            setToken(_token);
            localStorage.setItem('token', _token);
        }
    }, [])

    return (
        <div>
            {token ?
                <Router><div className="flex flex-col">
                    <div className="flex flex-row bg-black min-h-screen max-h-full">
                        <div className="w-1/6">
                            <Sidebar logout={logout} />
                        </div>
                        <div className="w-5/6 relative">
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="profile" element={<Profile />} />
                                <Route path="search" element={<Search />} />
                            </Routes>
                        </div>
                    </div>
                    <div className="fixed bottom-0 w-[100%]">
                        <Footer />
                    </div>
                </div>
                </Router>
                : <Login />}
        </div>
    )
}

export default LandingPage