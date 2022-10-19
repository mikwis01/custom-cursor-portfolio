import React, {useContext} from 'react'
import { MenuContext } from '../../helper/Context';

import './Blur.css'

const Blur = () => {

  const {menuState, setMenuState} = useContext(MenuContext);

  return (
    <div className={menuState ? 'blur_active' : 'blur'}></div>
  )
}

export default Blur