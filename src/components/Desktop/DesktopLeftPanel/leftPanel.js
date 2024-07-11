import filemanager_image from '../../../images/desktop_icons/filemanager-app.png'
import userTrash_image from '../../../images/desktop_icons/user-trash.png'
import cmd_image from '../../../images/desktop_icons/terminal-app.png'

export default function LeftPanelComponent() {
    const tempSpan = Array.from({ length: 9 }, (_, i) => i + 1)

    return (
        <div className="left-menu-block">
            <div className="image-app active">
                <img src={filemanager_image} alt="filemanage-app" className="filemanage-app-image"/>
                <div className="tooltip-folder tooltip-folder-right">Файлы</div>
            </div>
            <div className="image-app active">
                <img src={cmd_image} alt="cmd-app" className="cmd-app-image"/>
                <div className="tooltip-folder tooltip-folder-right">Терминал</div>
            </div>
            <div className="space" />
            <div className="image-app">
                <img src={userTrash_image} alt="user-trahs" className="userTrash-image"/>
                <div className="tooltip-folder tooltip-folder-right">Корзина</div>
            </div>
            
            <div className="left-menu-footer-block">
                {tempSpan.map((index) => (<span className="circle" key={index}></span>))}
            </div>
        </div>
    )
}
