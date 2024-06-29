import {ReactComponent as VolumeIcon} from '../../../images/desktop_icons/sound-loud-filled-svgrepo-com.svg'
import {ReactComponent as PowerIcon} from '../../../images/desktop_icons/power-standby-svgrepo-com.svg'
import {ReactComponent as NetworkIcon} from '../../../images/icons_ubuntu/stable/status/network-wireless-signal-excellent-symbolic.svg'

export default function SettingComponent() {
    return (
        <div className="explore-block hover-header">
            <NetworkIcon height='18px' width='100%' fill='#000' className="ui-network-icon"/>
            <VolumeIcon height='18px' width='100%' fill='#fff' />
            <PowerIcon height='15px' width='100%' fill='#fff' />
        </div>
    )
}
