import { makeAutoObservable } from 'mobx';
import { Playlist } from '../Model/Playlist';
import { ArtistTrackService } from '../Services/ArtistTrackService';
import { FeaturedPlaylistService } from '../Services/FeaturedPlaylistService';
import { UserDetails } from '../Services/UserDetails';

const userDetails = new UserDetails();
const artistTrackService = new ArtistTrackService();
const featuredPlaylistService = new FeaturedPlaylistService();
export class Store {
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
        return userDetails.getDetails(token);
    }

    getArtistTrack = async (token: string) => {
        return artistTrackService.getArtistTrack(token);
    }

    getFeaturedPlaylist = async (token: string) => {
        return featuredPlaylistService.getFeaturedPlaylist(token);
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