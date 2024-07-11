import { useState } from 'react'
import { Link } from 'react-router-dom'

import {ReactComponent as VolumeIcon} from '../../../images/desktop_icons/sound-loud-filled-svgrepo-com.svg'
import {ReactComponent as PowerIcon} from '../../../images/desktop_icons/power-standby-svgrepo-com.svg'
import {ReactComponent as NetworkIcon} from '../../../images/icons_ubuntu/stable/status/network-wireless-signal-excellent-symbolic.svg'
import screenshotIcon from '../../../images/screenshot-icon.png'
import settingIcon from '../../../images/setting-icon.png'
import lockIcon from '../../../images/lock-icon.png'

export default function SettingComponent() {
    const [modalActive, setModalActive] = useState(false)

    return (
        <>
            <div className="explore-block hover-header" onClick={() => setModalActive(modalActive ? false : true)}>
                <NetworkIcon height='18px' width='100%' className="ui-network-icon"/>
                <VolumeIcon height='18px' width='100%' fill='#fff' />
                <PowerIcon height='15px' width='100%' fill='#fff' />
            </div>
            <div className={modalActive ? "explore-modal active" : "explore-modal"}>
                <div className="explore-modal-header">
                    <div>
                        <div className="setting-button">
                            <img src={screenshotIcon} alt="screenshot"/>
                        </div>
                        <div className="setting-button">
                            <img src={settingIcon} alt="settings"/>
                        </div>
                    </div>
                    <div>
                        <div className="setting-button">
                            <img src={lockIcon} alt="lock"/>
                        </div>
                        <div className="setting-block-link">
                            <Link to="/"><div className="setting-button">
                                <PowerIcon height="15px" width="100%" fill="#fff" />
                            </div></Link>
                        </div>
                    </div>
                </div>
                <div className="explore-modal-body">
                    <div className="block-volume">
                        <VolumeIcon height="18px" width="100%" fill="#fff" />
                        <input type="range" id="radius"/>
                    </div>
                    <div className="block-settings-buttons">
                        <div className="setting-network-block">
                            <NetworkIcon height='20px' />
                            <span>WI-FI</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
