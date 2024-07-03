import WatchComponent from './WatchBlock/watch';
import SettingComponent from './SettingBlock/setting';
import LanguageComponent from './LanguageBlock/language';
import LeftPanelComponent from './DesktopLeftPanel/leftPanel';
import DesktopPanelComponent from './DesktopPanel/desktopPanel';

export default function DesktopPage() {
    import('../../styles/desktopPage.css')

    return (
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
    )

}
