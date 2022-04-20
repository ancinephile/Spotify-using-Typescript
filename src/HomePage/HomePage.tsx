import React from 'react';
import Navbar from './Navbar';
import Body from './Body';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Navbar></Navbar>
      <Body></Body>
    </div>
  )
}

export default HomePage