import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { Playlist } from '../Model/Playlist';
import { Store } from '../Store/Store';
import PlaylistCards from './PlaylistCards';

const spotifyStore = new Store();

const Body: React.FC = observer(() => {
  var isLoading: boolean = true;
  const token: string | null = localStorage.getItem('token');
  const featurePlaylist: Playlist[] | null = spotifyStore.FeaturedPlaylist;
  const weekTrack: Playlist[] | null = spotifyStore.ArtistTracks;

  const FeaturedPlaylist = async () => {
    if (token) {
      await spotifyStore.getFeaturedPlaylist(token).then(
        res => {
          spotifyStore.setFeaturedPlaylist(res.data.playlists.items);
        }
      );
    }
  }

  const ArtistTrack = async () => {
    if (token) {
      await spotifyStore.getArtistTrack(token).then(
        res => {
          spotifyStore.setArtistTrack(res.data.items);
        }
      )
    }
  }

  useEffect(() => {
    FeaturedPlaylist();
    ArtistTrack();
  });

  if (featurePlaylist && weekTrack) {
    isLoading = false;
  }

  return (
    <div className="body pb-[8vh]">
      {isLoading ? <div className="text-center">Loading...</div> :
        <div className="flex flex-col px-[30px] text-white">
          <div className="text-[25px] py-[5px]">
            Featured Playlist
          </div>
          <div className="flex flex row">
            {featurePlaylist ? featurePlaylist.slice(0, 6).map((playlist) => {
              return <PlaylistCards playlist={playlist} />
            }) :
              <div className="text-center">Loading...</div>}
          </div>
          <div className="text-[25px] py-[5px]">
            Featuring Arijit Singh
          </div>
          <div className="flex flex row">
            {weekTrack ? weekTrack.slice(0, 6).map((playlist) => {
              return <PlaylistCards playlist={playlist} />
            }) :
              <div className="text-center">Loading...</div>}
          </div>
        </div>
      }</div>
  )
})

export default Body