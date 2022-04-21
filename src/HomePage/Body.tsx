import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { Playlist } from '../Model/Playlist';
import { Store } from '../Store/Store';
import PlaylistCards from './PlaylistCards';

const Body: React.FC = observer(() => {
  let isLoading: boolean = true;
  const token: string | null = localStorage.getItem('token');
  const featurePlaylist: Playlist[] | null = Store.FeaturedPlaylist;
  const weekTrack: Playlist[] | null = Store.ArtistTracks;

  const FeaturedPlaylist = async () => {
    if (token) {
      await Store.getFeaturedPlaylist(token).then(
        res => {
          Store.setFeaturedPlaylist(res.data.playlists.items);
        }
      );
    }
  }

  const ArtistTrack = async () => {
    if (token) {
      await Store.getArtistTrack(token).then(
        res => {
          Store.setArtistTrack(res.data.items);
        }
      )
    }
  }

  useEffect(() => {
    FeaturedPlaylist();
    ArtistTrack();
  }, []);

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
              return <PlaylistCards key={playlist.uri} playlist={playlist} />
            }) :
              <div className="text-center">Loading...</div>}
          </div>
          <div className="text-[25px] py-[5px]">
            Featuring Arijit Singh
          </div>
          <div className="flex flex row">
            {weekTrack ? weekTrack.slice(0, 6).map((playlist) => {
              return <PlaylistCards key={playlist.uri} playlist={playlist} />
            }) :
              <div className="text-center">Loading...</div>}
          </div>
        </div>
      }</div>
  )
})

export default Body