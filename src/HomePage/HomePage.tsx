import React from 'react';
import Navbar from './Navbar';
import Body from './Body';
import { Store } from '../Store/Store';

interface SpotifyProps {
  store: Store;
}
const HomePage: React.FC<SpotifyProps> = ({ store }) => {
  return (
    <div className="flex flex-col">
      <Navbar></Navbar>
      <Body store={store}></Body>
    </div>
  )
}

export default HomePage