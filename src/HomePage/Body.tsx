import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { Playlist } from '../Model/Playlist';
import { Store } from '../Store/Store';
import PlaylistCards from './PlaylistCards';

interface BodyProps {
  store: Store;
}

const Body: React.FC<BodyProps> = observer(({ store }) => {
  var isLoading: boolean = true;
  const token: string | null = localStorage.getItem('token');
  const featurePlaylist: Playlist[] | null = store.FeaturedPlaylist;
  const weekTrack: Playlist[] | null = store.ArtistTracks;

  const FeaturedPlaylist = async () => {
    if (token) {
      await store.getFeaturedPlaylist(token).then(
        res => {
          store.setFeaturedPlaylist(res.data.playlists.items);
        }
      );
    }
  }

  const ArtistTrack = async () => {
    if (token) {
      await store.getArtistTrack(token).then(
        res => {
          store.setArtistTrack(res.data.items);
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
              return <PlaylistCards playlist={playlist} store={store} />
            }) :
              <div className="text-center">Loading...</div>}
          </div>
          <div className="text-[25px] py-[5px]">
            Featuring Arijit Singh
          </div>
          <div className="flex flex row">
            {weekTrack ? weekTrack.slice(0, 6).map((playlist) => {
              return <PlaylistCards playlist={playlist} store={store} />
            }) :
              <div className="text-center">Loading...</div>}
          </div>
        </div>
      }</div>
  )
})

export default Body