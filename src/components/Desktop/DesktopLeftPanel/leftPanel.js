import filemanager_image from '../../../images/icons_ubuntu/256x256/apps/filemanager-app.png'
import userTrash_image from '../../../images/icons_ubuntu/256x256/places/user-trash.png'
import cmd_image from '../../../images/icons_ubuntu/256x256/apps/terminal-app.png'

export default function LeftPanelComponent() {
    const tempSpan = Array.from({ length: 9 }, (_, i) => i + 1)

    return (
        <div className="left-menu-block">
            <div className="image-app"><img src={filemanager_image} alt="filemanage-app" className="filemanage-app-image"/></div>
            <div className="image-app"><img src={cmd_image} alt="filemanage-app" className="cmd-app-image"/></div>
            <div className="space" />
            <div className="image-app"><img src={userTrash_image} alt="user-trahs" className="userTrash-image"/></div>
            
            <div className="left-menu-footer-block">
                {tempSpan.map((index) => (<span className="circle" key={index}></span>))}
            </div>
        </div>
    )
}
