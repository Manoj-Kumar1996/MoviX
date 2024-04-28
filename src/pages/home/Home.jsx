import React from 'react';
import "./style.scss";
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import Toprated from './toprated/Toprated';

function Home() {
  return (
    <div className='homePage'>
      <HeroBanner/>
      <Trending/>
      <Popular />
      <Toprated/>
    </div>
  )
}

export default Home
