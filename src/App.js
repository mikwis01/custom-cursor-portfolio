import { useState } from 'react'

import LeftSideWrapper from './components/LeftSideWrapper/LeftSideWrapper';
import AnimatedCursor from "react-animated-cursor"
import WorksNav from './components/WorksNav/WorksNav';
import Blur from './components/Blur/Blur';
import Noise from './components/Noise/Noise';

import { MenuContext } from './helper/Context';

import './global_styles/Global.css';
const backgroundAppPicture = new URL('./assets/Background.png', import.meta.url);


function App() {

  const [menuState, setMenuState] = useState(false)
  
  return (
    <div className="app"
      style={{backgroundImage: `url(${backgroundAppPicture})`}}
    >
      <MenuContext.Provider value={{ menuState, setMenuState }}>
        <AnimatedCursor
          innerSize={30}
          outerSize={20}
          color='217, 217, 217'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={2}
          clickables={[
            'a',
            'li',
            'svg',
            'button',
            '.works_tile'
          ]}
          hasBlendMode={true}
          innerStyle={{
            mixBlendMode: 'difference'
          }}
          outerStyle={{
            mixBlendMode: 'difference'
          }}
        />
        <Noise />
        <Blur />
        <LeftSideWrapper />
        <WorksNav/>
      </MenuContext.Provider>
    </div>
  );
}

export default App;
