import { useMediaQuery } from 'react-responsive';

import WatchComponent from './WatchBlock/watch';
import SettingComponent from './SettingBlock/setting';
import LanguageComponent from './LanguageBlock/language';
import LeftPanelComponent from './DesktopLeftPanel/leftPanel';
import DesktopPanelComponent from './DesktopPanel/desktopPanel';

export default function DesktopPage() {
    import('../../styles/desktopPage.css')

    const isDesktopOrLaptop = useMediaQuery(
		{ minDeviceWidth: 1024 },
	)

    return (
        isDesktopOrLaptop ? (
            <div className='desktop-block'>
                <header className="desktop-header">
                    <div className="hover-header multi-page-hover">
                        <div className="multi-page-button selected" />
                        <div className="multi-page-button" />
                    </div>
                    <WatchComponent />
                    <nav className="system-block">
                        <LanguageComponent />
                        <SettingComponent />
                    </nav>
                </header>

                <LeftPanelComponent />
                
                <div className="desktop">
                    <DesktopPanelComponent />
                </div>
            </div>
        ) : (
            <div>
                <h1 style={{
                    color: "var(--white)",
                    position: "absolute", 
                    top: "45%", left: "50%", 
                    transform: "translate(-50%, -50%)",
                    fontSize: "6.5dvb",
                    textAlign: "center",
                }}>Данная страница пока что не доступна с мобильного устройства</h1>
            </div>
        )
    )

}
