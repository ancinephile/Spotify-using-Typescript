import React from "react";
import { makeAutoObservable } from 'mobx';
import { Playlist } from '../Model/Playlist';
import { getArtistTrack, getFeaturedPlaylist, getDetails } from '../Services/Services';

class StoreImpl {
    isPlaying: boolean = false;
    uri: string = "";
    user: any = null;
    ArtistTracks: Playlist[] | null = null;
    FeaturedPlaylist: Playlist[] | null = null;
    SearchAlbums: Playlist[] | null = null;
    SearchTracks: Playlist[] | null = null;
    constructor() {
        makeAutoObservable(this);
    }

    users = async (token: string) => {
        return getDetails(token);
    }

    getArtistTrack = async (token: string) => {
        return getArtistTrack(token);
    }

    getFeaturedPlaylist = async (token: string) => {
        return getFeaturedPlaylist(token);
    }

    setUser(data: any) {
        this.user = data
    }

    setArtistTrack(data: Playlist[]) {
        this.ArtistTracks = data;
    }

    setFeaturedPlaylist(data: Playlist[]) {
        this.FeaturedPlaylist = data;
    }

    setSearchAlbums(data: Playlist[]) {
        this.SearchAlbums = data;
    }

    setSearchTracks(data: Playlist[]) {
        this.SearchTracks = data;
    }

    setPlaying(data: boolean) {
        this.isPlaying = data;
    }

    setURI(data: string) {
        this.uri = data;
    }

}

export const Store = new StoreImpl();
