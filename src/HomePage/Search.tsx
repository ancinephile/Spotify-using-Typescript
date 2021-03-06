import axios from 'axios';
import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react'
import { Playlist } from '../Model/Playlist';
import { Store } from '../Store/Store';
import AlbumSearchResult from './AlbumSearchResult';
import TrackSearchResult from './TrackSearchResult';

const Search: React.FC = observer(() => {
    const [search, setSearch] = useState<string>("");
    const [types, setTypes] = useState<string>("track,album");
    const token: string | null = window.localStorage.getItem("token");
    let searchAlbums: Playlist[] | null = Store.SearchAlbums;
    let searchTracks: Playlist[] | null = Store.SearchTracks;

    useEffect(() => {

        if (!search) {
            Store.setSearchAlbums([]);
            Store.setSearchTracks([]);
        }

        if (types === "track") {
            Store.setSearchAlbums([]);
        };
        if (types === "album") {
            Store.setSearchTracks([]);
        };

        if (search) {
            axios.get('https://api.spotify.com/v1/search', {
                headers: {
                    Authorization: 'Bearer ' + token,
                },
                params: {
                    q: search,
                    type: types,
                    include_external: 'audio'
                }
            }).then((response) => {
                if (response.data.tracks) {
                    Store.setSearchTracks(response.data.tracks.items);
                }
                if (response.data.albums) {
                    Store.setSearchAlbums(response.data.albums.items);
                }
            })
        }

    }, [search, token, types])

    return (
        <div className="p-[20px]">
            <div className="flex flex-col">
                <div className="container flex  ">
                    <input className="w-[100%] h-[35px] pl-[10px] rounded-full justify-center items-center focus:outline-none focus:shadow-white"
                        placeholder="Search for artists, music and genres..." type="text" value={search}
                        onChange={(e: React.ChangeEvent<any>) => setSearch(e.target.value)}>
                    </input>
                </div>
                <br></br>
                <select className="absolute top-[70px] right-[20px] pl-[5px] focus:outline-none rounded-full justify-center items-center w-[10%] h-[35px]"
                    onChange={e => setTypes(e.target.value)} >
                    <option value="track,album">All</option>
                    <option value="album">Albums</option>
                    <option value="track">Songs</option>
                </select>
                <div className="albums">
                    {searchAlbums && searchAlbums.length !== 0 ?
                        <div >
                            <h4 className="text-white text-[25px] pb-[5px] pt-[10px] pl-[5px]" >Albums</h4>
                            <div className="flex flex-row">{searchAlbums.slice(0, 6).map(album => (
                                <AlbumSearchResult key={album.uri} album={album} />
                            ))}
                            </div>
                        </div> : <div></div>}
                </div>
                <div className="flex-grow-1 my-2" style={{ overflowY: "auto", paddingBottom: "5%" }}>
                    {searchTracks && searchTracks.length !== 0 ?
                        <div>
                            <h4 className="text-white text-[25px] pb-[5px] pt-[5px] pl-[5px]">Songs</h4>
                            <div className="flex flex-col">{searchTracks.map(track => (
                                <TrackSearchResult key={track.uri} track={track} />
                            ))}
                            </div>
                        </div> : <div></div>}
                </div>
            </div>
        </div >
    )
})

export default Search