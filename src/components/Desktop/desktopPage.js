import Botofolio from '../Work/botofolio';
import About from '../About/about';
import Contact from '../Contact/contact';

import WatchComponent from './WatchBlock/watch';
import SettingComponent from './SettingBlock/setting';
import LanguageComponent from './LanguageBlock/language';
import LeftPanelComponent from './DesktopLeftPanel/leftPanel';

import '../../styles/desktopPage.css'


const renderSwitch = (param) => {
    switch(param) {
        case 'botofolio':
            return <Botofolio />;
        case 'about':
            return <About />;
        case 'contact':
            return <Contact />;
        default:
            return null;
    }
}


export default function DesktopPage({
    path
}) {
    console.log(path)

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
                <div className="desktop-panel"></div>
                {renderSwitch(path)}
            </div>
        </div>
    )

}
