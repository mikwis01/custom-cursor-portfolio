import React from 'react';
import MainHeader from '../MainHeader/MainHeader';
import WorksHeader from '../WorksHeader/WorksHeader';
import Socials from '../Socials/Socials';

import './LeftSideWrapper.css';

const LeftSideWrapper = () => {
  return (
    <div className='left_side_wrapper'>
        <MainHeader />
        <WorksHeader />
        <Socials />
    </div>
  )
}

export default LeftSideWrapper