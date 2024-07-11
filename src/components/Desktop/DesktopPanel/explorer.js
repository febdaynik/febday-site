import Draggable from 'react-draggable';
import { Outlet, useNavigate } from 'react-router-dom';

import { ReactComponent as UserHomeSvg } from '../../../images/desktop_icons/user-home-symbolic.svg';
import { ReactComponent as UserTrashSvg } from '../../../images/desktop_icons/user-trash-symbolic.svg';
import { ReactComponent as ArrowLeftSvg } from '../../../images/desktop_icons/pan-start-large-symbolic.svg';
import { ReactComponent as ArrowRightSvg } from '../../../images/desktop_icons/pan-end-large-symbolic.svg';
import { onStartDraggable } from './desktopPanel';

export default function ExplorerComponent() {
    const navigate = useNavigate();

    return (
        <Draggable 
            handle=".explorer-header-block"
            onStart={onStartDraggable}
        >
            <div className="explorer-block visual-draggable-block">
                <div className="explorer-header-block">
                    <span className="explorer-header-title">Файлы</span>
                    <div className="header-pagination">
                        <div className={`header-pag-button ${window.navigation.canGoBack ? "active" : ""}`} onClick={() => navigate(-1)}><ArrowLeftSvg /></div>
                        <div className={`header-pag-button ${window.navigation.canGoForward ? "active" : ""}`} onClick={() => navigate(1)}><ArrowRightSvg /></div>
                    </div>
                    <div className="header-title-block">
                        <UserHomeSvg />
                        <span className="explorer-header-title">...</span>
                    </div>
                    <div className="action-button-block">
                        <div className="-button">─</div>
                        <div className="-button">◻</div>
                        <div className="-button">✕</div>
                    </div>
                </div>
                <div className="explorer-blocks">
                    <div className="explorer-left-block">
                        <div>
                            <div className="explorer-left-link-folder" onClick={() => navigate('')}>
                                <UserHomeSvg />
                                <span>Домашнаяя папка</span>
                            </div>
                            <div className="explorer-left-link-folder" onClick={() => navigate('trash')}>
                                <UserTrashSvg />
                                <span>Корзина</span>
                            </div>
                        </div>
                    </div>
                    <div className="explorer-right-block">
                        <Outlet />
                    </div>      
                </div>
            </div>
        </Draggable>
    )
}