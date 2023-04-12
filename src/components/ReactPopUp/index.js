import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {GiHamburgerMenu} from 'react-icons/gi'
import {GrClose} from 'react-icons/gr'

import SideBar from '../SideBar'

import './index.css'

const ReactPopUp = props => {
  const {mode} = props

  const color = mode ? 'menu' : ''

  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button type="button" className={`${color} trigger-button`}>
            <GiHamburgerMenu />
          </button>
        }
      >
        {close => (
          <>
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              <GrClose />
            </button>
            <div className="card">
              <SideBar />
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}
export default ReactPopUp
